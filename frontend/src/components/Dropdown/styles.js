import styled from 'styled-components';

const colors = {
  white: (props) => props.theme.colors.white,
  lightViolet: (props) => props.theme.colors.lightViolet
};

export const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  min-width: 15rem;
`;

export const Container = styled.div`
  background: ${colors.white};
  padding: 0.75rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.div`
  user-select: none;
  text-transform: capitalize;
  font-family: ${(props) => props.theme.fonts.avenirRoman};
`;

export const Options = styled.div`
  position: absolute;
  width: inherit;
  max-height: 12rem;
  overflow-x: hidden;
  overflow-y: auto;
  background: ${colors.white};
  border-radius: 10px;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  z-index: 10;
`;

export const List = styled.li`
  list-style: none;
  margin: 0.5rem 0;
  padding: 1rem;
  user-select: none;
  font-family: ${(props) => props.theme.fonts.avenirRoman};

  &:hover {
    background: ${colors.lightViolet};
  }
`;
