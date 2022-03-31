import CurrencyFormat from 'react-currency-format';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Flashsale = (props) => {
  const { id, image, name, sku, gender, estimatedMarketValue } = props;

  const price = (estimatedMarketValue * 14365 * 80) / 100;

  return (
    <div className="px-7 py-6 bg-white rounded-md">
      <img src={image} alt="" width={230} height={230} className="pb-5" />
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-xs font-normal">
          {gender} • {sku}
        </p>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-base font-medium">
          <span className="line-through text-xs">
            <CurrencyFormat
              displayType="text"
              prefix="Rp. "
              value={estimatedMarketValue * 14365}
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>{' '}
          <CurrencyFormat
            displayType="text"
            prefix="Rp. "
            value={price}
            thousandSeparator="."
            decimalSeparator=","
          />
        </p>
      </div>
      <div className="flex justify-end">
        <Link
          to={`/${id}`}
          className="w-[7.5] bg-black text-white font-bold text-sm hover:text-gray-300 tracking-[.3rem] px-7 py-2 flex justify-center items-center gap-2"
        >
          BELI <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Flashsale;
