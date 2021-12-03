import styled from "styled-components";

export const Container = styled.div`
  margin-top: -7rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  div {
    padding: 1.5rem 2rem;
    background: var(--shape);
    color: var(--text-title);
    border-radius: 0.25rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      margin-top: 1rem;
      display: inline-block;
      font-size: 2.25rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &:last-child {
      background: var(--green);
      color: #fff;
    }
  }
`;
