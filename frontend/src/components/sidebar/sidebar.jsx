import React from "react"
import {Nav, CompanyLogo, DummyLogo} from "./styles.js"

function Sidebar({children})
{    
    return(
        <>
            <Nav>
                <CompanyLogo>
                    <DummyLogo>

                    </DummyLogo>
                </CompanyLogo>
                {children}
            </Nav>
        </>
    )
}

export default Sidebar
