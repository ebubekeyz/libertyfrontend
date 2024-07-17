import { Outlet, useNavigation } from 'react-router-dom';
import { Footer, Navbar } from '../DashboardComponent';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { Connect, Testimonies, Timeline } from '../components';

const HomeLayout = () => {
  const user = useSelector((state) => state.userState.user);
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      {isPageLoading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <div className="section-center" id="dashboard">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};
export default HomeLayout;
