import Loadable from 'components/core/Loadable';
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import RoleRoute from './RoleRoute';

// Configurations
const Account = Loadable(lazy(() => import('pages/General/Account')));
const ChangePassword = Loadable(
  lazy(() => import('pages/General/Account/ChangePassword'))
);
const Notifications = Loadable(
  lazy(() => import('pages/Configurations/Notifications'))
);

const AccountTenant: RouteObject = {
  path: 'account',
  element: (
    <RoleRoute show="account-tenant1">
      <Outlet />
    </RoleRoute>
  ),
  children: [
    {
      path: '/account',
      element: <Account />,
    },
    {
      path: '/account/changepassword',
      element: <ChangePassword />,
    },
    // {
    // 	path: '/account/resetpassword',
    // 	element: <Notifications />,
    //   },
  ],
};

export default AccountTenant;
