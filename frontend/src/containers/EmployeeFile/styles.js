import styled from "styled-components";
export const TextLink = styled.a`
  color: ${(props) => props.theme.colors.lightViolet};
  cursor: pointer;
  text-decoration: underline;
  font-family: ${(props) => props.theme.fonts.avenirRoman};
`;
