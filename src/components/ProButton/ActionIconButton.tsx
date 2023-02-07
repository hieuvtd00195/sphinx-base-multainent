import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import SaveIcon from '@mui/icons-material/Save';
import VisibilityIcon from '@mui/icons-material/Visibility';
import type { IconButtonProps } from '@mui/material/IconButton';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Fragment } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ActionIcon = () => {
	return (
	  <Fragment>
		<MenuIcon />
		<ExpandMoreIcon />
	  </Fragment>
	);
  };

const icons = {
  delete: DeleteIcon,
  edit: EditIcon,
  save: SaveIcon,
  cancel: CloseIcon,
  sub: IndeterminateCheckBoxOutlinedIcon,
  view: VisibilityIcon,
  more: MoreHorizIcon,
  action: ActionIcon,
} as const;

interface Props extends IconButtonProps {
  actionType?: keyof typeof icons;
}

const ActionIconButton = (props: Props) => {
  const { actionType, children, ...rest } = props;

  const Icon = actionType && icons[actionType];

  return <IconButton {...rest}>{Icon ? <Icon /> : children}</IconButton>;
};

export default ActionIconButton;
