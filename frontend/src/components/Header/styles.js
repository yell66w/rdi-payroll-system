import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'theme';

export const HeaderCan = styled.div`
  padding: 1.5em 0em 1.2em 2.5em;
  box-shadow: 0px 10px 10px rgba(46, 54, 68, 0.1);
  display: flex;
  justify-content: space-between;
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

export const TabGroup = styled.div`
  display: flex;
  gap: 5em;
  margin-right: 10em;
  align-items: center;
`;

export const TabLinkText = styled(Link)`
  font-family: ${(props) => props.theme.fontSizes.avenirRoman};
  color: ${(props) => (props.color ? theme.colors[props.color] : theme.colors.violet)};
  font-size: ${(props) => (props.size ? theme.fontSizes[props.size] : theme.fontSizes.md)};
  cursor: pointer;
  text-decoration: none;

  &:focus {
    color: ${theme.colors.violet};
    font-family: ${theme.fonts.avenirBlack};
    text-decoration: underline;
  }
  &:active {
    color: ${theme.colors.violet};
  }
`;
