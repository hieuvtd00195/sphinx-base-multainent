import TuneIcon from '@mui/icons-material/Tune';
import { useMemo } from 'react';
import type { MenuSection } from '..';

const useConfigurations = () => {
  const configurations: MenuSection = useMemo(() => {
    return {
      title: 'Configurations',
      items: [
        {
          title: 'Configurations',
          path: '/configurations',
          icon: <TuneIcon />,
          keyPermission: 'configurations',
          children: [
            {
              title: 'Organisation',
              path: '/configurations/organisation',
              keyPermission: 'organisation',
              children: [
                {
                  title: 'Employees',
                  path: '/configurations/organisation/employees',
                  keyPermission: 'employees',
                },
                {
                  title: 'Company',
                  path: '/configurations/organisation/company',
                  keyPermission: 'company',
                },
              ],
            },
            {
              title: 'Security',
              path: '/configurations/security',
              keyPermission: 'security',
              children: [
                {
                  title: 'Roles & Permissions',
                  path: '/configurations/security/roles-ermissions',
                  keyPermission: 'roles-ermissions',
                },
                {
                  title: 'Authentication',
                  path: '/configurations/security/authentication',
                  keyPermission: 'authentication',
                },
                {
                  title: 'Logs',
                  path: '/configurations/security/logs',
                  keyPermission: 'logs',
                },
              ],
            },
            {
              title: 'Notifications',
              path: '/configurations/notifications',
              keyPermission: 'notifications',
            },
          ],
        },
      ],
    };
  }, []);

  return { configurations };
};

export default useConfigurations;
