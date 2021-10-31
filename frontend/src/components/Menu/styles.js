import styled from 'styled-components';
import { theme } from 'theme';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: ${theme.colors.gray};
  padding: 0 1rem;
`;

export const Container = styled.div``;

export const Heading = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  margin-top: 0.75rem;
`;

export const Tab = styled.h3`
  color: ${theme.colors.violet};
`;

export const SettingsButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 20px;
  right: -20px;
  border: none;
  background-color: ${theme.colors.gray};
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background-color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      height: 1rem;
      width: 1rem;
    }
  }
`;
