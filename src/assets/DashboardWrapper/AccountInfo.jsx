import styled from 'styled-components';

const Wrapper = styled.div`
  .account {
    margin: 2rem 0;
  }
  .account-cont {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    margin: 0 auto;
  }
  .sub-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }

  .icon {
    color: var(--clr-primary-4);
  }
  .editAccount h4,
  .security h4 {
    color: var(--clr-grey-2);
  }

  .editAccount,
  .security {
    display: flex;
    gap: 1rem;
    align-items: start;
  }

  .passport,
  .pass {
    width: 5rem;
    height: 5rem;
    border-radius: 30rem;
    object-fit: cover;
    margin: 0 auto;
  }
  .transfer {
    padding: 2rem 2rem;
    overflow-x: hidden;
    border-radius: var(--radius);
    border-bottom: 2px solid var(--clr-primary-4);
    border-top: 2px solid var(--clr-primary-4);
    transition: var(--transition);
    display: grid;
    max-width: 30rem;
    gap: 1rem;
    box-shadow: var(--light-shadow);
    border-bottom: 2px solid var(--clr-primary-4);

    color: var(--clr-grey-2);
  }
  .item {
    letter-spacing: 1;
    color: var(--clr-grey-2);
  }

  .transfer:hover {
    transform: skew(1.02deg);
    border-radius: 0;
  }
  .amount,
  .name {
    letter-spacing: 0.02rem;

    font-weight: bold;
    color: var(--clr-primary-2);
  }

  .date {
    color: var(--clr-primary-2);
    letter-spacing: 0;
    font-weight: bold;

    font-size: 1rem;

    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
  /* .inner-transfer-cont {
    display: grid;
    gap: 1rem;
  } */

  .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-around;

    align-items: center;

    padding-top: 0.4rem;
    border-bottom: 2px solid #cccc;
  }
`;

export default Wrapper;
