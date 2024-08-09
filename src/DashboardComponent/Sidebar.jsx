import {
  FaClosedCaptioning,
  FaDollarSign,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaMoneyBillTransfer,
  FaMoneyBills,
  FaPerson,
  FaPhone,
  FaPinterest,
  FaPowerOff,
  FaQuestion,
  FaTwitter,
} from 'react-icons/fa6';
import Wrapper from '../assets/DashboardWrapper/Sidebar';
import {
  FaEdit,
  FaHome,
  FaIdCard,
  FaReceipt,
  FaServicestack,
  FaTimes,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/user/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import logo from '../assets/log.png';

const Sidebar = ({ onClick, onClick2 }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.userState.user);

  const handleLogout = (e) => {
    navigate('/login');
    dispatch(logoutUser());
  };

  const passport = useSelector((state) => state.userState.passport);

  let pass =
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:7000'
      : 'https://libertycredit-union.onrender.com';

  return (
    <Wrapper>
      <aside onClick={onClick2} className="sidebar" id="sidebar">
        <div>
          <button className="close-btn" id="close-btn">
            <FaTimes onClick={onClick} />
          </button>
          {/* nav-links  */}

          <ul className="sidebar-links">
            <div className="sidebar-logo">
              {user.role === 'admin' || user.role === 'owner' ? (
                <a href="/dashboard/passport" className="passport">
                  <img src={`${passport}`} alt="passport" className="pass" />
                </a>
              ) : (
                <div className="passport">
                  <img src={`${passport}`} alt="passport" className="pass" />
                </div>
              )}

              <h1
                style={{
                  fontSize: '1rem',
                  marginBottom: '2rem',
                  marginTop: '0.5rem',
                  color: 'white',
                }}
              >
                {user.firstName} {user.lastName}
              </h1>
            </div>

            <li>
              <FaHome className="home" />
              <a href="/dashboard">home</a>
            </li>
            <li>
              <FaPerson className="person" />
              <a href="/dashboard/accountInfo">Account</a>
            </li>

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaMoneyBillTransfer className="question" />
                <a href="/dashboard/withdraw">Withdraw</a>
              </li>
            ) : (
              <li>
                <FaMoneyBillTransfer className="question" />
                <a href="/dashboard/sendMoney">Send Money</a>
              </li>
            )}

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaMoneyBills className="phone" />
                <a href="/dashboard/adminDeposit">Deposit</a>
              </li>
            ) : (
              <li>
                <FaMoneyBills className="phone" />
                <a href="/dashboard/deposit">Deposit</a>
              </li>
            )}

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaMoneyBills className="phone" />
                <a href="/dashboard/set-transfer-details">Set Transfer Info</a>
              </li>
            ) : (
              ''
            )}
            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaMoneyBills className="phone" />
                <a href="/dashboard/update-transfer-details">
                  Update Transfer Info
                </a>
              </li>
            ) : (
              ''
            )}

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FiSettings className="phone" />
                <a href="/dashboard/notificationMessage">Notification</a>
              </li>
            ) : (
              ''
            )}

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FiSettings className="phone" />
                <a href="/dashboard/siteMap">Site Map</a>
              </li>
            ) : (
              ''
            )}
            <li>
              <FaIdCard className="service" />
              <a href="/dashboard/cards">Card</a>
            </li>

            <li>
              <FaReceipt className="service" />
              <a href="/dashboard/transaction">Transactions</a>
            </li>

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaEdit className="service" />
                <a href="/dashboard/addUser">Add User</a>
              </li>
            ) : (
              ''
            )}

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaEdit className="service" />
                <a href="/dashboard/changePhoto">Add Passport</a>
              </li>
            ) : (
              ''
            )}

            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaEdit className="service" />
                <a href="/dashboard/updateUsers">Update User</a>
              </li>
            ) : (
              ''
            )}
            {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaEdit className="service" />
                <a href="/dashboard/changePassword">Edit Password</a>
              </li>
            ) : (
              ''
            )}

            {/* {user.role === 'admin' || user.role === 'owner' ? (
              <li>
                <FaEdit className="service" />
                <a href="/dashboard/delete">Delete Items</a>
              </li>
            ) : (
              ''
            )} */}
          </ul>

          <div className="power" onClick={handleLogout}>
            <FaPowerOff className="power-btn" />
            <span className="logout">Logout</span>
          </div>
        </div>
      </aside>
    </Wrapper>
  );
};
export default Sidebar;
