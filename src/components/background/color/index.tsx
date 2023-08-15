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
  minHeight: '100vh',
  height: '100%',
  paddingTop: '20px',
  paddingBottom: '20px',
  pointerEvents: 'none',
  backgroundColor: bgcolor,
  opacity: 0.6,
}));

export default CardBg;
