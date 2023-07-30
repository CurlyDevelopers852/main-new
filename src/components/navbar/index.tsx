
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  styled,
  Typography, Grid,
  Link,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { SxProps } from '@mui/system';

const baseUrl = import.meta.env.VITE_BASE_URL ?? '/main-new';

type StyledAppBarProps = {
  scrollopacity: number;
} & SxProps;

const StyledAppBar = styled(AppBar)<StyledAppBarProps>(({ theme, scrollopacity }) => ({
  fontFamily: 'Avenir',
  background: `rgba(0, 0, 0, ${scrollopacity})`,
  boxShadow: 'none',
  overflow: 'hidden',
  boxSizing: 'border-box',
  transition: theme.transitions.create("background", {
    duration: theme.transitions.duration.standard,
  }),
  [theme.breakpoints.down('sm')]: {
    height: '50px', 
  },
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    minHeight: '50px',
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: '220px',
  height: '110px',
  padding: '12px 0',
  [theme.breakpoints.down('sm')]: {
    width: '150px',
    height: '75px',
  },
}));

const GetStartedBtn = styled(Button)(({ theme }) => ({
  boxSizing: 'border-box',
  position: 'absolute',
  width: '240px',
  height: '60px',
  background: 'rgba(255, 255, 255, 0.12)',
  border: '2px solid #E9E9E9',
  borderRadius: '41px',
  margin: 'auto 0',
  marginLeft: 2,
  alignSelf: "flex-start",
  fontWeight: 500,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const NavBar: FunctionComponent = () => {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(
    null
  );
  const [scrollOpacityVal, setScrollOpacityVal] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 0) {
      setScrollOpacityVal(0.4);
    } else {
      setScrollOpacityVal(0);
    }
  };

  const scrollTo = (href: string) => {
    if (typeof window !== "undefined") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const closeMobileMenu = () => {
    setMobileMenuAnchor(null);
  };

  const menuItems = [
    { label: "Home", href: "#get-started" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <StyledAppBar position="fixed" scrollopacity={scrollOpacityVal} >
      <CustomToolbar>
        <LogoImage 
          className="curly-developers-logo"
          alt=""
          src={`${baseUrl}/assets/img/logo_dark_bg.png`}
        />
        <Grid item style={{ display: "flex", alignItems: "center" }}>
          <Box id="desktop-menu-items" sx={{ display: { xs: 'none',  sm: 'none', md: 'block' } }}>
            {menuItems.map((item, idx) => (
          
                <Button color="inherit" onClick={() => scrollTo(item.href)}
            key={item.label} 
            sx={{
              marginLeft: idx !== 0 ? '12px' : '0',
            }}
            >
                  <Typography sx={{
                    fontFamily: 'Avenir',
                    fontSize: '22px',
                    fontWeight: 800,
                    lineHeight: '30px',
                    letterSpacing: '0.05em',
                    textAlign: 'center',
                  }}>
                    {item.label}
                  </Typography>
                </Button>
            ))}
            </Box>
        </Grid>

        <GetStartedBtn id="desktop-getstarted-btn" sx={{
              position: 'relative',
              
            }}
            onClick={() => scrollTo("#get-started")}
            >
              <Typography
              sx={{
                fontFamily: 'Avenir',
                  fontSize: '22px',
                  fontWeight: 800,
                  lineHeight: '30px',
                  letterSpacing: '0.05em',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'white',
              }}>
                Get Started
              </Typography>
            </GetStartedBtn>
            
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={openMobileMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={mobileMenuAnchor}
            open={Boolean(mobileMenuAnchor)}
            onClose={closeMobileMenu}
          >
            {menuItems.map((item) => (
              <Link href={item.href} key={item.label}>
                <MenuItem onClick={closeMobileMenu}>
                  <ListItemText>
                  {item.label}
                  </ListItemText>
                </MenuItem>
              </Link>
            ))}
            <Link href="#get-started">
            <GetStartedBtn  id="mobile-getstarted-btn">
              <Typography
                sx={{
                  fontFamily: 'Avenir',
                    fontSize: '22px',
                    fontWeight: 800,
                    lineHeight: '30px',
                    letterSpacing: '0.05em',
                    textAlign: 'center',
                }}>
                 Get Started
              </Typography>
            </GetStartedBtn>
          </Link>
          </Menu>
        </Box>
      </CustomToolbar>
    </StyledAppBar>
  );
};

export default NavBar;