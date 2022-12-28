import './Header.css'
import Botao from "../Botao/Botao"
import logo from '../../Assets/logo1.jpeg'
export default function header({ user, login, logout, ...props }) {

    return (
        <>
            <header className=''>
                <div className='w-full flex items-center justify-between bg-gray-900 px-2 shadow-2xl'>
                    <div className='gap-2 flex items-center p-2'>
                        <div className='flex logo'><img className='rounded-xl' src={logo}></img></div>
                        {user && <p className='text-white underline underline-offset-4'>Olá! {user.toUpperCase()}</p>}                        
                    </div>
                    
                    <ul className='menu flex gap-[2px] text-white items-center pr-2'>
                        <li><p className='cursor-pointer hover:text-yellow-300 hover:bg-gray-400 px-2 py-1 rounded-md' >Sobre</p></li>
                        <li><p className='cursor-pointer hover:text-yellow-300 hover:bg-gray-400 px-2 py-1 rounded-md' >Doar</p></li>
                        <li><p className='cursor-pointer hover:text-yellow-300 hover:bg-gray-400 px-2 py-1 rounded-md' >Contato</p></li>
                        {!user && <li><button onClick={() => { login() }} className='hover:text-yellow-300 hover:bg-gray-400 px-2 py-1 rounded-md' href='#'>Acessar</button></li>}
                        {user && <li><button onClick={() => { logout() }} className='hover:text-yellow-300 hover:bg-gray-400 px-2 py-1 rounded-md' href='#'>Sair</button>
                        </li>}
                    </ul>
                </div>
            </header>
        </>
    )

}