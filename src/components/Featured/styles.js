import styled from "styled-components";
import imgFeatured from '../../assets/background-img-horizonfy.jpeg';

export const Container = styled.section`
  width: 100%;
  height: 60vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${imgFeatured});

  .featured-overlay-top {
    widows: inherit;
    height: inherit;
    background: linear-gradient(#111 10%, rgba(0,0,0,0.6), #111 90%);
    display: flex;
  }

  .featured-search {
    max-width: 1000px;
    color: #fff;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
      font-size: 16px;
      width: 60%;
      padding: 0 1.5rem;
      height: 2.5rem;
      border-radius: 0.25rem;
      border: 1px solid #d7d7d7;
      background: #e7e9ee;
      font-weight: 400;
      outline: none;
    }
    
    & h2 {
      font-size: 3.5rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
`;