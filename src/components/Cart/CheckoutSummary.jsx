import { useContext } from 'react';
import CurrencyFormat from 'react-currency-format';
import CartContext from '../../global/cart-context';

const CheckoutSummary = (props) => {
  const cartCtx = useContext(CartContext);

  const { onClose } = props;

  return (
    <>
      <h2 className="md:text-2xl text-xl font-semibold mb-4">RINGKASAN PESANAN:</h2>
      <div className="bg-white p-4 mb-4 flex flex-col gap-2">
        <p className="font-light text-base">{cartCtx.items.length} Produk</p>
        <hr />
        <div className="flex justify-between">
          <p className="font-light text-base">Pengiriman</p>
          <p className="font-light text-base">Gratis</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="font-semibold text-base">Total Harga</p>
          <p className="font-semibold text-base">
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
        className="w-full bg-black text-white font-bold text-sm hover:text-gray-300 tracking-[.3rem] px-7 py-2 flex justify-center items-center gap-2"
        onClick={onClose}
      >
        BAYAR SEKARANG
      </button>
    </>
  );
};

export default CheckoutSummary;
