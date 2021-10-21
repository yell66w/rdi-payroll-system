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

const MainWrapper = () => {
  return (
    <>
      <MainCan>
        <Sidebar>
          <Link to={`/`}>PAYROLL</Link>
          <Link to={`/attendance`}>ATTENDANCE</Link>
          <Link to={`/employee-file`}>EMPLOYEE FILE</Link>
          <Link to={`/for-approval`}>FOR APPROVAL</Link>
          <Link to={`/reports`}>REPORTS</Link>
        </Sidebar>

        <MainRight>
          <Header headerName={`payroll`} />
          <WrapperRight>
            <Route path={`/attendance`} component={Attendance} />
            <Route path={`/employee-file`} component={EmploFile} />
            <Route path={`/for-approval`} component={ForApproval} />
            <Route path={`/reports`} component={Reports} />
          </WrapperRight>
        </MainRight>
      </MainCan>
    </>
  );
};

export default MainWrapper;
