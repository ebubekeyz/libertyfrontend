import { useEffect, useState } from 'react';
import Wrapper from '../assets/Testimonies';
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa6';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const list = [
  {
    id: 1,
    image: '/person3.jpg',
    name: 'Emily R. - Personal Banking',
    title: 'office manager',
    quote:
      'I’ve been a customer of Liberty Credit Union for more than 10 years, and I could nOt be more satisfied with the service. The staff is consistently friendly and helpful. I particularly value the convenience of their mobile banking app, which makes it easy to manage my finances on the go. Additionally, their savings account interest rates are some of the best I’ve come across. I highly recommend them!',
  },
  {
    id: 2,
    image: '/person1.jpg',
    name: 'James T. - Business Banking',
    title: 'regular guy',
    quote:
      'Liberty Credit Union has been an essential partner for my small business. Their business checking account is simple and hassle-free, and the cash management services have greatly improved our operations. Whenever I’ve needed help, their customer service team has been quick and professional. Thanks to Liberty Credit Union, managing our finances has never been easier.',
  },

  {
    id: 3,
    image: '/person2.webp',
    name: 'Micheal B. - Investment Services',
    title: 'the boss',
    quote:
      'I chose to transfer my investment accounts to Liberty Credit Union Bank after a friend suggested their wealth management services. It has been a fantastic decision. My financial advisor took the time to understand my goals and risk tolerance, and my portfolio has shown consistent growth. I feel assured that my financial future is in capable hands.',
  },
];

const Testimonies = () => {
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
      <div className="title">
        <h2>Reviews</h2>
      </div>
      <section className="slider-container">
        {people.map((person, personIndex) => {
          const { id, name, title, image, quote } = person;
          return (
            <article
              key={id}
              className="slide"
              style={{
                transform: `translateX(${100 * (personIndex - currentItem)}%)`,
                opacity: personIndex === currentItem ? 1 : 0,
                visibility: personIndex === currentItem ? 'visible' : 'hidden',
              }}
            >
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              {/* <p className="title">{title}</p> */}
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </section>
    </Wrapper>
  );
};
export default Testimonies;
