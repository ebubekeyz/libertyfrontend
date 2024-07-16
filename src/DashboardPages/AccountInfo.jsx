import { Link, redirect, useLoaderData } from 'react-router-dom';
import { Account as Acc } from '../DashboardComponent';
import { customFetch } from '../utils';
import Wrapper from '../assets/DashboardWrapper/AccountInfo';
import { useSelector } from 'react-redux';
import { FiEdit, FiLock } from 'react-icons/fi';
import moment from 'moment';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};

const AccountInfo = () => {
  const user = useSelector((state) => state.userState.user);

  const dob = user.dob;
  const year = dob.slice(0, 4);
  const age = Number(moment().format('YYYY')) - year;

  const passport = useSelector((state) => state.userState.passport);

  let pass =
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:7000'
      : 'https://libertycredit-union.onrender.com';

  return (
    <Wrapper>
      <div className="account">
        <div className="sub-menu">
          <Link to="/dashboard/account" className="editAccount">
            <FiEdit className="icon" />
            <h4>Update</h4>
          </Link>

          <Link to="/dashboard/security" className="security">
            <FiLock className="icon" />
            <h4>Security </h4>
          </Link>
        </div>

        <div className="account-cont">
          <article className="transfer">
            <div className="passport">
              <img src={`${pass}${passport}`} alt="passport" className="pass" />
            </div>
            <div className="inner-transfer-cont">
              <div className="details">
                <p className="name">Name:</p>
                <p className="item">
                  {user.firstName} {user.lastName}
                </p>
              </div>

              <div className="details">
                <p className="name">Age:</p>
                <p className="item">{age} years</p>
              </div>

              <div className="details">
                <p className="name">Address:</p>
                <p className="item">{user.address}</p>
              </div>

              <div className="details">
                <p className="name">Occupation:</p>
                <p className="item">{user.occupation}</p>
              </div>

              <div className="details">
                <p className="name">Marital Status:</p>
                <p className="item">{user.maritalStatus}</p>
              </div>

              <div className="details">
                <p className="name">Email:</p>
                <p className="item">{user.email}</p>
              </div>

              <div className="details">
                <p className="name">Phone Number:</p>
                <p className="item">{user.phone}</p>
              </div>

              <div className="details">
                <p className="name">Gender:</p>
                <p className="item">{user.gender}</p>
              </div>

              <div className="details">
                <p className="name">Country:</p>
                <p className="item">{user.country}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Wrapper>
  );
};
export default AccountInfo;
