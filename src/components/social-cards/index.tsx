import React from "react";
import { Card, CardActionArea, CardActions, Typography, CardContent, styled, Link, IconButton, Avatar } from "@mui/material";

import { SxProps } from '@mui/system';

import { Platform, SocialIconMap, SocialCardProps } from '@/types/users/userprops';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import EmailIcon from '@mui/icons-material/Email';
import CardBg from "../background/color";


type SocialIconButtonsProps = {
    fillcolor: string;
} & SxProps;


const socialIconMap: SocialIconMap = {
    [Platform.facebook]: {
        icon: <FacebookIcon />,
        baseurl: '',
        colorCode: '#3b5998',
    },
    [Platform.twitter]: {
        icon: <TwitterIcon />,
        baseurl: 'https://twitter.com/',
        colorCode: '#00acee',
    },
    [Platform.instagram]: {
        icon: <InstagramIcon />,
        baseurl: '',
        colorCode: 'linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7)',
    },
    [Platform.linkedin]: {
        icon: <LinkedInIcon />,
        baseurl: 'https://www.linkedin.com/in/',
        colorCode: '#0072b1',
    },
    [Platform.website]: {
        icon: <PublicIcon />,
        baseurl: '',
        colorCode: '#6E0089',
    },
    [Platform.email]: {
        icon: <EmailIcon />,
        baseurl: 'mailto:',
        colorCode: '#D69200',
    },
};

const MainCard = styled(Card)(({ theme }) => ({
    width: '100%',
    height: '100%',
    padding: 0,  
    position: 'relative',
    display: 'block',
    boxSizing: 'border-box',
    background: 'rgba(0,0,0,0)',
    borderRadius: '0',
    [theme.breakpoints.down('md')]: {
        padding: '0 32px',
    },
}));

const MainActionArea = styled(CardActionArea)({
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px',
});


const MainAvatar = styled(Avatar)(({ theme }) => ({
    margin: '220px auto 0 auto',
    width: 250, 
    height: 250,
    aspectRatio: '1 / 1',
    [theme.breakpoints.down('md')]: {
        margin: '20px auto 20px auto',
        display: 'inline-block',
        position: 'relative',
        width: '20%',
    },
}));

const CustomCardContent = styled(CardContent)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        padding: '16px',
        display: 'inline-block',
        position: 'relative',
        width: '70%',
    },
}));

const UserNameTxt = styled(Typography)({
    fontFamily: 'Avenir',
    fontSize: '48px',
    fontWeight: 800,
    lineHeight: '66px',
    letterSpacing: '0.05em',
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
});

const UserPositonTxt = styled(Typography)({
    fontFamily: 'Avenir',
    fontSize: '45px',
    fontWeight: 700,
    lineHeight: '66px',
    letterSpacing: '0.05em',
    textAlign: 'center',
    color: 'white',
});

const UserDescTxt = styled(Typography)({
    fontFamily: 'Avenir',
    fontSize: '44px',
    fontWeight: 500,
    lineHeight: '66px',
    letterSpacing: '0.05em',
    textAlign: 'center',
    color: '#ccc',
});

const SocialCardActions = styled(CardActions)({
    width: '100%',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '12px',
    left: '0',
    right: '0',
});

const SocialLinks = styled(Link)({
    width: '72px',
    height: '72px',
    margin: '32px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: '#ccc',
    '&:hover': {
        color: '#000',
    },
    transition: 'all 0.5s ease',
});

const SocialIconButtons = styled(IconButton)<SocialIconButtonsProps>(({ fillcolor }) => ({
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    '&:hover': {
        top: '3px',
        left: '-3px',
        '& svg': {
            transform: 'scale(1.2) translate(3px, -2px)',
            fill: fillcolor,
        }
    },
    transition: 'all 0.5s ease',
    '& svg': {
        transition: 'all 0.5s ease',
    }
}));  

const SocialCard: React.FC<SocialCardProps> = ({ user }) => {
  return (
        <MainCard id={user.name} key={user.name}>
            <CardBg bgcolor={user.bgcolor}/>
            <MainActionArea>
               {user.img ?  <MainAvatar
                    alt={user.name}
                    src={user.img}
                    />
                    : null}
                <CustomCardContent>
                    <UserNameTxt gutterBottom variant="h5">
                        {user.name}
                    </UserNameTxt>
                    <UserPositonTxt variant="subtitle1" color="text.secondary">
                        {user.position}
                    </UserPositonTxt>
                    <UserDescTxt variant="body2" color="text.secondary">
                        {user.desc}
                    </UserDescTxt>
                </CustomCardContent>
            </MainActionArea>
            <SocialCardActions>
                {user.social.map((elem: { platform: Platform; link: string }, idx: React.Key | null | undefined) => (
                    <SocialLinks href={`${socialIconMap[elem.platform].baseurl}${elem.link}`} target="_blank" rel="noreferrer noopener" key={idx}>
                        <SocialIconButtons aria-label={elem.platform} key={idx} fillcolor={socialIconMap[elem.platform].colorCode}>
                            {socialIconMap[elem.platform].icon}
                        </SocialIconButtons>
                    </SocialLinks>
                ))}
            </SocialCardActions>
        </MainCard>
  );
};

export default SocialCard;