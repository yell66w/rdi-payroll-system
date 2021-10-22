import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { MainCan, MainRight, WrapperRight } from "./styles";
import Link from "components/Link";
import { useLocation } from "react-router";

const MainWrapper = ({ children, props }) => {
  const location = useLocation();

  const routesMap = new Map();
  routesMap.set("/", "PAYROLL");
  routesMap.set("/attendance", "ATTENDANCE");
  routesMap.set("/employee-file", "EMPLOYEE FILE");
  routesMap.set("/for-approval", "FOR APPROVAL");
  routesMap.set("/reports", "REPORTS");

  const headerName = routesMap.get(location.pathname);

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
          <Header headerName={headerName} />
          <WrapperRight>{children}</WrapperRight>
        </MainRight>
      </MainCan>
    </>
  );
};

export default MainWrapper;
