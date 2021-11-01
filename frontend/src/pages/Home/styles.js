import styled from 'styled-components';

export const MainCan = styled.div`
  display: flex;
`;

export const MainRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 6;
  height: 100vh;
  overflow: hidden;
`;

export const WrapperRight = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;

export const LinksWrapper = styled.span`
  flex: 1;
`;

export const ButtonWrapper = styled.span`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;

  button {
    width: 50%;
    svg {
      margin-right: 1rem;
    }
  }
`;
