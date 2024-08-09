import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  About,
  Contacts,
  Error,
  Faqs,
  HomeLayout,
  Landing,
  Login,
  PasswordReset,
  Privacy,
  Projects,
  Register,
  Request,
  SingleBlog,
  SingleService,
  Terms,
} from './pages';
import { ErrorElement } from './components';
import { store } from './store';

import { loader as SingleBlogLoader } from './pages/SingleBlog';
import { loader as UpdateTransferDetailsLoader } from './DashboardPages/UpdateTransferDetails';
import { loader as UpdateUsersLoader } from './DashboardPages/UpdateUsers';
import ChangePassword, {
  loader as ChangePasswordLoader,
} from './DashboardPages/ChangePassword';
import { loader as WithdrawLoader } from './DashboardPages/Withdraw';
import { loader as AllTransactionsLoader } from './DashboardPages/AllTransactions';
import { loader as CardsLoader } from './DashboardPages/Cards';
import { loader as DeleteLoader } from './DashboardPages/Delete';
import { loader as AddUserLoader } from './DashboardPages/AddUser';
import Passport, { loader as PassportLoader } from './DashboardPages/Passport';
import { loader as UsersLoader } from './DashboardPages/Users';
import { loader as UpdateDepositLoader } from './DashboardPages/UpdateDeposit';
import { loader as UpdateLoader } from './DashboardPages/Update';
import { loader as SetTransferDetailsLoader } from './DashboardPages/SetTransferDetails';
import { loader as TransactionLoader } from './DashboardPages/Transaction';
import { loader as SingleServiceLoader } from './pages/SingleService';
import { loader as LandingLoader } from './DashboardPages/Landing';
import { loader as ChangePhotoLoader } from './DashboardPages/ChangePhoto';
import { loader as SendMoneyLoader } from './DashboardPages/SendMoney';
import { loader as AdminDepositLoader } from './DashboardPages/AdminDeposit';
import { loader as DepositLoader } from './DashboardPages/Deposit';
import { loader as AccountLoader } from './DashboardPages/Account';
import { loader as NotificationLoader } from './DashboardPages/Notification';
import NotificationMessage, {
  loader as NotificationMessageLoader,
} from './DashboardPages/NotificationMessage';
import AccountInfo, {
  loader as AccountInfoLoader,
} from './DashboardPages/AccountInfo';
import Security, { loader as SecurityLoader } from './DashboardPages/Security';

import { action as SendMoneyAction } from './DashboardComponent/SendMoney';
import { action as UpdateTransferDetailsAction } from './DashboardComponent/UpdateTransferDetails';
import { action as ChangePasswordAction } from './DashboardComponent/ChangePassword';
import { action as WithdrawAction } from './DashboardComponent/Withdraw';
import { action as AddUserAction } from './DashboardComponent/AddUser';
import { action as UpdateUsersAction } from './DashboardComponent/UpdateUsers';
import { action as UpdateDepositAction } from './DashboardComponent/UpdateDeposit';
import { action as UpdateWithdrawalAction } from './DashboardComponent/UpdateWithdrawal';
import { action as PassportAction } from './DashboardComponent/Passport';
import { action as NotificationMessageAction } from './DashboardComponent/Notification';
import { action as SetTransferDetailsAction } from './DashboardComponent/SetTransferDetails';
import { action as LoginAction } from './pages/Login';
import { action as PasswordResetAction } from './pages/PasswordReset';
import { action as AccountAction } from './DashboardComponent/Account';
import { action as SecurityAction } from './DashboardComponent/Security';
import { action as RegisterAction } from './pages/Register';
import { action as AdminDepositAction } from './DashboardComponent/AdminDeposit';

import {
  ErrorElement as DashboardErrorElement,
  SetTransferDetails,
} from './DashboardComponent';

import {
  Landing as DashboardLanding,
  HomeLayout as DashboardHomeLayout,
  Error as DashboardError,
  SendMoney,
  AdminDeposit,
  Deposit,
  Account,
  Transaction,
  Incoming,
  Notification,
  Users,
  SiteMap,
  Update,
  UpdateDeposit,
  UpdateUsers,
  AddUser,
  Withdraw,
  Delete,
  Cards,
  AllTransactions,
  UpdateTransferDetails,
} from './DashboardPages';

