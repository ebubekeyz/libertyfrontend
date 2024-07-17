import styled from 'styled-components';

const Wrapper = styled.section`
  .service {
    background: var(--clr-white);
    padding: 3rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: var(--radius);
    text-align: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .service-icon {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .service .underline {
    width: 3rem;
    height: 0.12rem;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .service p {
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .service:hover {
    background: var(--clr-primary-5);
    color: var(--clr-white);
  }
  .service:hover p {
    color: var(--clr-white);
  }
  .service:hover .underline {
    background: var(--clr-white);
  }
  @media screen and (min-width: 676px) {
    .service {
      width: 100%;
    }
  }
  @media screen and (min-width: 992px) {
    .service {
      width: 30%;
    }
    .services-center {
      display: flex;
      justify-content: start;
      gap: 2rem;
    }
  }
`;

export default Wrapper;
