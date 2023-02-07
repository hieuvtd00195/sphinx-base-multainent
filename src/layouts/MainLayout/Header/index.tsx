import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  Avatar,
  Button,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { toggleMobileOpen, toggleSidebarOpen } from 'slices/menu';
import { useTypedDispatch, useTypedSelector } from 'store';
import LocalStorage from 'utils/LocalStorage';
import LogoutIcon from '@mui/icons-material/Logout';
import PropPopupDialog from 'components/PropPopupDialog';
import useMounted from 'hooks/useMounted';
import { signOut } from 'services/auth';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { red } from '@mui/material/colors';
import useAuthState from 'hooks/useAuthState';
import sleep from 'utils/sleep';
interface IDecode {
  client_id: string;
  email: string;
  email_verified: string;
  exp: number;
  given_name: string;
  iat: number;
  iss: string;
  oi_prst: string;
  oi_tkn_id: string;
  phone_number_verified: string;
  preferred_username: string;
  role: string;
  sub: string;
  unique_name: string;
  name: string;
}

const Header = () => {
  const theme = useTheme();
  const dispatch = useTypedDispatch();
  const { logout } = useAuthState();
  const mounted = useMounted();
  const navigate = useNavigate();
  const sidebarOpen = useTypedSelector((state) => state.menu.sidebarOpen);
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const [openLogoutDialog, setOpenLogoutDialog] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenLogoutDialog = () => {
    setOpenLogoutDialog(true);
  };

  const handleCloseLogoutDialog = () => {
    if (mounted.current) {
      setOpenLogoutDialog(false);
    }
  };
  const handleToggleSidebar = () => {
    dispatch(toggleSidebarOpen());
  };

  const handleLogout = async () => {
    await sleep(350);
    logout();
  };

  const handleToggleMobileOpen = () => {
    dispatch(toggleMobileOpen());
  };

  var token = LocalStorage.get('accessToken');
  var decoded: IDecode = jwt_decode(token);

  const content = (
    <Toolbar>
      <IconButton
        size="medium"
        edge="start"
        onClick={lgUp ? handleToggleSidebar : handleToggleMobileOpen}
      >
        <MenuIcon />
      </IconButton>
      <Box sx={{ flexGrow: 1 }} />
      <IconButton>
        <Badge badgeContent={4}>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Stack direction="row" spacing={1.5}>
        <StyleButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <Box
              sx={{
                p: '0 20px',
                borderLeft: '1px solid black',
              }}
            >
              <Avatar
                sx={{
                  bgcolor: red[400],
                  width: 30,
                  height: 30,
                }}
                src=""
              />
            </Box>
            <Typography color="black" fontSize="14px" fontWeight={500}>
              {decoded.name ?? 'UserName'}
            </Typography>
          </Box>
        </StyleButton>
      </Stack>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ mt: 2 }}
      >
        <MenuItem onClick={() => navigate('/account')}>Thông tin cá nhân</MenuItem>
        <MenuItem onClick={handleOpenLogoutDialog}>Đăng xuất</MenuItem>
      </Menu>

      <PropPopupDialog
        open={openLogoutDialog}
        onClose={handleCloseLogoutDialog}
        onSubmit={handleLogout}
        content={{
          label: 'Đăng xuất',
          description: 'Bạn có chắc chắn muốn đăng xuất không',
          icon: LogoutIcon,
        }}
      />
    </Toolbar>
  );

  if (lgUp) {
    return (
      <CollapsibleAppBar position="fixed" open={sidebarOpen} enableColorOnDark>
        {content}
      </CollapsibleAppBar>
    );
  }

  return (
    <NormalAppBar position="fixed" enableColorOnDark>
      {content}
    </NormalAppBar>
  );
};

const NormalAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const StyleButton = styled(Button)`
  background-color: #fff;

  &:hover {
    background-color: #fff;
  }
`;

const CollapsibleAppBar = styled(AppBar, {
  shouldForwardProp: (prop: string) => !['open'].includes(prop),
})<{ open: boolean }>(({ theme, open }) => ({
  backgroundColor: theme.palette.background.paper,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(!open && {
    width: `calc(100% - ${theme.spacing(7.5)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${theme.spacing(8.5)} + 1px)`,
    },
  }),
  ...(open && {
    marginLeft: theme.config.sidebarWidth,
    width: `calc(100% - ${theme.config.sidebarWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default Header;
