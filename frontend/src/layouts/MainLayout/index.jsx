import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { MainCan, MainRight, WrapperRight } from './styles';
import Link from 'components/Link';
import { useLocation } from 'react-router';

const MainLayout = ({ children }) => {
  const location = useLocation();
  // encoder based sidebar
  const routesMap = new Map();
  routesMap.set('/', 'HUMAN RESOURCES');
  routesMap.set('/payroll', 'PAYROLL');
  routesMap.set('/attendance', 'ATTENDANCE');
  routesMap.set('/employee-file', 'EMPLOYEE FILE');
  routesMap.set('/memo', 'MEMO');
  routesMap.set('/cash-advance', 'CASH ADVANCE');
  routesMap.set('/cash-advance/processed', 'CASH PROCESSED');
  routesMap.set('/request', 'REQUESTS');

  const headerName = routesMap.get(location.pathname);

  return (
    <>
      <MainCan>
        <Sidebar>
          <Link to={`/`}>HUMAN RESOURCES</Link>
          <Link to={`/payroll`}>PAYROLL</Link>
          <Link to={`/attendance`}>ATTENDANCE</Link>
          <Link to={`/employee-file`}>EMPLOYEE FILE</Link>
          <Link to={`/memo`}>MEMO</Link>
          <Link to={`/cash-advance`}>CASH ADVANCE</Link>
          <Link to={`/request`}>REQUEST</Link>
        </Sidebar>
        <MainRight>
          <Header headerName={headerName} />
          <WrapperRight>{children}</WrapperRight>
        </MainRight>
      </MainCan>
    </>
  );
};

export default MainLayout;
