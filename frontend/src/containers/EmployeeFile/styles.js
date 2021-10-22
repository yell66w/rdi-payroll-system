import styled from "styled-components";
export const TextLink = styled.a`
  color: ${(props) => props.theme.colors.lightViolet};
  cursor: pointer;
  text-decoration: underline;
  font-family: ${(props) => props.theme.fonts.avenirRoman};
`;

export const Container = styled.div`
  display: flex;
  padding: 2em;
  flex-direction: row;
`;

export const Flex = styled.div`
  display: flex;
  flex-grow: ${(props) => (props.flex ? props.flex : 1)};
  background-color: ${(props) => (props.bg ? props.bg : null)};
`;
