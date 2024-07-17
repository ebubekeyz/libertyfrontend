import styled from 'styled-components';

const Wrapper = styled.div`
  .landing {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 2rem;
    margin: 2rem 0;
    margin-bottom: 4rem;
  }

  .eye {
    cursor: pointer;
    font-size: 1.1rem;
    color: var(--clr-grey-9);
  }

  .balance {
    text-align: center;
    color: white;
    background: linear-gradient(to right, rgba(0, 70, 70, 0.6), rgb(0, 70, 70)),
      url('/bank2.jpg') center/cover no-repeat scroll;
    animation: change 10s linear infinite;
    border-radius: var(--radius);
    padding: 3rem 0;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    height: 16rem;
  }
  @keyframes change {
    to {
      background: linear-gradient(to left, rgba(0, 70, 70, 0.6), rgb(0, 70, 70)),
        url('/bank2.jpg') center/cover no-repeat scroll;
    }
  }
  .balance:hover {
    box-shadow: var(--dark-shadow);
  }
  .balance p {
    margin-bottom: 0.7rem;
    color: white;
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    font-weight: bold;
  }

  .acc,
  .amount {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 0.5rem;
  }

  .services {
    text-align: center;
    transition: var(--transition);
    overflow-x: scroll;
  }

  .services::-webkit-scrollbar {
    display: none;
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    gap: 1rem;
  }
  .ico {
    color: var(--clr-grey-9);
  }
  .inner-icon {
    flex: 0 0 calc(33.3% - 1rem);
    padding-top: 1rem;
    border-radius: var(--radius);
    background: linear-gradient(
      to right,
      rgba(0, 70, 70, 0.9),
      var(--clr-primary-2)
    );
    width: 20rem;
    height: 5rem;
    cursor: pointer;
    transition: var(--transition);
  }

  .inner-icon:hover {
    transform: scale(1.02);
  }

  .inner-icon p {
    font-size: 0.8rem;
    color: var(--clr-grey-10);
  }

  .transfer {
    border-top: 1px solid var(--clr-grey-10);
    padding: 2rem 2rem;

    transition: var(--transition);
    display: grid;
    gap: 1rem;
    margin-bottom: 0rem;
    margin-top: 0rem;
    cursor: pointer;
  }

  .transfer:hover {
    transform: scale(1.02);
  }
  .amount,
  .name {
    letter-spacing: 0.08rem;
    font-size: 1rem;
  }

  .date {
    color: var(--clr-primary-4);
    letter-spacing: 0.02;
  }
  .inner-transfer-cont {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  .approve {
    display: grid;
    gap: 0.5rem;
  }

  .approve h5 {
    color: green;
  }
  .refresh {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .transact {
    margin: 2rem 0;
  }

  .transfer {
    border-bottom: 1px solid var(--clr-grey-7);
    padding: 1rem 2rem;
    border-top: 1px solid var(--clr-grey-7);
    transition: var(--transition);
    display: grid;
    column-gap: 1rem;

    margin-bottom: 2rem;
    margin-top: 0;
  }

  .transfer:hover {
    transform: scale(1.02);
  }
  .amount,
  .name {
    letter-spacing: 0.08rem;
    font-size: 1rem;
  }

  .date {
    color: var(--clr-primary-4);
    letter-spacing: 0.02;
  }
  .inner-transfer-cont {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  .approve {
    display: grid;
    gap: 0.5rem;
  }

  .approve h5 {
    color: green;
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
  .split {
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .editAccount,
  .security {
    display: flex;
    gap: 1rem;
    align-items: start;

    text-transform: capitalize;
  }

  .security {
    background: var(--clr-primary-7);
  }
  @media screen and (min-width: 800px) {
    .landing {
      grid-template-columns: 1fr 400px;
      align-items: start;
    }
  }
`;

export default Wrapper;
