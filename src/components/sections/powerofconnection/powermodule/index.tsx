import { Grid, Typography, styled } from "@mui/material";

const HeadingTxt = styled(Typography)({
    fontFamily: 'Avenir',
    fontSize: '40px',
    fontWeight: 800,
    lineHeight: '55px',
    letterSpacing: '0.05em',
    textAlign: 'center',    
    textTransform: 'uppercase',
    color: 'white',
    zIndex: 2,
});


const DescTxt = styled(Typography)({
    fontFamily: 'Avenir',
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '33px',
    letterSpacing: '0.05em',
    textAlign: 'center',
    width: '354px',
    margin: '0 auto',
    marginTop: '12px',
    color: 'white',
    zIndex: 2,
});


const PowerModule = ({title, desc}) => {
    return (
        <Grid id={title} item xs={6}>
            <HeadingTxt>{title}</HeadingTxt>
            <DescTxt>
                {desc}
            </DescTxt>
        </Grid>
    )
};

export default PowerModule;