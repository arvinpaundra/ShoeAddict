import Navbar from '../Navbar';
import CurrencyFormat from 'react-currency-format';
import { Link, useParams } from 'react-router-dom';
import { useCallback, useState, useEffect, useContext } from 'react';
import { getDetailShoeAPI } from '../../services/sneakers';
import { Loader } from '../../images';
import CartContext from '../../global/cart-context';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Footer from '../Footer';

const DetailPage = (props) => {
  const cartCtx = useContext(CartContext);

  const { shoeId } = useParams();
  const [shoe, setShoe] = useState({
    image: { original: '' },
    name: '',
    estimatedMarketValue: 0,
    gender: '',
    sku: '',
    colorway: '',
  });
  const [size, setSize] = useState('');
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const getDetailShoe = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const shoeDetail = await getDetailShoeAPI(id);
      setShoe(shoeDetail);
      setIsLoading(false);
      return shoeDetail;
    } catch (error) {
      setError(error);
    }
  }, []);

  useEffect(() => {
    getDetailShoe(shoeId);
  }, [getDetailShoe, shoeId]);

  const addToChartHandler = () => {
    if (size === '') {
      toast.error('Masukkan ukuran sepatumu!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    cartCtx.addItem({
      id: shoe.id,
      name: shoe.name,
      gender: shoe.gender,
      sku: shoe.sku,
      estimatedMarketValue: shoe.estimatedMarketValue,
      image: shoe.image.original,
      qty: 1,
      size: size,
    });

    toast.success('Ditambahkan ke keranjang.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const sizeChangeHandler = (event) => {
    setSize(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="md:flex mb-4">
        <div className="flex justify-center items-center md:w-3/5 bg-[#ebedee]">
          <img src={shoe.image.original} alt={shoe.name} width={575} />
        </div>
        {isLoading ? (
          <div className="md:py-6 md:px-10 p-4 grow-0 md:w-2/5 h-screen flex justify-center items-center w-full">
            <img src={Loader} alt="Loading..." className="md:w-12 w-9" />
          </div>
        ) : (
          <div className="md:py-6 md:px-10 p-4 grow-0 md:w-2/5">
            <h1 className="font-semibold md:text-5xl text-3xl mb-4">{shoe.name}</h1>
            <p className="text-base font-light italic font-secondary mb-4">{shoe.colorway}</p>
            <p className="font-medium text-base mb-6">
              {shoe.gender} • {shoe.sku}
            </p>
            <p className="font-semibold text-xl mb-8">
              <CurrencyFormat
                thousandSeparator="."
                prefix={'Rp. '}
                displayType="text"
                value={shoe.estimatedMarketValue * 14365}
                decimalSeparator=","
              />
            </p>
            <div className="flex flex-col gap-2">
              <label htmlFor="size" className="font-semibold text-base tracking-widest">
                PILIH SIZE
              </label>
              <select
                name="size"
                id="size"
                onChange={sizeChangeHandler}
                className="border-2 w-fit border-black p-2 focus:outline-none font-semibold text-sm tracking-widest mb-4 cursor-pointer"
              >
                <option value="">UKURAN</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
              </select>
            </div>
            <p className="text-[#E63F3F] tracking-widest font-semibold text-sm font-secondary mb-6">
              Tersedia
            </p>
            <button
              onClick={addToChartHandler}
              className="w-full bg-black text-white font-bold text-sm hover:text-gray-300 tracking-[.3rem] py-3 mb-6"
            >
              TAMBAH KE KERANJANG
            </button>
            <div className="flex justify-between font-secondary">
              <Link to="/help" className="underline underline-offset-1">
                Butuh Bantuan ?
              </Link>
              <Link to="/cart" className="underline underline-offset-1">
                Lihat keranjang
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <div className="h-16 opacity-0 md:hidden" />
      <ToastContainer />
    </>
  );
};

export default DetailPage;
