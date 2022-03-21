import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Album } from './pages/Album';

export default function MainRoutes({
  backHeader,
  loading,
  getAlbum,
  albumInfo,
  userInfos,
  searchKey,
  setSearchKey,
  albumsList,
  releasesList,
  featuredPlaylists
}) {
  return (
    <Routes>
      <Route path="/" element={(
        <Home
          backHeader={backHeader}
          userInfos={userInfos}
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          albumsList={albumsList}
          releasesList={releasesList}
          featuredPlaylists={featuredPlaylists}
        />
      )} />

      <Route path="albums/:id" element={(
        <Album
          backHeader={backHeader}
          loading={loading}
          userInfos={userInfos}
          getAlbum={getAlbum}
          albumInfo={albumInfo}
        />
      )} />

    </Routes>
  )
}
