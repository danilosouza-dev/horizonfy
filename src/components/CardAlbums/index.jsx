import { Link } from "react-router-dom";
import { Container } from "./styles";

export function CardAlbums({ item }) {
  return (
    <>
      <Container>
        <Link to={`albums/${item.id}`}>
          <img className="img-card-album" src={item.images[0].url} alt="" />
          <div className="container-title-card">
            <h2 className="title-card">{item.name}</h2>
          </div>
          <p className="subtitle-card">
            {item.artists.map((artist) => artist.name).join(", ")}
          </p>
        </Link>
      </Container>
    </>
  );
}
