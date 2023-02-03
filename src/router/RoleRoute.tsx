import { Fragment, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { RoleContext } from 'contexts/RoleProvider';
// import isEmpty from 'lodash.isempty';

type RoleRouteType = {
  children: JSX.Element;
  show: string | string[];
};

const RoleRoute = ({ children, show }: RoleRouteType) => {
  const { roleData } = useContext(RoleContext);
  if (roleData.length > 0) {
    if (typeof show === 'string' && roleData.indexOf(show) === -1) {
      return <Navigate to="/unpermission" replace />;
    }
    if (typeof show !== 'string') {
      let validPermission = false;
      show.forEach((fc) => {
        if (roleData.indexOf(fc) !== -1) {
          validPermission = true;
        }
      });
      if (!validPermission) {
        return <Navigate to="/unpermission" replace />;
      }
    }
  } else {
    return <Navigate to="/unpermission" replace />;
  }
  return <Fragment>{children}</Fragment>;
};

export default RoleRoute;
