import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { ButtonWrapper, LinksWrapper, MainCan, MainRight, WrapperRight } from './styles';
import Link from 'components/Link';
import { useLocation, useHistory } from 'react-router';
import Button from 'components/Button';
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg';

import { useDispatch } from 'react-redux';
import { logout } from 'features/auth/authSlice';

const MainWrapper = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const routesMap = new Map();
  routesMap.set('/', 'PAYROLL');
  routesMap.set('/attendance', 'ATTENDANCE');
  routesMap.set('/employee-file', 'EMPLOYEE FILE');
  routesMap.set('/for-approval', 'FOR APPROVAL');
  routesMap.set('/reports', 'REPORTS');

  const headerName = routesMap.get(location.pathname);

  const handleLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <>
      <MainCan>
        <Sidebar>
          <LinksWrapper>
            <Link to={`/`}>PAYROLL</Link>
            <Link to={`/attendance`}>ATTENDANCE</Link>
            <Link to={`/employee-file`}>EMPLOYEE FILE</Link>
            <Link to={`/for-approval`}>FOR APPROVAL</Link>
            <Link to={`/reports`}>REPORTS</Link>
          </LinksWrapper>
          <ButtonWrapper>
            <Button type="submit" onClick={handleLogout} outline>
              <LogoutIcon /> Logout
            </Button>
          </ButtonWrapper>
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
