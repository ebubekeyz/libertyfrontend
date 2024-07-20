import { useEffect } from 'react';
import Wrapper from '../assets/About';
import { Carousel, Founders, MenuTab, Tab, Testimonies } from '../components';
import Faqs from '../components/Faqs';

const About = () => {
  document.title = `Liberty Credit Union`;

  return (
    <Wrapper>
      <img
        src="/about.jpg"
        alt="blog"
        style={{ objectFit: 'cover', height: '40vh' }}
      />
      {/* <form action="http://www.google.com/translate">
        <input name="hl" value="en" type="hidden" />
        <input name="ie" value="UTF8" type="hidden" />
        <input name="langpair" value="" type="hidden" />
        <input
          name="langpair"
          value="en|fr"
          title="French"
          src="http://photos1.blogger.com/img/43/1633/320/13539949_e76af75976.jpg"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
        <input
          name="langpair"
          value="en|de"
          title="German"
          src="http://photos1.blogger.com/img/43/1633/320/13539933_041ca1eda2.jpg"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
        <input
          name="langpair"
          value="en|it"
          title="Italian"
          src="http://photos1.blogger.com/img/43/1633/320/13539953_0384ccecf9.jpg"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
        <input
          name="langpair"
          value="en|pt"
          title="Portuguese"
          src="http://photos1.blogger.com/img/43/1633/320/13539966_0d09b410b5.jpg"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
        <input
          name="langpair"
          value="en|es"
          title="Spanish"
          src="http://photos1.blogger.com/img/43/1633/320/13539946_2fabed0dbf.jpg"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
        <input
          name="langpair"
          value="en|ja"
          title="Japanese"
          src="http://photos1.blogger.com/img/43/1633/320/13539955_925e6683c8.jpg"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
        <input
          name="langpair"
          value="en|ko"
          title="Korean"
          src="http://photos1.blogger.com/img/43/1633/320/13539958_3c3b482c95.jpg"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
        <input
          name="langpair"
          value="en|zh-CN"
          title="Chinese Simplified"
          src="http://photos1.blogger.com/img/43/1633/320/14324441_5ca5ce3423.jpg"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
        <input
          name="langpair2"
          value="en|ar"
          title="Arabic"
          src="http://photos1.blogger.com/blogger/3709/485/1600/arabic-flag.gif"
          onclick="this.form.langpair.value=this.value"
          height="20"
          type="image"
          width="30"
        />
      </form> */}

      <main style={{ textAlign: 'justify' }}>
        <section className="section single-page">
          {/* section title  */}
          <div className="section-title">
            <h2>Who We Are</h2>
            <div className="underline"></div>
          </div>
          {/* end of section title  */}
          <div
            className="section-center page-info"
            style={{ textAlign: 'center' }}
          >
            {/* about page  */}
            <h3
              style={{ letterSpacing: '0rem', color: 'var(--clr-primary-6)' }}
            >
              Welcome to Liberty Credit Union , Your Financial Partner
            </h3>
            <p>
              At Liberty Credit Union, we are committed to empowering our
              customers with innovative financial solutions tailored to their
              needs. We have built a legacy of trust and excellence, serving
              individuals, families, and businesses in our community and beyond.
            </p>

            <h3
              style={{ letterSpacing: '0rem', color: 'var(--clr-primary-6)' }}
            >
              Our Mission
            </h3>
            <p>
              Our mission is to provide accessible, reliable, and personalized
              banking services that help our customers achieve their financial
              goals while fostering economic growth in the communities we serve.
            </p>
            <h3
              style={{ letterSpacing: '0rem', color: 'var(--clr-primary-6)' }}
            >
              Our Vision
            </h3>
            <p>
              To be a leading financial institution recognized for our
              customer-centric approach, innovative solutions, and unwavering
              integrity.
            </p>

            <h3
              style={{ letterSpacing: '0rem', color: 'var(--clr-primary-6)' }}
            >
              Core Values
            </h3>
            <ul
              style={{
                color: 'var(--clr-grey-5)',
                display: 'grid',
                gap: '1rem',
              }}
            >
              <li>
                <b>Integrity: </b>We conduct our business with honesty and
                transparency, building trust in every relationship.
              </li>
              <li>
                <b>Customer Focus:</b> We prioritize our customers’ needs and
                strive to exceed their expectations with every interaction.
              </li>
              <li>
                <b>Innovation:</b>We embrace technology and innovation to offer
                cutting-edge products and services that enhance our customers’
                banking experience.
              </li>
              <li>
                <b>Community Commitment:</b> We are dedicated to supporting
                local initiatives and fostering economic development in the
                communities we serve.
              </li>
            </ul>

            <h3
              style={{
                letterSpacing: '0rem',
                marginTop: '1.5rem',
                color: 'var(--clr-primary-6)',
              }}
            >
              Our Services
            </h3>
            <p>
              We offer a comprehensive range of financial products and services
              to cater to your every need:
            </p>
            <ul
              style={{
                color: 'var(--clr-grey-5)',
                display: 'grid',
                gap: '1rem',
              }}
            >
              <li>
                <b>Personal Banking: </b>From savings and checking accounts to
                personal loans and mortgages, we have the right solutions to
                help you manage your finances and achieve your dreams.
              </li>
              <li>
                <b>Business Banking:</b> Our business banking services include
                checking accounts, loans, lines of credit, and cash management
                solutions designed to support businesses of all sizes.
              </li>
              <li>
                <b>Investment Services:</b> Our team of experts provides
                personalized investment advice and wealth management services to
                help you build and protect your wealth.
              </li>
              <li>
                <b>Digital Banking:</b> With our state-of-the-art online and
                mobile banking platforms, you can manage your accounts, pay
                bills, transfer funds, and more, anytime and anywhere.
              </li>
            </ul>

            <h3
              style={{
                letterSpacing: '0rem',
                marginTop: '1.5rem',
                color: 'var(--clr-primary-6)',
              }}
            >
              Why Choose Liberty Credit Union
            </h3>

            <ul
              style={{
                color: 'var(--clr-grey-5)',
                display: 'grid',
                gap: '1rem',
              }}
            >
              <li>
                <b>Personalized Service: </b>We understand that every customer
                is unique. Our dedicated team is here to provide personalized
                guidance and support.
              </li>
              <li>
                <b>Security and Trust:</b> Your financial security is our top
                priority. We employ the latest security measures to protect your
                assets and personal information.
              </li>
              <li>
                <b>Community Engagement:</b> We believe in giving back to the
                community. Through various programs and initiatives, we
                contribute to the well-being and prosperity of our local
                communities.
              </li>

              <p>
                Join us at Liberty Credit Union and experience the difference of
                a bank that truly cares about your financial future. Whether
                you're opening your first account, growing your business, or
                planning for retirement, we are here to support you every step
                of the way.
              </p>
            </ul>
          </div>
        </section>

        {/* <Faqs />
        <Tab />
        <MenuTab />*/}
        <Founders />
        {/* <Carousel /> */}
      </main>
    </Wrapper>
  );
};
export default About;
