import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CurrDate from './date';
import { HeaderCan, HeaderName, HeaderDate, TabGroup, TabLinkText } from './styles';

function Header({ headerName }) {
  const location = useLocation();

  // TODO - REFACTOR
  const tabsMap = new Map();
  tabsMap.set(
    '/cash-advance',
    <TabGroup>
      <TabLinkText to="/cash-advance" color="darkGray" size="xl">
        RUN
      </TabLinkText>
      <TabLinkText to="/cash-advance/processed" color="darkGray" size="xl">
        PROCESSED C. A.&apos;s
      </TabLinkText>
    </TabGroup>
  );
  tabsMap.set(
    '/cash-advance/processed',
    <TabGroup>
      <TabLinkText to="/cash-advance" color="darkGray" size="xl">
        RUN
      </TabLinkText>
      <TabLinkText to="/cash-advance/processed" color="darkGray" size="xl">
        PROCESSED C. A.&apos;s
      </TabLinkText>
    </TabGroup>
  );

  return (
    <>
      <HeaderCan>
        <div>
          <HeaderName>{headerName}</HeaderName>
          <HeaderDate>
            <CurrDate />
          </HeaderDate>
        </div>
        {tabsMap.get(location.pathname)}
      </HeaderCan>
    </>
  );
}

export default Header;
