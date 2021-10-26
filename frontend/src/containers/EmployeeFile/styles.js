import styled from 'styled-components';

export const TextLink = styled.a`
  color: ${(props) => props.theme.colors.lightViolet};
  cursor: pointer;
  text-decoration: underline;
  font-family: ${(props) => props.theme.fonts.avenirRoman};
`;

export const Wrapper = styled.div`
  height: inherit;
`;

export const Container = styled.div`
  height: inherit;
  display: flex;
  flex-direction: row;
`;

export const Flex = styled.div`
  display: flex;
  flex-grow: ${(props) => (props.flex ? props.flex : 1)};
  background-color: ${(props) => (props.bg === 'gray' ? props.theme.colors.gray : null)};
  transition: 0.3s ease-in-out;

  & .child {
    transition-delay: 1s;
  }
`;

export const TableContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 2em;
`;
