import Loadable from 'components/core/Loadable';
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import RoleRoute from './RoleRoute';

// Configurations
const Roles = Loadable(lazy(() => import('pages/General/RoleManagement/Roles')));
const Permissions = Loadable(
  lazy(() => import('pages/General/RoleManagement/Permissions'))
);


const RoleManagement: RouteObject = {
  path: 'rolemnagements',
  element: (
    <RoleRoute show="roles-ermissions">
      <Outlet />
    </RoleRoute>
  ),
  children: [
    {
      path: '/rolemnagements/roles',
      element: <Roles />,
    },
    {
      path: '/rolemnagements/permissions',
      element: <Permissions />,
    },
  ],
};

export default RoleManagement;
