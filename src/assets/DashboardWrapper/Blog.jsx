import styled from 'styled-components';

const Wrapper = styled.section`
  .blog {
    width: 80%;
  }
  .card {
    height: 27rem;
    position: relative;
    /* talk later */
    -webkit-perspective: 1500px;
    perspective: 1500px;
    margin-bottom: 4rem;
  }
  .card-side {
    -webkit-transition: all 2s linear;
    transition: all 2s linear;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
    -webkit-transform: translate3d(0, 0, 0);
    visibility: visible;
  }
  .card-front {
    background: var(--clr-white);
  }
  .card-back {
    background: var(--clr-primary-10);
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    display: grid;
    place-items: center;
  }
  .card:hover .card-front {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }
  .card:hover .card-back {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }
  /* rest of the styles */
  .card-info {
    padding: 1rem 1.5rem;
  }
  .card-front img {
    height: 13rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }
  .card-footer {
    display: grid;
    grid-template-columns: auto 1fr;
    -webkit-box-align: center;
    align-items: center;
  }
  .card-footer img {
    width: 2rem;
    height: 2rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
  }
  .card-footer p {
    margin-bottom: 0;
    text-transform: uppercase;
    justify-self: end;
    color: var(--clr-primary-5);
    font-size: 0.85rem;
  }
  .blog-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 3rem 1rem;
  }
`;

export default Wrapper;
