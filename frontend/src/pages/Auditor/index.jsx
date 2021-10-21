import Sidebar from "components/Sidebar/sidebar.jsx"
import Header from "components/Header/header.jsx"
import NavLink from "components/Link/list.jsx"
import { MainCan, MainRight } from "./styles.js";
import { Route } from "react-router-dom";
import Attendance from "./attendance.jsx";
// try one for pushing
const AuditorPage = () => {
  return (
    <>
          <MainCan>
            <Sidebar>
                <NavLink to="/auditor">Hello</NavLink>  
                <NavLink to="/auditor/attendance">Hello</NavLink>  
                <NavLink to="/auditor/hehego">Hello</NavLink>  
            </Sidebar>   
              
           
              <MainRight>
              
                <Header headerName="payroll" />
                <div>
                    this is table main
                </div>
              <Route path="/auditor/attendance" component={Attendance}/>       
              </MainRight>
            
          </MainCan>    
      
    </>
  
  )
  
};

export default AuditorPage;

// import {Link} from "react-router-dom"
// to="/"