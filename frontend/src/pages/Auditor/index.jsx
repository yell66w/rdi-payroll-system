import { Route } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import NavLink from "components/Link";

import { MainCan, MainRight, WrapperRight } from "./styles.js";

import Attendance from "./attendance.jsx";
import EmploFile from "./employeefile.jsx";
import ForApproval from "./forapproval.jsx";
import Reports from "./reports.jsx";

const AuditorPage = () => {
  return (
    <>
      <MainCan>
        <Sidebar>
          <NavLink to="/auditor">PAYROLL</NavLink>
          <NavLink to="/auditor/attendance">ATTENDANCE</NavLink>
          <NavLink to="/auditor/employeefile">EMPLOYEE FILE</NavLink>
          <NavLink to="/auditor/forapproval">FOR APPROVAL</NavLink>
          <NavLink to="/auditor/reports">REPORTS</NavLink>
        </Sidebar>

        <MainRight>
          <Header headerName="payroll" />

          <WrapperRight>
            <Route path="/auditor/attendance" component={Attendance} />
            <Route path="/auditor/employeefile" component={EmploFile} />
            <Route path="/auditor/forapproval" component={ForApproval} />
            <Route path="/auditor/reports" component={Reports} />
          </WrapperRight>
        </MainRight>
      </MainCan>
    </>
  );
};

export default AuditorPage;

// import {Link} from "react-router-dom"
// to="/"
