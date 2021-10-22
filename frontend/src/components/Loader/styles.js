import styled from "styled-components";

const colors = {
  primary: (props) => props.theme.colors.violet,
  white: (props) => props.theme.colors.white,
};

export const Container = styled.div`
  border: 3px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: ${(props) =>
    props.primary ? colors.primary : colors.white};
  border-radius: 50%;
  width: 2em;
  height: 2em;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
