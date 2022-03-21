import { Container } from "./styles";

export function Featured({ setSearchKey, searchKey }) {
  return (
    <Container>
      <div className="featured-overlay-top">
        <div className="featured-search">
          <h2>Busque seus albuns favoritos</h2>
          <input
            type="text"
            placeholder="Digite o nome do album"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
      </div>
    </Container>
  );
}
