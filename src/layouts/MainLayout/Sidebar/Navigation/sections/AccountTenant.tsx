import TuneIcon from '@mui/icons-material/Tune';
import { useMemo } from 'react';
import type { MenuSection } from '..';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useAccountTenant = () => {
  const accountTenant: MenuSection = useMemo(() => {
    return {
      title: 'Account',
      items: [
        {
          title: 'Account',
          path: '/account',
          icon: <AccountCircleIcon />,
          keyPermission: "account-tenant",
          children: [
            {
              title: 'Information',
              path: '/account',
              keyPermission: "account",
            },
            {
              title: 'Change Password',
              path: '/account/changepassword',
              keyPermission: "change-password",
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
