import Avatar from '@mui/material/Avatar';
import ImageLogo from 'components/ProComponents/ImageLogo';

type Params = {
  width: any;
  height: any;
  lgUpCheck?: any;
};

const Logo = (params: Params) => {
  const { width, height ,lgUpCheck} = params;
  return (
    <Avatar
      sx={{ m: 1, bgcolor: 'transparent' }}
      style={{ width: lgUpCheck ? 75 : 30, height: 'auto' }}
    >
      <ImageLogo src={'/logo.png'} style={{ width: width, height: height }} />
    </Avatar>
  );
};

export default Logo;
