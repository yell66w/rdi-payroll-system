import React from 'react';
import CurrDate from './date';
import { HeaderCan, HeaderName, HeaderDate } from './styles';

function Header(props) {
  return (
    <>
      <HeaderCan>
        <HeaderName>{props.headerName}</HeaderName>

        <HeaderDate>
          <CurrDate />
        </HeaderDate>
      </HeaderCan>
    </>
  );
}

export default Header;
