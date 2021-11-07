import styled from "styled-components";
import { theme } from "@/theme";
// REUSABLE GLOBAL STYLES ONLY
export const HeaderText = styled.p`
  font-size: ${(props) =>
    props.size ? theme.fontSizes[props.size] : theme.fontSizes.xl2};
  color: ${theme.colors.violet};
  font-weight: bold;
  font-family: ${theme.fonts.avenirBlack};
`;
export const ErrorText = styled.small`
  color: ${theme.colors.red};
  font-size: ${theme.fontSizes.xs};
`;

export const Text = styled.small`
  color: ${(props) => (props.color ? theme.colors[props.color] : "black")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : null)};
  font-family: ${(props) =>
    props.fontFamily ? theme.fonts[props.fontFamily] : theme.fonts.avenirRoman};
  font-size: ${(props) =>
    props.size ? theme.fontSizes[props.size] : theme.fontSizes.md};
`;

export const VStack = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const HStack = styled.div`
  display: flex;
  flex-direction:column
  gap: 0.5rem;
`;
