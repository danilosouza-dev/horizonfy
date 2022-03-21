import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  max-width: 1208px;
  margin: 100px auto;
  padding: 2.5rem 1rem;
  display: flex;
  gap: 8rem;

  .album-cover {
    text-align: left;

    .back-icon {
      margin-right: 5px;
    }

    & h2 {
      font-weight: 700;
      margin: 10px;
    }
    
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #fff;
    }

    .title-subtitle-album {
      text-align: center;
    }
  }

  img {
    width: 300px;
    margin-top: 20px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;