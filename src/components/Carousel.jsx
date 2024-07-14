import { useEffect, useState } from 'react';
import Wrapper from '../assets/Carousel';
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa6';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const list = [
  {
    id: 1,
    image: '/bank5.jpg',
    name: 'john doe',
    title: 'Creativity and Technology',
    quote: 'Explore the Future of Banking Today.',
    link: '/login',
    text: 'Login',
  },
  {
    id: 3,
    image: '/bank1.jpg',
    name: 'peter smith',
    title: 'Ease and Availability',
    quote: 'Banking Made Easy, Anytime, Anywhere.',
    link: '/about',
    text: 'About Us',
  },
  {
    id: 4,
    image: '/bank4.jpg',
    name: 'susan andersen',
    title: 'Trustworthiness',
    quote: 'Your Reliable Partner in Financial Development',
    link: '/contacts',
    text: 'Contact',
  },
];

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentItem, setCurrentItem] = useState(0);

  const nextSlide = () => {
    setCurrentItem((oldItem) => {
      const newItem = (oldItem + 1) % people.length;
      return newItem;
    });
  };

  const prevSlide = () => {
    setCurrentItem((oldItem) => {
      const newItem = (oldItem - 1 + people.length) % people.length;
      return newItem;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [currentItem]);

  return (
    <Wrapper>
      <section className="slider-container">
        {people.map((person, personIndex) => {
          const { id, name, title, image, quote, link, text } = person;

          return (
            <article
              key={id}
              className="slide"
              style={{
                transform: `translateX(${100 * (personIndex - currentItem)}%)`,
              }}
            >
              <img src={image} alt={name} className="person-img" />
              <div className="cont">
                <div className="anim">
                  <h1 className="title">{title}</h1>
                  <p className="text">{quote}</p>
                  <Link to={`${link}`} className="btn">
                    {text}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
        {/* <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button> */}
      </section>
    </Wrapper>
  );
};
export default Carousel;
