import { useEffect } from 'react';
import {
  About,
  Blog,
  Carousel,
  Connect,
  Header,
  Projects,
  Services,
  Skills,
  Testimonies,
  Timeline,
} from '../components';

const Landing = () => {
  document.title = `Liberty Credit Union`;

  return (
    <>
      <Carousel />
      <About />
      <Services />
      {/* <Projects /> */}
      <Connect />
      <Testimonies />
      <Skills />
      <Timeline />
      <Blog />
    </>
  );
};
export default Landing;
