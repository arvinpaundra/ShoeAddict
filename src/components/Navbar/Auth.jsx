import { useState } from 'react';
import { HiUserCircle, HiShoppingCart } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const Auth = (props) => {
  const navigate = useNavigate();

  const [expand, setExpand] = useState(false);

  const { isLogin } = props;

  if (isLogin) {
    return (
      <div className="hidden md:flex justify-center items-center gap-4 relative">
        <Link to="/cart">
          <HiShoppingCart size={24} />
        </Link>
        <HiUserCircle
          className="cursor-pointer"
          size={24}
          onClick={() => {
            setExpand((prevState) => !prevState);
          }}
        />
        {expand && (
          <div
            className="absolute top-[4.75rem] -right-4 p-3 w-52 bg-white drop-shadow-2xl cursor-pointer"
            onClick={() => navigate('/', { replace: true })}
          >
            <p>Logout</p>
            <hr />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="hidden md:flex justify-center items-center gap-4">
      <Link to="/login" className="font-normal">
        Masuk
      </Link>
    </div>
  );
};

export default Auth;
