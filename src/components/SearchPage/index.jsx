import { useCallback, useEffect, useRef, useState } from 'react';
import { Loader } from '../../images';
import { getSearchShoesAPI } from '../../services/sneakers';
import Footer from '../Footer';
import Navbar from '../Navbar';
import SearchItem from './SearchItem';

const SearchPage = (props) => {
  const [query, setQuery] = useState('Adidas');
  const [shoes, setShoes] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const inputRef = useRef('');

  const getSearchShoes = useCallback(async (query) => {
    try {
      setIsLoading(true);
      const shoesResponse = await getSearchShoesAPI(query);
      setShoes(shoesResponse);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getSearchShoes(query);
  }, [getSearchShoes, query]);

  const submitHandler = (event) => {
    event.preventDefault();
    let enteredQuery = inputRef.current.value;

    setQuery(enteredQuery);

    inputRef.current.value = '';
  };

  console.log();

  return (
    <>
      <Navbar />
      <div className="md:p-10 p-4">
        <div className="flex flex-col justify-center items-center gap-4 mb-4 w-full">
          <h1 className="md:text-2xl text-lg font-bold">Cari: {query}</h1>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Cari..."
              ref={inputRef}
              className="focus:outline-none bg-[#ebedee] px-4 p-2"
            />
          </form>
        </div>
        <hr className="mb-4" />
        {isLoading ? (
          <div className="w-screen flex justify-center items-center">
            <img src={Loader} alt="Loading..." className="md:w-12 w-9" />
          </div>
        ) : (
          <div className="grid md:grid-cols-4 grid-cols-2 justify-center md:gap-5 gap-2">
            {shoes.map((shoe) => (
              <SearchItem
                key={shoe.id}
                id={shoe.id}
                gender={shoe.gender}
                sku={shoe.sku}
                image={shoe.image}
                name={shoe.name}
                estimatedMarketValue={shoe.estimatedMarketValue}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
      <div className="h-16 opacity-0 md:hidden" />
    </>
  );
};

export default SearchPage;
