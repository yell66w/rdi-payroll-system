import { NavLink } from "react-router-dom"
import "./Link.css"

function Link({children, to})
{    
    return(
        <>        
            <li className="list-style">
                <NavLink 
                    exact
                    className="link" 
                    activeClassName="link-active" 
                    to={to}>
                    {children}
                </NavLink>
            </li>     
        </>
    )
}

export default Link