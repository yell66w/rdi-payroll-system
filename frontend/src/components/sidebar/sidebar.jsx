import React from "react"
import styled from "styled-components"

const Nav = styled.div`
    background-color: ${(props) => props.theme.colors.violet};    
    list-style-type: none;    
    height: 100vh;
    width: 21em;
`;

const CompanyLogo = styled.div`
    padding: 2em;
    display: flex;
    justify-content: center;
`;

const DummyLogo = styled.div`
    width: 160px;
    height: 160px;
    background-color: ${(props)=> props.theme.colors.white};
`;

function Sidebar(props)
{    
    return(
        <>
            <Nav>
                <CompanyLogo>
                    <DummyLogo>

                    </DummyLogo>
                </CompanyLogo>
                {props.listContent} 
                {/* every links will be inserted here */}
            </Nav>
        </>
    )
}

export default Sidebar
