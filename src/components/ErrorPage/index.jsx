import { Link } from 'react-router-dom';
import Navbar from '../Navbar/index';

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
        <p className="text-base">
          <span className="font-bold text-lg">404</span> | Not Found.
        </p>
        <p>
          Back to{' '}
          <Link to="/" className="underline underline-offset-2 text-orange-500">
            Home
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
