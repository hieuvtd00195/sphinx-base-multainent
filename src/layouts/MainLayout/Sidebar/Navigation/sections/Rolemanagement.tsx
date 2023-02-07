import TuneIcon from '@mui/icons-material/Tune';
import { useMemo } from 'react';
import SecurityIcon from '@mui/icons-material/Security';
import type { MenuSection } from '..';

const useRoleManagement = () => {
  const roleManagements: MenuSection = useMemo(() => {
    return {
      title: 'roleManagements',
      items: [
        {
          title: 'Role Managements',
          path: '/rolemnagements',
          icon: <SecurityIcon />,
          keyPermission: 'configurations',
          children: [
            {
              title: 'Roles',
              path: '/rolemnagements/roles',
              keyPermission: 'roles-ermissions',
            },
            {
              title: 'Permissions',
              path: '/rolemnagements/permissions',
              keyPermission: 'roles-ermissions',
            },
          ],
        },
      ],
    };
  }, []);

  return { roleManagements };
};

export default useRoleManagement;
