import { Outlet, useNavigation } from 'react-router-dom';
import { Footer, Navbar } from '../components';
import Loading from '../components/Loading';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      {isPageLoading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};
export default HomeLayout;
