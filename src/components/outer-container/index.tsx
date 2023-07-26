import { Box, styled } from "@mui/material";

const OuterBox = styled(Box)({
  overflow: 'hidden',
  width: '100%',
  minWidth: '100%',
  display: 'block',
  position: 'relative',
  minHeight: '100vh',
  height: 'fit-content',
  background: 'none',
  padding: '12px 32px',
  paddingTop: '120px',
  top: 0,
  left: 0,
  boxSizing: 'border-box',
});

export { OuterBox };