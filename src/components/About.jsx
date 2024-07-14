import { Link } from 'react-router-dom';
import Wrapper from '../assets/AboutHome';
import aboutImg from '../assets/about-img.jpeg';

const About = () => {
  return (
    <Wrapper>
      <section className="section about">
        <div className="section-center about-center">
          {/* about img  */}
          <article className="about-img">
            <img src="/man.jpg" className="hero-photo" alt="about img" />
          </article>
          {/* about info  */}
          <article className="about-info">
            {/* section title  */}
            <div className="section-title about-title text-anim">
              <h2>about</h2>
              <div className="underline"></div>
            </div>
            {/* end of section title  */}
            <p>
              At Liberty Credit Union, we are committed to empowering our
              customers with innovative financial solutions tailored to their
              needs. We have built a legacy of trust and excellence, serving
              individuals, families, and businesses in our community and beyond.
            </p>
            <p>
              Our mission is to provide accessible, reliable, and personalized
              banking services that help our customers achieve their financial
              goals while fostering economic growth in the communities we serve.
            </p>
            <Link to="/about" className="btn">
              about us
            </Link>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};
export default About;
