import styled from 'styled-components';

const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    .skills-center {
      display: grid;
      grid-template-columns: 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }

  .skills h3 {
    margin: 1.5rem 0;
    color: var(--clr-primary-1);
  }
  .skill {
    margin-bottom: 1.25rem;
  }
  .skill p {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    color: black;
  }
  .skill-container {
    background: var(--clr-white);
    height: 1rem;
    width: 100%;
    border-radius: var(--radius);
    position: relative;
  }
  .skill-value {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--clr-primary-5);
    height: 100%;
    width: 100%;
    border-radius: var(--radius);
  }
  .value-70 {
    width: 70%;
  }
  .value-80 {
    width: 80%;
  }
  .skill-text {
    position: absolute;
    top: -2rem;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .skill-text-70 {
    left: 70%;
  }
  .skill-text-80 {
    left: 80%;
  }
  @media screen and (min-width: 1300px) {
    .skill-container {
      width: 80%;
    }
  }
`;

export default Wrapper;
