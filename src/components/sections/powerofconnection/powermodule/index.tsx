import { Grid, Typography, styled } from "@mui/material";

const ContainerGrid = styled(Grid)(({ theme }) => ({

    [theme.breakpoints.down('sm')]: {
        marginBottom: '42px',
        display: 'inline-grid',
    },
}));

const HeadingTxt = styled(Typography)(({ theme }) => ({
    fontFamily: 'Avenir',
    fontSize: '40px',
    fontWeight: 800,
    lineHeight: '55px',
    letterSpacing: '0.05em',
    textAlign: 'center',    
    textTransform: 'uppercase',
    color: 'white',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
        textAlign: 'left',
        fontSize: '32px',
    },
}));


const DescTxt = styled(Typography)(({ theme }) => ({
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
    [theme.breakpoints.down('sm')]: {
        textAlign: 'left',
        fontSize: '20px',
    },
}));


const PowerModule = ({title, desc}) => {
    return (
        <ContainerGrid id={title} item xs={6}>
            <HeadingTxt>{title}</HeadingTxt>
            <DescTxt>
                {desc}
            </DescTxt>
        </ContainerGrid>
    )
};

export default PowerModule;