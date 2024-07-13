import styled from 'styled-components';

const Wrapper = styled.section`
  .input {
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem 0.5rem;
    border: none;
    background: var(--clr-primary-10);
    margin: 0.8rem 0;
    border-radius: var(--radius);
  }

  .input:focus {
    outline: none;
  }

  .input::placeholder {
    color: var(--clr-grey-4);
  }
  .label-text {
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 700;
    color: var(--clr-grey-4);
  }
`;

export default Wrapper;
