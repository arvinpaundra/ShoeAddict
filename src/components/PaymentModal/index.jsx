import { useContext } from 'react';
import CurrencyFormat from 'react-currency-format';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import CartContext from '../../global/cart-context';
import 'react-toastify/dist/ReactToastify.min.css';

const Backdrop = (props) => {
  return (
    <div
      className="w-screen h-screen bg-black/75 fixed top-0 left-0 z-30"
      onClick={props.onClose}
    />
  );
};

const Overlays = (props) => {
  const cartCtx = useContext(CartContext);

  let navigate = useNavigate();

  const redirectHandler = () => {
    if (cartCtx.items.length === 0) {
      toast.error('Keranjang Anda masih kosong :(', {
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
    cartCtx.items = [];

    navigate('/', { replace: true });
  };

  return (
    <div className="fixed bg-[#ebedee] top-[20vh] left-[5%] w-[90%] max-h-[80vh] p-4 z-40">
      <h2 className="md:text-2xl text-xl font-semibold mb-4">KONFIRMASI PEMBAYARAN:</h2>
      <div className="bg-white p-4 mb-4 flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="font-light text-base">Nama Lengkap</p>
          <p className="font-light text-base text-right">Arvin Paundra Ardana</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="font-light text-base">Jumlah Produk</p>
          <p className="font-light text-base">{cartCtx.items.length}</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="font-light text-base">Pengiriman</p>
          <p className="font-light text-base text-right">Gratis</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="font-semibold text-base">Total Harga</p>
          <p className="font-semibold text-base text-right">
            <CurrencyFormat
              displayType="text"
              prefix="Rp. "
              value={cartCtx.totalAmount * 14365}
              thousandSeparator="."
              decimalSeparator=","
            />
          </p>
        </div>
      </div>
      <button
        onClick={redirectHandler}
        className="w-full bg-black text-white font-bold text-sm hover:text-gray-300 tracking-[.3rem] px-7 py-2 flex justify-center items-center gap-2"
      >
        KONFIRMASI
      </button>
      <ToastContainer />
    </div>
  );
};

const portalElement = document.getElementById('overlay');

const PaymentModal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(<Overlays />, portalElement)}
    </>
  );
};

export default PaymentModal;
