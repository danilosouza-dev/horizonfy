import { CardAlbums } from "../CardAlbums";
import { Container } from "./styles";

export function ContentBase({ releasesList, albumsList, featuredPlaylists }) {
  return (
    <>
      <Container>
        <section>
          {Object.keys(albumsList).length > 0 && (
            <>
              {albumsList.items.map((item, key) => (
                <CardAlbums item={item} key={key} />
              ))}
            </>
          )}

          {Object.keys(releasesList).length > 0 &&
            Object.keys(albumsList).length === 0 && (
              <>
                {releasesList.albums.items.map((item, key) => (
                  <CardAlbums item={item} key={key} />
                ))}
              </>
            )}
        </section>
      </Container>
    </>
  );
}
