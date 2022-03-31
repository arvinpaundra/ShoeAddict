import AOS from 'aos';
import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import ShoeItem from './ShoeItem';
import { VscArrowRight } from 'react-icons/vsc';
import { Adidas, Balenciaga, Converse, DelSol, Loader, NB, Nike, WhiteLoader } from '../../images';
import Flashsale from './Flashsale';
import { getAllShoesAPI, getBrandedShoesAPI } from '../../services/sneakers';
import Footer from '../Footer';

const Home = () => {
  const [shoesBranded, setShoesBranded] = useState([]);
  const [shoesAdidas, setShoesAdidas] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init();
  });

  const getAdidasShoes = useCallback(async () => {
    try {
      setIsLoading(true);
      const shoesResponse = await getBrandedShoesAPI('Adidas');
      setShoesAdidas(shoesResponse);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getFlashsaleShoes = useCallback(async () => {
    try {
      setIsLoading(true);
      const shoesResponse = await getBrandedShoesAPI('Nike');
      setShoesBranded(shoesResponse);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getAllShoes = useCallback(async () => {
    try {
      setIsLoading(true);
      const shoesResponse = await getAllShoesAPI();
      setShoes(shoesResponse);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getAdidasShoes();
    getAllShoes();
    getFlashsaleShoes();
  }, [getAdidasShoes, getAllShoes, getFlashsaleShoes]);

  return (
    <>
      <div>
        <Navbar />
        <div className="md:flex md:px-36 mb-4 gap-5 justify-around items-center bg-banner-home bg-hero-pattern">
          <div className="p-4 flex-none">
            <p className="italic font-light">The Limitless!</p>
            <h3 className="font-semibold md:text-5xl text-4xl">Jordan 13 Retro Del Sol</h3>
            <p className="text-lg font-light pb-7">White/University Red-Del Sol-Black</p>
            <Link
              to="/155d330f-0fb5-4509-8a21-b930b543665a"
              className="md:w-[50%] bg-black text-white hover:text-gray-300 text-sm tracking-[.3rem] font-bold px-[4.375rem] py-3.5 flex justify-center items-center gap-2"
            >
              DETAIL <VscArrowRight size={16} />
            </Link>
          </div>
          <img src={DelSol} alt="Jordan 13 Retro Del Sol" width={502} className="drop-shadow-3xl" />
        </div>
        <div className="md:px-4 mobile:px-4">
          {/* LOGO */}
          <div className="hidden h-[152] md:flex justify-evenly items-center mb-4">
            <img src={Nike} alt="Nike" width={80} />
            <img src={Adidas} alt="Adidas" width={80} />
            <img src={Balenciaga} alt="Balenciaga" width={80} />
            <img src={NB} alt="New Balance" width={80} />
            <img src={Converse} alt="Converse" width={100} />
          </div>

          {/* FLASHSALE */}
          <div className="bg-black p-4 rounded-lg mb-6">
            <div
              className="px-9 py-2 mb-4 tracking-widest font-bold text-lg rounded-[.625rem] text-black bg-white w-fit"
              data-aos="fade-up"
            >
              FLASHSALE
            </div>
            <div
              className={`${
                isLoading ? 'flex items-center' : 'md:grid md:grid-cols-4'
              } flex justify-center mb-6 md:gap-5 gap-2 overflow-x-auto`}
              data-aos="fade-up"
            >
              {isLoading ? (
                <img src={WhiteLoader} alt="Loading..." className="md:w-12 w-9" />
              ) : (
                shoesBranded
                  .map((flashsale) => (
                    <Flashsale
                      id={flashsale.id}
                      key={flashsale.id}
                      sku={flashsale.sku}
                      gender={flashsale.gender}
                      name={flashsale.name}
                      estimatedMarketValue={flashsale.estimatedMarketValue}
                      image={flashsale.image.thumbnail || flashsale.image.original}
                    />
                  ))
                  .splice(6, 4)
              )}
            </div>
          </div>

          {/* Kece bareng nike */}
          <section id="recom1">
            <h4 className="font-medium text-2xl mb-4" data-aos="fade-up">
              Kece Bareng Adidas
            </h4>
            <div
              className={`${
                isLoading ? 'flex items-center' : 'md:grid md:grid-cols-4'
              } flex justify-center mb-6 md:gap-5 gap-2 overflow-x-auto`}
              data-aos="fade-up"
            >
              {isLoading ? (
                <img src={Loader} alt="Loading..." className="md:w-12 w-9" />
              ) : (
                shoesAdidas
                  .map((adidas) => (
                    <ShoeItem
                      id={adidas.id}
                      key={adidas.id}
                      sku={adidas.sku}
                      gender={adidas.gender}
                      name={adidas.name}
                      estimatedMarketValue={adidas.estimatedMarketValue}
                      image={adidas.image.thumbnail || adidas.image.original}
                    />
                  ))
                  .splice(0, 4)
              )}
            </div>
          </section>

          {/* Sepatu populer */}
          <section id="recom2">
            <h4 className="font-medium text-2xl mb-4" data-aos="fade-up">
              Sepatu Populer
            </h4>
            <div
              className={`${
                isLoading ? 'flex items-center' : 'md:grid md:grid-cols-4'
              } flex justify-center mb-6 md:gap-5 gap-2 overflow-x-auto`}
              data-aos="fade-up"
            >
              {isLoading ? (
                <img src={Loader} alt="Loading..." className="md:w-12 w-9" />
              ) : (
                shoes
                  .filter((shoe) => shoe.estimatedMarketValue !== 0)
                  .map((shoe) => (
                    <ShoeItem
                      id={shoe.id}
                      key={shoe.id}
                      sku={shoe.sku}
                      gender={shoe.gender}
                      name={shoe.name}
                      estimatedMarketValue={shoe.estimatedMarketValue}
                      image={shoe.image.thumbnail}
                    />
                  ))
                  .splice(4, 4)
              )}
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <div className="h-16 opacity-0 md:hidden" />
    </>
  );
};

export default Home;
