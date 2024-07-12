import styled from 'styled-components';

const Wrapper = styled.aside`
  .sidebar {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 150%;

    background: rgba(10, 95, 223, 1);
    z-index: 4;
    padding-top: 1.2rem;
    /* align-items: center;
  justify-content: center; */
    place-items: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    /* add later */
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  /* toggle sidebar */
  .show-sidebar {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  .sidebar-links {
    text-align: center;
  }

  .sidebar-logo {
    text-align: center;
    display: grid;
    place-items: center;
  }
  .passport,
  .pass {
    width: 5rem;
    height: 5rem;
    border-radius: 30rem;
    object-fit: cover;
  }
  .pass-ico {
    display: flex;
    gap: 0.7rem;
    align-items: center;
  }
  .side-logo {
    width: 2rem;
    margin-bottom: 3.5rem;
  }
  /* .nav-logo {
    font-size: 1rem;
    letter-spacing: 0.2rem;

    margin-bottom: 2rem;
    color: var(--clr-grey-5);
  } */
  .sidebar-links a {
    font-size: 1.5rem;
    text-transform: capitalize;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    color: white;
    letter-spacing: var(--spacing);
    display: inline-block;
    margin-bottom: 1.5rem;
  }
  .sidebar-links a:hover {
    color: var(--clr-grey-1);
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: transparent;
    border: transparent;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    color: #e66b6b;
    cursor: pointer;
  }
  .close-btn:hover {
    color: #e66b6b;
  }
  .power {
    text-align: center;
  }
  .power-btn {
    font-size: 1rem;
    transition: var(--clr-transition);
    color: #bb2525;
    margin-right: 1rem;
  }

  .home,
  .person,
  .service,
  .question,
  .phone {
    font-size: 1rem;
    margin-right: 10px;
    color: var(--clr-grey-3);
    transition: var(--transition);
  }

  .home:hover,
  .person:hover,
  .service:hover,
  .question:hover,
  .phone:hover,
  .power-btn:hover,
  .logout:hover {
    color: var(--clr-primary-8);
  }

  .logout {
    color: #bb2525;
    font-size: 1.5rem;
    transition: var(--clr-transition);
    cursor: pointer;
  }
  @media screen and (min-width: 1300px) {
    .sidebar {
      width: 21%;
      background: rgba(10, 95, 223, 1);
      overflow-x: hidden;
      transform: translateX(0);
      place-items: start;
      padding: 0rem 3rem;
      padding-top: 1rem;
      padding-bottom: 4rem;
      height: 330%;
      bottom: 0;
      margin: 0 auto;
    }

    .power {
      text-align: left;
    }
    .sidebar-links {
      display: grid;

      text-align: left;
      grid-template-columns: 1fr;
    }
    .sidebar-links a {
      font-size: 1rem;
      color: white;
    }
    .sidebar-links li:hover {
      color: var(--clr-grey-10);
    }
    .close-btn {
      display: none;
    }
    .power-btn,
    .logout {
      font-size: 1rem;
      margin-right: 1rem;
    }
  }
`;

export default Wrapper;
