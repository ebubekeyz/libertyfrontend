import styled from 'styled-components';

const Wrapper = styled.div`
  .deposit {
    margin: 2rem 0;
  }
  .transfer {
    padding: 0rem 0rem;
    padding-bottom: 2rem;
    transition: var(--transition);
    display: grid;
    gap: 1rem;
    margin-bottom: 2rem;
    margin-top: 0;

    max-width: 30rem;
    background: rgba(255, 255, 255, 0.5);
    margin: 0 auto;
  }

  .amount,
  .name {
    letter-spacing: 0.05rem;
    font-size: 0.95rem;
    color: var(--clr-grey-3);
  }

  .date {
    color: var(--clr-grey-10);
    letter-spacing: 0.01rem;
    text-align: center;
    font-size: 1rem;
    padding: 0.4rem;
    background: var(--clr-primary-5);
  }
  .inner-transfer-cont {
    display: grid;
    gap: 1rem;
  }
  .details h4 {
    letter-spacing: 0.05rem;
    font-size: 0.95rem;
    color: var(--clr-grey-3);
  }
  .details {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 2rem;
    gap: 1rem;
  }

  .divide {
    display: flex;

    gap: 1rem;
  }

  .approve {
    display: grid;
    gap: 0.5rem;
  }

  .approve h5 {
    color: green;
  }

  .form-alert {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    color: var(--clr-grey-1);
    letter-spacing: 0.05rem;
    padding: 2rem;
    text-align: center;
    border-radius: var(--radius);
  }

  .show {
    display: flex;
  }
`;

export default Wrapper;
