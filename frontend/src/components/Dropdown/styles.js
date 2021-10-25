import styled from 'styled-components';

const colors = {
  white: (props) => props.theme.colors.white,
  lightViolet: (props) => props.theme.colors.lightViolet,
};

export const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 15rem;
`;

export const Container = styled.div`
  background: ${colors.white};
  padding: 1rem;
  border-radius: 20px;
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
  background: ${colors.white};
  border-radius: 20px;
  padding: 0.5rem 0;
  margin-top: 1rem;
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