import { action as RequestAction } from './pages/Request';
import { action as ChangePhotoAction } from './DashboardComponent/ChangePhoto';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {
  calculateDeposit,
  calculateWithdraw,
  // loadAccount,
  loadDeposit,
  loadAllUsers,
  loadNotification,
  calculateNotification,
  calculateAllUsers,
  loadAllWithdrawal,
  loadAllDeposit,
  patchBalance,
  getAccount,
} from './features/user/userSlice';
import { loadWithdraw } from './features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ChangePhoto from './DashboardPages/ChangePhoto';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Projects />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'request-form',
        element: <Request />,
        action: RequestAction,
      },
      {
        path: 'faqs',
        element: <Faqs />,
      },
      {
        path: 'singleBlog/:id',
        element: <SingleBlog />,
        loader: SingleBlogLoader,
      },
      {
        path: 'singleService/:id',
        element: <SingleService />,
        loader: SingleServiceLoader,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
    action: LoginAction(store),
  },
  {
    path: 'passwordReset',
    element: <PasswordReset />,
    action: PasswordResetAction,
  },
  {
    path: 'Register',
    element: <Register />,
    action: RegisterAction(store),
  },
  {
    path: '/dashboard',
    element: <DashboardHomeLayout />,
    errorElement: <DashboardError />,
    children: [
      {
        index: true,
        element: <DashboardLanding />,
        errorElement: <DashboardErrorElement />,
        loader: LandingLoader(store),
      },
      {
        path: '/dashboard/sendMoney',
        element: <SendMoney />,
        errorElement: <DashboardErrorElement />,
        loader: SendMoneyLoader(store),
        action: SendMoneyAction(store),
      },
      {
        path: '/dashboard/adminDeposit',
        element: <AdminDeposit />,
        loader: AdminDepositLoader(store),
        action: AdminDepositAction(store),
      },

      {
        path: '/dashboard/deposit',
        element: <Deposit />,
        errorElement: <DashboardErrorElement />,
        loader: DepositLoader(store),
      },

      {
        path: '/dashboard/account',
        element: <Account />,
        errorElement: <DashboardErrorElement />,
        loader: AccountLoader(store),
        action: AccountAction(store),
      },

      {
        path: '/dashboard/security',
        element: <Security />,
        errorElement: <DashboardErrorElement />,
        loader: SecurityLoader(store),
        action: SecurityAction(store),
      },
      {
        path: '/dashboard/passport',
        element: <Passport />,
        errorElement: <DashboardErrorElement />,
        loader: PassportLoader(store),
        action: PassportAction(store),
      },
      {
        path: '/dashboard/update',
        element: <Update />,
        errorElement: <DashboardErrorElement />,
        loader: UpdateLoader(store),
        action: UpdateWithdrawalAction(store),
      },
      {
        path: '/dashboard/changePassword',
        element: <ChangePassword />,
        errorElement: <DashboardErrorElement />,
        loader: ChangePasswordLoader(store),
        action: ChangePasswordAction(store),
      },
      {
        path: '/dashboard/set-transfer-details',
        element: <SetTransferDetails />,
        errorElement: <DashboardErrorElement />,
        loader: SetTransferDetailsLoader(store),
        action: SetTransferDetailsAction(store),
      },
      {
        path: '/dashboard/update-transfer-details',
        element: <UpdateTransferDetails />,
        errorElement: <DashboardErrorElement />,
        loader: UpdateTransferDetailsLoader(store),
        action: UpdateTransferDetailsAction(store),
      },
      {
        path: '/dashboard/updateDeposit',
        element: <UpdateDeposit />,
        errorElement: <DashboardErrorElement />,
        loader: UpdateDepositLoader(store),
        action: UpdateDepositAction(store),
      },

      {
        path: '/dashboard/updateUsers',
        element: <UpdateUsers />,
        errorElement: <DashboardErrorElement />,
        loader: UpdateUsersLoader(store),
        action: UpdateUsersAction(store),
      },
      {
        path: '/dashboard/addUser',
        element: <AddUser />,
        errorElement: <DashboardErrorElement />,
        loader: AddUserLoader(store),
        action: AddUserAction(store),
      },

      {
        path: '/dashboard/withdraw',
        element: <Withdraw />,
        errorElement: <DashboardErrorElement />,
        loader: WithdrawLoader(store),
        action: WithdrawAction(store),
      },
      {
        path: '/dashboard/delete',
        element: <Delete />,
        errorElement: <DashboardErrorElement />,
        loader: DeleteLoader(store),
      },

      {
        path: '/dashboard/notification',
        element: <Notification />,
        errorElement: <DashboardErrorElement />,
        loader: NotificationLoader(store),
      },
      {
        path: '/dashboard/cards',
        element: <Cards />,
        errorElement: <DashboardErrorElement />,
        loader: CardsLoader(store),
      },
      {
        path: '/dashboard/siteMap',
        element: <SiteMap />,
        errorElement: <DashboardErrorElement />,
      },
      {
        path: '/dashboard/notificationMessage',
        element: <NotificationMessage />,
        errorElement: <DashboardErrorElement />,
        action: NotificationMessageAction(store),
      },
      {
        path: '/dashboard/accountInfo',
        element: <AccountInfo />,
        loader: AccountInfoLoader(store),
      },
      {
        path: '/dashboard/users',
        element: <Users />,
        errorElement: <DashboardErrorElement />,
        loader: UsersLoader(store),
      },
      {
        path: '/dashboard/transaction',
        element: <Transaction />,
        errorElement: <DashboardErrorElement />,
        loader: TransactionLoader(store),
      },
      {
        path: '/dashboard/changePhoto',
        element: <ChangePhoto />,
        errorElement: <DashboardErrorElement />,
        action: ChangePhotoAction(store),
        loader: ChangePhotoLoader(store),
      },
      {
        path: '/dashboard/incoming-transaction',
        element: <Incoming />,
        errorElement: <DashboardErrorElement />,
      },
      {
        path: '/dashboard/all-transactions',
        element: <AllTransactions />,
        errorElement: <DashboardErrorElement />,
        loader: AllTransactionsLoader(store),
      },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const { user, balance, withdrawBalance } = useSelector(
    (state) => state.userState
  );

  useEffect(() => {
    dispatch(loadWithdraw());
    dispatch(getAccount());
    dispatch(loadNotification());
    // dispatch(loadAccount());
    dispatch(loadAllUsers());
    dispatch(loadAllDeposit());
    dispatch(loadDeposit());
    dispatch(calculateWithdraw());
    dispatch(calculateDeposit());
    dispatch(calculateNotification());
    dispatch(calculateAllUsers());
    dispatch(loadAllWithdrawal());
    dispatch(patchBalance());
  }, [user]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
