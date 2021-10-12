import styled from "styled-components";

// NOTE: properties are on theme.js

const color = {
  default: (props) => props.theme.colors.violet,
  darkViolet: (props) => props.theme.colors.darkViolet,
  secondary: (props) => props.theme.colors.white,
  red: (props) => props.theme.colors.red,
  green: (props) => props.theme.colors.green,
};

export const Container = styled.button`
  cursor: pointer;
  user-select: none;
  color: ${(props) =>
    props.color === "secondary" ? color.default : color.secondary};
  background-color: ${(props) =>
    props.color === "secondary"
      ? color.secondary
      : props.color === "red"
      ? color.red
      : props.color === "green"
      ? color.green
      : color.default};
  border: ${(props) =>
    props.color === "secondary"
      ? `2px solid ${props.theme.colors.violet}`
      : "none"};
  outline: none;
  min-width: 15rem;
  width: 100%;
  height: 3rem;
  border-radius: 10px;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.avenirRoman};
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    background: #440099;
    transition: 0.1s ease-in-out;
  }
`;
