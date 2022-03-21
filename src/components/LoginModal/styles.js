import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .login-logo {
    width: 300px;
    margin-bottom: 50px;
  }
  
  h2 {
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1rem;
    color: #fff;
    font-weight: light;
    line-height: 1.4;
    padding: .5rem;

    & span {
      font-weight: 700;
    }
  }

  button {
    padding: 1rem 3rem;
    border: none;
    border-radius: 5px;
    margin-top: 1.5rem;
    background: #1db954;
    transition-duration: 0.3s;

    &:hover {
      filter: brightness(0.8);
    }   
  }

  a {
    font-size: 0.9rem;
    color: #fff;
    text-decoration: none;
  }
`;
