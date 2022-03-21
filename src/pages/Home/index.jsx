import { ContentBase } from "../../components/ContentBase";
import { Featured } from "../../components/Featured";
import { Header } from "../../components/Header";

export function Home({
  loading,
  backHeader,
  userInfos,
  searchKey,
  setSearchKey,
  albumsList,
  releasesList,
  featuredPlaylists,
}) {
  return (
    <>
      <Header userInfos={userInfos} backHeader={backHeader} />

      <Featured searchKey={searchKey} setSearchKey={setSearchKey} />

      <ContentBase
        loading={loading}
        releasesList={releasesList}
        featuredPlaylists={featuredPlaylists}
        albumsList={albumsList}
      />
    </>
  );
}
