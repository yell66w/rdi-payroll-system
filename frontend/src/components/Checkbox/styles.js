import styled from 'styled-components';

const colors = {
  white: (props) => props.theme.colors.white,
  violet: (props) => props.theme.colors.violet
};

export const Box = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: ${colors.white};
  border-radius: 3px;

  &:hover {
    background-color: ${colors.violet};
  }
`;

export const Container = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  svg {
    display: none;
    position: absolute;
    top: 3px;
    left: 1px;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ ${Box} {
      background-color: ${colors.violet};
    }

    &:checked ~ ${Box} + svg {
      display: block;
      path {
        fill: ${colors.white};
      }
    }
  }
`;

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  gap: 2rem;
  span {
    user-select: none;
  }
`;
