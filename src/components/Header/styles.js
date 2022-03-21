import styled from 'styled-components';

export const Container = styled.header`
  background: transparent;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  transition: all ease 0.5s;
  
  &.background-black-scroll-header {
    background-color: #181818;
  }
`;

export const Content = styled.div`
  max-width: 1208px;
  margin: 0 auto;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .user-info {
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    max-width: 300px;
    display: flex;
    align-items: center;
  }

  .logo {
    width: 150px;
  }

  .user-avatar {
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
  }
`;