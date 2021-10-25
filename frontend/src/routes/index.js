import { lazy } from 'react';

const routes = [
  {
    path: '',
    component: lazy(() => import('containers/Payroll')),
    exact: true,
  },
  {
    path: 'attendance',
    component: lazy(() => import('containers/Attendance')),
  },
  {
    path: 'employee-file',
    component: lazy(() => import('containers/EmployeeFile')),
  },
  {
    path: 'for-approval',
    component: lazy(() => import('containers/ForApproval')),
  },
  {
    path: 'reports',
    component: lazy(() => import('containers/Reports')),
  },
];

export default routes;
