import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    height: 3rem;
    padding: 0 2rem;
    background: var(--blue-light);
    color: #fff;

    font-size: 1rem;
    font-weight: 600;

    border: 1px solid var(--blue-light);
    border-radius: 0.25rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
