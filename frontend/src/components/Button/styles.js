import styled from "styled-components";

// NOTE: properties are on theme.js

const color = {
  default: (props) => props.theme.colors.violet,
  secondary: (props) => props.theme.colors.white,
  red: (props) => props.theme.colors.red,
  green: (props) => props.theme.colors.green,
};

export const Container = styled.div`
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
    props.color === "secondary" && `2px solid ${props.theme.colors.violet}`};
  min-width: 15rem;
  width: 100%;
  padding: 1.2rem;
  border-radius: 10px;
  text-align: center;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.avenirRoman};
`;
