import GetStarted from '@/components/sections/getstarted';
import AboutSection from '@/components/sections/powerofconnection';
import ContactSection from '@/components/sections/contact';
import ServicesSection from '@/components/sections/services';
import TheTeam from '@/components/sections/team';
import MainLayout from '@/layouts/mainLayout';
import { FunctionComponent } from 'react';

const MainPage: FunctionComponent = () => {
  return (
    <MainLayout>
      <GetStarted />
      <AboutSection />
      <ServicesSection />
      <TheTeam />
      <ContactSection />
    </MainLayout>
  );
};

export default MainPage;
