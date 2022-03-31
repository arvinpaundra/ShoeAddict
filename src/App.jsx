import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import DetailPage from './components/DetailPage';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import SearchPage from './components/SearchPage';
import CartProvider from './global/CartProvider';

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path=":shoeId" element={<DetailPage />} />
        {/* <Route path="/notfound-404" element={<ErrorPage />} /> */}
      </Routes>
    </CartProvider>
  );
};

export default App;
