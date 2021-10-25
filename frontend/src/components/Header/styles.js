import styled from 'styled-components';

export const HeaderCan = styled.div`
  padding: 1.5em 0em 1.2em 2.5em;
  box-shadow: 0px 10px 10px rgba(46, 54, 68, 0.1);
`;

export const HeaderName = styled.div`
  color: ${(props) => props.theme.colors.violet};
  font-family: ${(props) => props.theme.fonts.avenirBlack};
  font-size: 1.8em;
  padding-bottom: 0.5em;
`;

export const HeaderDate = styled.div`
  font-family: ${(props) => props.theme.fonts.avenirBook};
  color: rgb(10, 10, 10, 0.7);
  letter-spacing: 5px;
`;
