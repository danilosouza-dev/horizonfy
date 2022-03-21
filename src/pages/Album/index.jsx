import { AlbumTracks } from "../../components/AlbumTracks";
import { Header } from "../../components/Header";

export function Album({
  backHeader,
  loading,
  userInfos,
  getAlbum,
  albumInfo,
}) {
  return (
    <>
      <Header userInfos={userInfos} backHeader={backHeader} />
      <AlbumTracks
        getAlbum={getAlbum}
        albumInfo={albumInfo}
        loading={loading}
      />
    </>
  );
}
