import { useDispatch } from 'react-redux';
import { logout } from 'features/auth/authSlice';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { MainCan, MainRight, WrapperRight } from './styles';
import Link from 'components/Link';
import { useLocation, useHistory } from 'react-router-dom';
import Button from 'components/Button';

const MainWrapper = ({ children }) => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  // encoder based sidebar
  const routesMap = new Map();
  routesMap.set('/', 'HUMAN RESOURCES');
  routesMap.set('/payroll', 'PAYROLL');
  routesMap.set('/attendance', 'ATTENDANCE');
  routesMap.set('/employee-file', 'EMPLOYEE FILE');
  routesMap.set('/memo', 'MEMO');
  routesMap.set('/cash-advance', 'CASH ADVANCE');
  routesMap.set('/request', 'REQUESTS');

  const headerName = routesMap.get(location.pathname);

  const handleLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
    history.replace('/login');
  };

  return (
    <>
      <MainCan>
        <Sidebar>
          <div>
            <Link to={`/`}>HUMAN RESOURCES</Link>
            <Link to={`/payroll`}>PAYROLL</Link>
            <Link to={`/attendance`}>ATTENDANCE</Link>
            <Link to={`/employee-file`}>EMPLOYEE FILE</Link>
            <Link to={`/memo`}>MEMO</Link>
            <Link to={`/cash-advance`}>CASH ADVANCE</Link>
            <Link to={`/request`}>REQUEST</Link>
          </div>
          <span>
            <Button border="1px" borderColor="gray" w="50%" onClick={handleLogout}>
              Logout
            </Button>
          </span>
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
