import { Outlet } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {

  let location = useLocation()

  return (
    <>
    <Toaster/>
    <header className='px-10 py-5 bg-blue text-white'>
      <nav className='flex justify-between'>
        <h1 className='flex gap-3 items-center font-bubble text-xl'><img src='/logo/pokeball.svg' height={35} width={35} alt='logo'/> Pokédéx React</h1>
        <ul className='flex gap-4'>
          <li><Link to='/' className={`font-bubble text-xl ${location.pathname === '/' ? 'text-cyan' : ''}`}>Pokémons</Link></li>
          <li><Link to='/type' className={`font-bubble text-xl ${location.pathname === '/type' ? 'text-cyan' : ''}`}>Types</Link></li>
          <li><Link to='/bookmark' className={`font-bubble text-xl ${location.pathname === '/bookmark' ? 'text-cyan' : ''}`}>Favoris</Link></li>
        </ul>
      </nav>
    </header>
    <div className='w-full mb-20'>
      <img src='/banner/banner.webp' alt='banner' className='object-cover w-full'/>
    </div>
    <img src='/banner/pokemon_banner.webp' alt='Bannière logo pokemon' className="h-[87px] mb-20 mx-auto"/>
    <div className="py-5 px-2.5 lg:py-0 lg:px-0 md:max-w-[1023px] m-auto flex justify-center">
      <Outlet/>
    </div>
    </>
  );
}

export default App;
