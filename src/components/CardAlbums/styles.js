import styled from 'styled-components';

export const Container = styled.div`
  max-width: 200px;
  padding: 1rem;
  border-radius: 4px;
  background-color: #282828;
  transition-duration: 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2)
  }

  .img-card-album {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 15px;
  }

  .container-title-card {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 5px;
  }

  .title-card {
    font-size: 1rem;
    font-weight: 700;
    display: inline;
  }

  .subtitle-card {
    font-size: .87rem;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;