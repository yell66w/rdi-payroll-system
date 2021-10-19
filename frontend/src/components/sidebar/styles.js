import styled from "styled-components"

export const Nav = styled.div`
    background-color: ${(props) => props.theme.colors.violet};    
    list-style-type: none;    
    height: 100vh;
    width: 21em;
    position: relative;
    overflow: hidden;
`;

export const CompanyLogo = styled.div`
    padding: 2em;
    display: flex;
    justify-content: center;
`;

export const DummyLogo = styled.div`
    width: 160px;
    height: 160px;
    background-color: ${(props)=> props.theme.colors.white};
`;