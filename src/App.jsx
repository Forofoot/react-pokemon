import { Outlet } from 'react-router-dom';
import './App.css';
import Pokemons from './containers/Pokemons';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <header className='px-10 py-5'>
      <nav>
        <ul className='flex gap-4'>
          <li><Link to='/'>Accueil</Link></li>
          <li><Link to='/type'>Type</Link></li>
          <li><Link to='/bookmark'>Favoris</Link></li>
        </ul>
      </nav>
    </header>
    <div className="py-5 px-2.5 md:py-10 md:px-5">
      <Outlet/>
    </div>
    </>
  );
}

export default App;
