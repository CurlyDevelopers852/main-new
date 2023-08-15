import { Box, styled } from '@mui/system';

const OuterBox = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  width: '100%',
  minWidth: '100%',
  display: 'block',
  position: 'relative',
  height: 'fit-content',
  background: 'none',
  padding: '12px 32px',
  paddingTop: '90px',
  top: 0,
  left: 0,
  boxSizing: 'border-box',
  maxWidth: '100vw',
  overflowX: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: '5px 16px',
    minWidth: 'calc(100% - 10px)',
    width: 'calc(100% - 10px)',
  },
}));

export { OuterBox };
