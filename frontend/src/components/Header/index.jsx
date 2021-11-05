import React from 'react';
import CurrDate from './date';
import { HeaderCan, HeaderName, HeaderDate, TabGroup, TabLinkText } from './styles';

function Header({ headerName }) {
  return (
    <>
      <HeaderCan>
        <div>
          <HeaderName>{headerName}</HeaderName>
          <HeaderDate>
            <CurrDate />
          </HeaderDate>
        </div>
      </HeaderCan>
    </>
  );
}

export default Header;
