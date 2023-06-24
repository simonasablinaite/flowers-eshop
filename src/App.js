import './style/home.css';

import { Routes, Route, NavLink, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <nav className='navigation'>
          <NavLink className='nav-item' to='/'>Home Page</NavLink>
        </nav>
      </header>

      <Routes>



        <Route path='*' element={<><h1>404 Error. Page Not Found</h1>  <Link to='/'>Go to Home Page</Link> </>} />
      </Routes>

    </div>
  );
}

export default App;
