import React from "react"
import styled from "styled-components"

const Li = styled.li`
    color: ${(props) => props.theme.colors.white};
    padding: 0em;
    text-align: center;

    &:hover{
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props)=> props.theme.colors.violet};
    }

`;

const Anchor = styled.a`
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props)=> props.theme.fonts.avenirBlack};    
    display: block;
    padding: 1.5em;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props)=> props.theme.colors.violet};        
    }
`;



function Link(props)
{    
    return(
        <>
            <Li><Anchor href={props.theLink}>{props.theList}</Anchor></Li>
        </>
    )
}

export default Link
