import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: #9E9A9B;
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      border-bottom: solid 1px rgba(255, 255, 255, 0.2);
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      font-weight: 700;
    }
  }
`;