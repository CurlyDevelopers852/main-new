import { FunctionComponent } from "react";
import { Grid, Typography, styled } from "@mui/material";
import { OuterBox } from "@/components/outer-container";
import { HeadingTxt } from "@/components/title-txt";
import CardBg from "@/components/background/color";

const ItemGrid = styled(Grid)({
  width: '502px',
  // height: '140px',
  borderRadius: '154px',
  opacity: 0.5,
  verticalAlign: 'middle',
  // lineHeight: '140px',
  userSelect: 'none',
  position: 'relative',
  textAlign: 'center',
  margin:'-10px 0',
  zIndex: 2,
});

const ItemTxt = styled(Typography)({
  position: 'relative',
  display: 'inline-block',
  fontFamily: 'Avenir',
  fontSize: '40px',
  fontWeight: 800,
  lineHeight: '55px',
  letterSpacing: '0.05em',
  textAlign: 'center',
  backgroundColor: 'rgba(255,255,255,0.4)',
  color: '#fff',
  borderRadius: '50px',
  padding:'24px 32px',
  margin: 'auto',
  zIndex: 2,
});

const ServicesSection: FunctionComponent = () => {

  const itemList = [
    'Web Development',
    'Web Designing',
    'Hosting Services',
    'Content Production',
    'Consultations',
    'Marketing Strategies',
    'CMS',
    'Blockchain Integration',
    'Request something more?',
  ];

  return (
    <OuterBox id="services" className="section-3">
      <CardBg bgcolor={'#00AB6B'} />
        <HeadingTxt className="our-services">OUR SERVICES</HeadingTxt>

        <Grid container sx={{
          textAlign: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}>

          {itemList.map((elem, idx) => (
            <div key={idx}>
              {idx%2 === 0 ? (
                <>
                  <ItemGrid item xs={6} md={8}>
                    <ItemTxt>
                      {elem}
                    </ItemTxt>
                  </ItemGrid>
                  <ItemGrid item xs={6} md={4}>
                    {' '}
                  </ItemGrid>
                </>
              ) : (
               <>
                <ItemGrid item xs={6} md={4}>
                    {' '}
                  </ItemGrid>
                  <ItemGrid item xs={6} md={8}>
                    <ItemTxt>
                      {elem}
                    </ItemTxt>
                  </ItemGrid>
                </>
              )}
            </div>
            
          ))}

        </Grid>
      </OuterBox>
  );
};

export default ServicesSection;