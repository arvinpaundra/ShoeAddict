import CurrencyFormat from 'react-currency-format';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { J4 } from '../../images';

const SearchItem = (props) => {
  const { id, image, gender, sku, estimatedMarketValue, name } = props;

  return (
    <div className="px-7 py-6 bg-[#ebedee] rounded-md flex flex-col items-center">
      <img src={image.thumbnail || J4} alt="" width={200} height={200} className="pb-5" />
      <div className="flex flex-col flex-1 w-full">
        <div className="flex flex-col gap-2 mb-4">
          <p className="text-xs font-normal">
            {gender} • {sku}
          </p>
          <p className="md:text-sm text-sm font-medium">{name}</p>
          <p className="text-base font-medium">
            <CurrencyFormat
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              prefix="Rp. "
              value={estimatedMarketValue * 14365}
            />
          </p>
        </div>
        <div className="flex self-end">
          <Link
            to={`/${id}`}
            className="md:w-[7.5] w-fit bg-black text-white font-bold text-sm hover:text-gray-300 tracking-[.3rem] px-7 py-2 flex justify-center items-center gap-2"
          >
            BELI <HiArrowNarrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
