import { Navigate } from 'react-router-dom';
import { getSessionToken, getSessionUser } from '../utils/helperAuthentication';

function PublicRoute({ children }) {
  const user = getSessionUser();
  const token = getSessionToken();

  if (user && token) {
    return <Navigate to='/app/dashboard' replace />;
  }
  return children;
}

export default PublicRoute;
