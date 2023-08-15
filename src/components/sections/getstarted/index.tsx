import React, { FunctionComponent } from 'react';
import { Typography, Button, Box, styled } from '@mui/material';
import { OuterBox } from '@/components/outer-container';
import CardBg from '@/components/background/color';

const CenteredBox = styled(Box)({
  justifyContent: 'center',
  textAlign: 'center',
  display: 'inline-block',
  verticalAlign: 'middle',
  lineHeight: 'normal',
});

const InnerContainer = styled(Box)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  zIndex: 2,
});

const MainHeader = styled(Typography)({
  fontFamily: 'Avenir',
  fontSize: '48px',
  fontWeight: 800,
  lineHeight: '66px',
  letterSpacing: '0.05em',
  textAlign: 'center',
  display: 'block',
  alignItems: 'center',
  textTransform: 'uppercase',
});

const SubHeader = styled(Typography)({
  fontFamily: 'Avenir',
  fontSize: '28px',
  fontWeight: 800,
  lineHeight: '38px',
  letterSpacing: '0.05em',
  textAlign: 'center',
  textTransform: 'uppercase',
});

const MainBtn = styled(Button)({
  boxSizing: 'border-box',
  width: '285px',
  height: '82px',
  background: 'rgba(255, 255, 255, 0.12)',
  border: '2px solid #E9E9E9',
  borderRadius: '41px',
});

const MainBtnTxt = styled(Typography)({
  textTransform: 'uppercase',
  fontSize: '28px',

  fontWeight: 600,
  letterSpacing: '1px',
});

const GetStarted: FunctionComponent = () => {
  return (
    <OuterBox
      id="get-started"
      className="section-1"
      sx={{
        height: '100vh',
      }}
    >
      <CardBg bgcolor="#341D69" />

      <InnerContainer>
        <CenteredBox>
          <MainHeader variant="h3" gutterBottom>
            Web Developers And Designers For Web3
          </MainHeader>
        </CenteredBox>

        <CenteredBox>
          <SubHeader variant="subtitle1">Built On Ethereum</SubHeader>
        </CenteredBox>

        <CenteredBox
          sx={{
            marginTop: '72px',
          }}
        >
          <MainBtn variant="contained">
            <MainBtnTxt>Get Started</MainBtnTxt>
          </MainBtn>
        </CenteredBox>
      </InnerContainer>
    </OuterBox>
  );
};

export default GetStarted;
