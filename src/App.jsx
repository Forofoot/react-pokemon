import { Outlet } from 'react-router-dom';
import './App.css';
import Pokemons from './containers/Pokemons';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <header className='px-10 py-5 bg-blue text-white'>
      <nav className='flex justify-between'>
        <h1 className='flex gap-3 items-center'><img src='/logo/pokeball.svg' height={35} width={35} alt='logo'/> Pokédéx React</h1>
        <ul className='flex gap-4'>
          <li><Link to='/'>Pokémons</Link></li>
          <li><Link to='/type'>Types</Link></li>
          <li><Link to='/bookmark'>Favoris</Link></li>
        </ul>
      </nav>
    </header>
    <div className='w-full mb-20'>
      <img src='/banner/banner.png' alt='banner' className='object-cover'/>
    </div>
    <div className="py-5 px-2.5 lg:py-0 lg:px-0 md:max-w-[1023px] m-auto flex justify-center">
      <Outlet/>
    </div>
    </>
  );
}

export default App;
