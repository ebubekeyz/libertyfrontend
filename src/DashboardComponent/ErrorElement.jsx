import { FiRefreshCw } from 'react-icons/fi';
import Wrapper from '../assets/DashboardWrapper/Error';

const ErrorElement = () => {
  const refresh = () => {
    return window.location.reload();
  };
  return (
    <Wrapper>
      <div>
        <p className="errorElement">
          Oops! Something went wrong. Please try again...
        </p>
        <button className="btn refresh" onClick={refresh}>
          Reload <FiRefreshCw />
        </button>
      </div>
    </Wrapper>
  );
};
export default ErrorElement;
