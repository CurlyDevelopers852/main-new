import NavBar from '@components/navbar';
import { Container } from '@mui/material';
import BackGroundBlob from '../components/background/blobs';

const MainLayout = ({ children, errorPage = false }) => {
  return (
    <Container maxWidth={false} className="main-layout" disableGutters>
      <BackGroundBlob />
      {!errorPage && <NavBar />}
      <Container className="inner-container" maxWidth={false} disableGutters>
        {children}
      </Container>
    </Container>
  );
};

export default MainLayout;
