import './style/home.css';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

import logo from './img/logo.png';
import ShopPage from './pages/ShopPage/ShopPage';
import OrderPage from './pages/OrderPage/OrderPage';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <nav className='navigation'>
          <NavLink className='nav-item' to='/'>Home Page</NavLink>
          <NavLink className='nav-item' to='/shop'>Shop</NavLink>
        </nav>

        <div className='img-wrapper'>
          <img className='logo' src={logo} alt="logo" />
          <p className='web-name'>Lillepood</p>
          <span className='logo-description'>.est 2007.</span>
        </div>

        <nav>
          <NavLink className='nav-item' to='/order-form'>Order</NavLink>

          <select className='choice-languages' name="languages" id="languages">
            <option value="lt">lt</option>
            <option value="en">en</option>
          </select>
        </nav>


      </header>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/order-form' element={<OrderPage />} />

        <Route path='*' element={<><h1>404 Error. Page Not Found</h1>  <Link to='/'>Go to Home Page</Link> </>} />
      </Routes>

    </div>
  );
}

export default App;
