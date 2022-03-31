import { AiFillHome } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import { HiUserCircle } from 'react-icons/hi';
import Auth from './Auth';
import ListMenu from './ListMenu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = (props) => {
  const [expand, setExpand] = useState(false);

  const menuProfile = () => {
    setExpand((prevState) => !prevState);
  };

  return (
    <>
      {/* Mobile */}
      <div className="flex justify-around items-center border-t-2 px-4 py-3 h-16 md:hidden fixed bottom-0 right-0 z-10 w-full bg-white">
        <Link to="/" className="flex flex-col items-center">
          <AiFillHome />
          <p>Home</p>
        </Link>
        <Link to="/search" className="flex flex-col items-center">
          <GoSearch />
          <p>Cari</p>
        </Link>
        <div className="flex flex-col items-center">
          <HiUserCircle onClick={menuProfile} />
          <button onClick={menuProfile}>Profile</button>
        </div>
        {expand && (
          <div className="absolute bottom-20 right-4 flex flex-col w-36 bg-white drop-shadow-2xl p-4 gap-2">
            <Link to="/cart">Keranjang</Link>
            <hr />
            <Link to="/logout">Logout</Link>
          </div>
        )}
      </div>

      {/* PC */}
      <div className="h-9 border-b-2 px-4 flex items-center md:h-fit md:flex md:justify-between md:items-center md:px-10 md:py-5 sticky top-0 bg-white z-20">
        <Link to="/" className="md:text-xl font-medium">
          ShoeAddict.
        </Link>
        <div className="hidden md:flex md:justify-center md:gap-4">
          <ListMenu active menu="Home" href="/" />
          <ListMenu menu="Cari" href="/search" />
          <ListMenu menu="Tentang" href="/about" />
        </div>
        <Auth isLogin />
      </div>
    </>
  );
};

export default Navbar;
