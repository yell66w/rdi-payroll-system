import { Text } from "@/styles";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CurrDate from "./date";
import {
  HeaderCan,
  HeaderName,
  HeaderDate,
  TitleContainer,
  TabsContainer,
  TabLink,
} from "./styles";

function Header(props) {
  const { pathname } = useLocation();
  const tabsMap = new Map();
  tabsMap.set("/cash-advance", ["RUN", "PROCESSED C.A.'s"]);

  return (
    <>
      <HeaderCan>
        <TitleContainer>
          <HeaderName>{props.headerName}</HeaderName>
          <HeaderDate>
            <CurrDate />
          </HeaderDate>
        </TitleContainer>
        <TabsContainer>
          {tabsMap.get(pathname)?.map((tab, idx) => {
            return (
              <TabLink key={`${tab}-${idx}`} size="xl" color="darkGray">
                {tab}
              </TabLink>
            );
          })}
        </TabsContainer>
      </HeaderCan>
    </>
  );
}

export default Header;
