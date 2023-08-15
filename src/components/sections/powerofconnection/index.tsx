import React, { FunctionComponent } from 'react';
import { OuterBox } from '@/components/outer-container';
import { HeadingTxt } from '@/components/title-txt';
import CardBg from '@/components/background/color';
import { Grid, styled } from '@mui/material';

import PowerModule from './powermodule';

const MainGrid = styled(Grid)(({ theme }) => ({
  display: 'inline-flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '600px',
  zIndex: 2,
  marginTop: 0,
  maxWidth: '760px',
  margin: '0 auto',

  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    // justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 'auto', // Changed to 'auto' to accommodate content height
    zIndex: 2,
    margin: '0 auto',
    paddingLeft: '32px',
  },
}));

// Create other sections in a similar manner
const PowerOfConnectionSection: FunctionComponent = () => {
  return (
    <OuterBox
      id="about"
      className="section-2"
      sx={{
        textAlign: 'center',
      }}
    >
      <CardBg bgcolor={'#8C2121'} />

      <HeadingTxt>THE POWER OF CONNECTION</HeadingTxt>

      <MainGrid container rowSpacing={1} columnSpacing={{ xs: 1, md: 2 }}>
        <PowerModule
          title={'design'}
          desc={
            'Tailor made attractive designs for all types of businesses, with full flow CMS controls options for customers.'
          }
        />
        <PowerModule
          title={'development'}
          desc={
            'Innovative and fast development tools and codes that run website faster than ever with security unlike anything else.'
          }
        />

        <PowerModule
          title={'strategy'}
          desc={
            'Tailor made attractive designs for all types of businesses, with full flow CMS controls options for customers.'
          }
        />

        <PowerModule
          title={'technology'}
          desc={'Built on Ethereum Network that transmits and loads data faster than ever.'}
        />
      </MainGrid>
    </OuterBox>
  );
};

export default PowerOfConnectionSection;
