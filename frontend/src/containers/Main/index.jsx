import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Attendance from "containers/Attendance";
import EmploFile from "containers/EmployeeFile";
import ForApproval from "containers/ForApproval";
import Reports from "containers/Reports";
import { MainCan, MainRight, WrapperRight } from "./styles";
import React from "react";
import { Route } from "react-router-dom";
import Link from "components/Link";

const MainWrapper = ({ children, role = "ENCODER" }) => {
  return (
    <>
      <MainCan>
        <Sidebar>
          <Link to="/auditor">PAYROLL</Link>
          <Link to="/auditor/attendance">ATTENDANCE</Link>
          <Link to="/auditor/employeefile">EMPLOYEE FILE</Link>
          <Link to="/auditor/forapproval">FOR APPROVAL</Link>
          <Link to="/auditor/reports">REPORTS</Link>
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

export default MainWrapper;
