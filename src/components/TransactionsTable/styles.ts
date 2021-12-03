import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      padding: 1rem 2rem;
      color: var(--text-body);

      font-weight: 400;
      line-height: 1.5rem;
      text-align: left;
    }

    td {
      padding: 1rem 2rem;

      background: var(--shape);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
      }

      &.income {
        color: var(--green);
      }

      &.expense {
        color: var(--red);
      }
    }
  }
`;
