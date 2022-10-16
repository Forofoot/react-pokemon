import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react'
import Header from './components/Header';


function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <Toaster/>
      <Header modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
      <div className="py-5 px-2.5 lg:py-0 lg:px-0 md:max-w-[1023px] m-auto flex justify-center">
        <Outlet/>
      </div>
    </>
  );
}

export default App;
