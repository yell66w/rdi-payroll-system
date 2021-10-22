import styled from "styled-components";

export const TableStyles = styled.div`
  table {
    text-align: center;
    border-spacing: 0;
    tbody {
      tr:nth-child(even) {
        background-color: #f6f6f6;
      }
      td {
        font-family: ${(props) => props.theme.fonts.avenirRoman};
        padding: 0.8em 2em;
      }
    }

    th {
      color: ${(props) => props.theme.colors.violet};
      font-family: ${(props) => props.theme.fonts.avenirBlack};
      font-size: 1em;
      padding-bottom: 0.3em;
      border-bottom: 1px solid ${(props) => props.theme.colors.violet};
    }
  }
`;
