import { FC } from 'react';
import HeroSection from '../../components/sections/HeroSection';
import FeaturedProducts from '../../components/sections/FeaturedProducts';
import Services from '../../components/sections/Services';
import Testimonials from '../../components/sections/Testimonials';
import Contact from '../../components/sections/Contact';

const HomePage: FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage; 
 