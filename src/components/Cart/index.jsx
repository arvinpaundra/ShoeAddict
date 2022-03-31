import { useContext, useState } from 'react';
import CartContext from '../../global/cart-context';
import Footer from '../Footer';
import Navbar from '../Navbar';
import PaymentModal from '../PaymentModal';
import CheckoutItem from './CheckoutItem';
import CheckoutSummary from './CheckoutSummary';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const hasItem = cartCtx.items.length === 0;

  const checkoutItems = (
    <ul className="md:grow md:w-3/5 md:mb-0 mb-6 flex flex-col gap-4">
      {hasItem && <p>Keranjangmu masih kosong.</p>}
      {cartCtx.items.map((item) => (
        <CheckoutItem
          key={item.id}
          id={item.id}
          image={item.image}
          size={item.size}
          name={item.name}
          colorway={item.colorway}
          estimatedMarketValue={item.estimatedMarketValue}
          qty={item.qty}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <>
      {showModal && <PaymentModal onClose={onShowModal} />}
      <Navbar />
      <div className="md:px-10 md:py-6 px-4 py-6 mb-4">
        <h2 className="md:text-2xl text-xl font-semibold mb-4">Keranjang belanja Anda:</h2>
        <div className="md:flex md:gap-16">
          {/* Items */}
          {checkoutItems}

          {/* Summary */}
          <div className="md:grow md:w-2/5 h-fit p-4 bg-[#edebee] md:sticky md:top-20 mb-4">
            <CheckoutSummary onClose={onShowModal} />
          </div>
        </div>
      </div>
      <Footer />
      <div className="h-16 opacity-0 md:hidden" />
    </>
  );
};

export default Cart;
