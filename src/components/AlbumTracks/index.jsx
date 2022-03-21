import { Container } from "./styles";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ListTrack } from "../ListTrack";
import { IoIosArrowBack } from "react-icons/io";

export function AlbumTracks({ getAlbum, albumInfo, loading }) {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getAlbum(id);
      window.scrollTo(0, 0);
    }
  }, [id]);

  return (
    <>
      {!loading && (
        <Container>
          <div className="album-cover">
            <Link replace to="/">
              <IoIosArrowBack className="back-icon" /> Voltar
            </Link>

            <img src={albumInfo.images[0].url} alt="" />
            <div className="title-subtitle-album">
              <h2>{albumInfo.name}</h2>
              <p>{albumInfo.artists.map((artist) => artist.name).join(", ")}</p>
            </div>
          </div>
          <ListTrack tracks={albumInfo.tracks.items.map((track) => track)} />
        </Container>
      )}
    </>
  );
}
