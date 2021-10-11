import styled from "styled-components";

const colors = {
  default: (props) => props.theme.colors.violet,
  white: (props) => props.theme.colors.white,
  lightViolet: (props) => props.theme.colors.lightViolet,
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  min-width: 15rem;
  width: 15rem;
  padding: 0.5rem 1rem;
  border: 1.5px solid ${(props) => (props.disabled ? colors.default : "silver")};
  border-radius: 10px;
  background: ${(props) =>
    props.disabled ? colors.lightViolet : colors.white};
  span {
    display: flex;
    align-items: center;
    margin: 0 0.5rem;

    svg {
      height: 1rem;
      width: 1rem;
    }
  }

  &:focus-within {
    border: 2px solid ${(props) => props.theme.colors.violet};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  border: none;
  outline: none;
  text-transform: capitalize;
  font-size: ${(props) => props.theme.fontSizes.md};
  background: ${(props) =>
    props.disabled ? colors.lightViolet : colors.white};
`;

export const Label = styled.label`
  text-transform: uppercase;
  margin-left: 0.2rem;
`;
