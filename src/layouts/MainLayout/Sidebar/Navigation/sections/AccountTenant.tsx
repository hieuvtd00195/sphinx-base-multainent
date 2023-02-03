import TuneIcon from '@mui/icons-material/Tune';
import { useMemo } from 'react';
import type { MenuSection } from '..';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useAccountTenant = () => {
  const accountTenant: MenuSection = useMemo(() => {
    return {
      title: 'AccountTenant',
      items: [
        {
          title: 'AccountTenant',
          path: '/account',
          icon: <AccountCircleIcon />,
          children: [
            {
              title: 'Information',
              path: '/account',
            },
            {
              title: 'Change Password',
              path: '/account/changepassword',
            },
			// {
			// 	title: 'Reset Password',
			// 	path: '/account/resetpassword',
			//   },
          ],
        },
      ],
    };
  }, []);

  return { accountTenant };
};

export default useAccountTenant;
