import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';

const CheckoutItem = (props) => {
  const { id, image, name, size, colorway, estimatedMarketValue, qty, onRemove } = props;

  return (
    <li className="flex gap-4 w-full">
      <div className="bg-[#edebee] w-fit h-fit flex-none">
        <Link to={`/${id}`}>
          <img src={image} alt={name} className="md:w-40 w-20" />
        </Link>
      </div>
      <div className="flex flex-col content-start w-full md:gap-1">
        <Link to={`/${id}`} className="text-base font-semibold w-fit">
          {name}
        </Link>
        <p className="font-light text-sm font-secondary">Ukuran: {size}</p>
        <p className="font-light text-sm font-secondary">{colorway}</p>
        <p className="font-light text-sm font-secondary">Jumlah: {qty}</p>
        <p className="self-end font-light text-sm font-secondary">
          <CurrencyFormat
            thousandSeparator="."
            decimalSeparator=","
            displayType="text"
            prefix="Rp. "
            value={estimatedMarketValue * 14365}
          />
        </p>
        <p
          onClick={onRemove}
          className="font-light text-sm font-secondary hover:underline hover:underline-offset-2 w-fit hover:cursor-pointer"
        >
          Hapus
        </p>
      </div>
    </li>
  );
};

export default CheckoutItem;
