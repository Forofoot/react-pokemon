import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Modal from 'react-modal'
import Form from "./Form";

Modal.setAppElement(document.getElementById('root'));

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    
    },
};

export default function Header({modalIsOpen, setIsOpen}){

    let location = useLocation()

    const openModal = (e) => {
        e.preventDefault()
        setIsOpen(true);
    }

    const closeModal = (e) => {
        e.preventDefault()
        setIsOpen(false);
    }
    return(
        <>
            <header className='px-10 py-5 bg-blue text-white'>
                <nav className='flex-col items-center gap-4 flex md:flex-row md:justify-between'>
                    <h1 className='flex gap-3 items-center font-bubble text-xl'><img src='/logo/pokeball.svg' height={35} width={35} alt='logo'/> Pokédéx React</h1>
                    <ul className='flex gap-4'>
                        <li><Link to='/' className={`font-bubble text-xl ${location.pathname === '/' ? 'text-cyan' : ''}`}>Pokémons</Link></li>
                        <li><Link to='/type' className={`font-bubble text-xl ${location.pathname === '/type' ? 'text-cyan' : ''}`}>Types</Link></li>
                        <li><Link to='/bookmark' className={`font-bubble text-xl ${location.pathname === '/bookmark' ? 'text-cyan' : ''}`}>Favoris</Link></li>
                        <li><button className="font-bubble text-xl" onClick={(e) => openModal(e)}>Contact</button></li>
                    </ul>
                </nav>
            </header>
            <div className='w-full hidden md:block'>
                <img src='/banner/banner.webp' alt='banner' className='object-cover w-full'/>
            </div>
            <img src='/banner/pokemon_banner.webp' alt='Bannière logo pokemon' className="h-[87px] my-5 md:my-20 mx-auto"/>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <Form setIsOpen={setIsOpen} closeModal={closeModal}/>
            </Modal>
        
        </>
    )
}