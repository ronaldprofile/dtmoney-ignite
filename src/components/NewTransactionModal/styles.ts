import styled from "styled-components";
import { darken, transparentize } from "polished";

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: var(--text-title);
  }

  input {
    height: 4rem;
    width: 100%;
    padding: 0 1.5rem;

    font-size: 1rem;
    font-weight: 400;

    background: var(--background-input);
    border: 1px solid var(--border-color);
    border-radius: 0.25rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    margin-top: 1.5rem;
    height: 4rem;
    width: 100%;
    padding: 0 1.5rem;

    font-size: 1rem;
    font-weight: 600;
    background: var(--green);
    color: #fff;

    border: 0;
    border-radius: 0.25rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

const colors = {
  green: "#33CC95",
  red: "#E62E4D"
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.125rem;

  border-radius: 0.25rem;
  background: ${props =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};

  border: 1px solid var(--border-color);
  transition: border-color 0.2s;
  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--text-title);
  }
`;
