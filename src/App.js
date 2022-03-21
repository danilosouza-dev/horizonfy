import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { api } from './services/api';
import { GlobalStyle } from './styles/global';
import { LoginModal } from './components/LoginModal';
import MainRoutes from './routes';

const CLIENT_ID = "a1e68bad16b94cf5abc954183c5d2f98"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

export function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
  const [token, setToken] = useState("");
  const [userInfos, setUserInfos] = useState({});
  const [searchKey, setSearchKey] = useState("");
  const [albums, setAlbums] = useState({});
  const [releases, setReleases] = useState({});
  const [featuredPlaylists, setFeaturedPlaylists] = useState({});
  const [albumInfo, setAlbumInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [backHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 20) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }
    setToken(token);
  }, []);
  useEffect(() => {
    if (token) {
      getUserInfos();
      getReleases();
      getFeaturedPlaylists();
    }
  }, [token]);
  useEffect(() => {
    const get = setTimeout(() => {
      searchAlbums()
    }, 1000)
    return () => clearTimeout(get)
  }, [searchKey]);
  async function getUserInfos() {
    const { data } = await api.get('/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setUserInfos(data)
  }
  async function getFeaturedPlaylists() {
    const { data } = await api.get('/browse/featured-playlists', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        country: "BR",
        locale: "pt_BR",
        limit: "9"
      }
    });
    setFeaturedPlaylists(data);
  }
  async function getReleases() {
    const { data } = await api.get('/browse/new-releases', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        country: "BR",
        limit: "10",
      }
    });
    setReleases(data);
  }
  async function searchAlbums() {
    if (searchKey.length > 0) {
      const { data } = await api.get("/search", {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          q: searchKey,
          type: "album",
          marker: "BR",
          limit: "10",
        }
      })
      setAlbums(data.albums);
    } else {
      setAlbums({});
    }
  }
  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }
  async function getAlbum(id) {
    const { data } = await api.get(`/albums/${id}?market=BR`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setAlbumInfo(data);
    setLoading(false)
  }

  return (
    <>
      <Router>
        <MainRoutes
          backHeader={backHeader}
          loading={loading}
          getAlbum={getAlbum}
          albumInfo={albumInfo}
          userInfos={userInfos}
          setSearchKey={setSearchKey}
          searchKey={searchKey}
          albumsList={albums}
          releasesList={releases}
          featuredPlaylists={featuredPlaylists}
        />

        {!token &&
          <LoginModal
            isLoginModalOpen={isLoginModalOpen}
            handleCloseLoginModal={handleCloseLoginModal}
            auth={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          />
        }

      </Router>
      <GlobalStyle />
    </>
  );
}

