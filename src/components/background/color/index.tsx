import { Box, styled } from '@mui/material';
import { SxProps } from '@mui/system';

type CardBgProps = {
  bgcolor: string;
} & SxProps;

const CardBg = styled(Box)<CardBgProps>(({ bgcolor }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  pointerEvents: 'none',
  backgroundColor: bgcolor,
  opacity: 0.6,
}));

export default CardBg;