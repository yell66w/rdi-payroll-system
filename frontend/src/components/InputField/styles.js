import styled from 'styled-components';
import { theme } from 'theme';

const colors = {
  default: (props) => props.theme.colors.violet,
  white: (props) => props.theme.colors.white,
  lightViolet: (props) => props.theme.colors.lightViolet
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: 15rem;
  width: 100%;
  height: 3rem;
  border-radius: 10px;
  background: ${(props) => (props.disabled ? colors.lightViolet : colors.white)};
  span {
    display: flex;
    align-items: center;
    margin: 0 1rem;

    svg {
      height: 1rem;
      width: 1rem;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0 1rem 0 1rem;
  border: 1.5px solid ${(props) => (props.bg ? props.bg : 'silver')};
  height: inherit;
  border-radius: 5px;
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.md};
  font-family: ${(props) => props.theme.fontSizes.avenirRoman};
  background: ${(props) => (props.disabled ? colors.lightViolet : colors.white)};

  &:focus-within {
    /* border: 2px solid ${(props) => props.theme.colors.violet}; */
    box-shadow: 0pt 0pt 0pt 1pt ${(props) => props.theme.colors.violet};
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  margin-left: 0.2rem;
  font-size: ${theme.fontSizes.sm};
  font-family: ${(props) => props.theme.fontSizes.avenirRoman};
`;
