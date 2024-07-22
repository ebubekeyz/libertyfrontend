import { Link } from 'react-router-dom';

import Wrapper from '../assets/DashboardWrapper/Navbar';
import { FaBarsStaggered, FaBell } from 'react-icons/fa6';
import Sidebar from './Sidebar';
import { customFetch } from '../utils';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import logo from '../assets/log.png';
//  <div className="log-main">
//    <img
//      src={logo}
//      alt="logo"
//      className="logo logoMain"
//      style={{ width: '5rem' }}
//    />
//    <h1 style={{ fontSize: '1.3rem' }} className="nav-logo">
//      LCU Bank Plc
//    </h1>
//  </div>;
const Navbar = ({ onClick }) => {
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('#nav');
    if (window.pageYOffset > 80) {
      navbar.classList.add('navbar-fixed');
    } else {
      navbar.classList.remove('navbar-fixed');
    }
  });
  const handleToggle = () => {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.add('show-sidebar');
  };
  const handleClose = () => {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.remove('show-sidebar');
  };

  const { user, allUsers, notification, notificationId, num } = useSelector(
    (state) => state.userState
  );
  const passport = useSelector((state) => state.userState.passport);

  const clickNotice = async () => {
    const data = { status: 'sent' };
    try {
      const resp = await customFetch.patch(
        `/notification/${notificationId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  let url =
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:5173'
      : 'https://libertycredit-union.onrender.com';

  let pass =
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:7000'
      : 'https://libertycredit-union.onrender.com';

  // useEffect(() => {
  //   clickNotice();
  // }, []);

  const closeEnvelope = () => {
    const popup = document.querySelector('.popup');

    popup.style.display = 'none';
  };

  return (
    <Wrapper>
      <nav onClick={onClick} className="nav" id="nav">
        <div className="nav-center">
          {/* nav header  */}
          <div className="nav-header">
            <button className="nav-btn" id="nav-btn">
              <FaBarsStaggered onClick={handleToggle} />
            </button>

            <div className="tog">
              <button className="nav-btn" id="nav-btn">
                <FaBarsStaggered onClick={handleToggle} />
              </button>
            </div>

            <div className="tog2">
              <img
                src="/logo.png"
                alt="logo"
                className="logo logoMain"
                style={{ width: '12rem' }}
              />
            </div>
          </div>
          {/* nav-links  */}
          <div className="pass-ico">
            {' '}
            <Link
              onClick={clickNotice}
              to="/dashboard/notification"
              className="nav-links"
            >
              <FaBell
                className="bell"
                style={{ cursor: 'pointer', color: 'black' }}
              />
              <sup className="num">{num}</sup>
            </Link>
            {user.role === 'admin' || user.role === 'owner' ? (
              <Link to="/dashboard/passport" className="passport">
                <img src={`${passport}`} alt="passport" className="pass" />
              </Link>
            ) : (
              <div className="passport">
                <img src={`${passport}`} alt="passport" className="pass" />
              </div>
            )}
          </div>
        </div>

        {num > 0 ? (
          <div className="popup">
            <div className="close-btn">
              <FaTimes className="close-envelope" onClick={closeEnvelope} />
            </div>
            <h4>New Message</h4>
            <img src="/envelope.svg" alt="envelope" className="envelope" />
            <Link
              to={`${url}/dashboard/notification`}
              className="btn envelope-link"
              onClick={clickNotice}
            >
              Read
            </Link>
          </div>
        ) : (
          ''
        )}
      </nav>

      <Sidebar onClick={handleClose} />
    </Wrapper>
  );
};
export default Navbar;
