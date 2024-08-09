import { redirect } from 'react-router-dom';
import { UpdateTransferDetails as UpdateTransfer } from '../DashboardComponent';
import { customFetch } from '../utils';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};

const UpdateTransferDetails = () => {
  return (
    <div>
      <UpdateTransfer />
    </div>
  );
};
export default UpdateTransferDetails;
