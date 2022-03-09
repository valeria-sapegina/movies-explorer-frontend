import { Navigate, Outlet } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function ProtectedRoute({
  isLoggedIn,
  isAuthChecking,
}) {
  return (
    // eslint-disable-next-line no-nested-ternary
    isAuthChecking ? (
      <div className="preloader-page">
        <Preloader />
      </div>
    ) : (
      isLoggedIn ? <Outlet /> : <Navigate to="/" />
    )
  );
}

export default ProtectedRoute;
