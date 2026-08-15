import moon from '../assets/moon.svg'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <nav className="veryCenter gap-8 py-4 px-14 bg-whiteFigma shadow-xl sticky top-0 z-2">
        <div className='veryCenter gap-2'>
            <div className='btnBordColor w-7 h-7'>
                E
            </div>
            <div className='font-bold text-2xl'>
                EventHub
            </div>
        </div>

        <div className='veryCenter '>
            <div className='hover:hover py-1 px-2'>
                <Link to={'/'}>
                    Event
                </Link>
            </div>
            <div className='hover:hover py-1 px-2'>
                <Link to={'/guest/comunities'}>
                    Communities
                </Link>
            </div>
        </div>

        <div className='veryCenter ml-auto gap-4'>
            <div className='text-gray-400'>
                Browsing as guest
            </div>
            <div>
                <img src={moon} alt="moon" className="w-5 h-5" />
            </div>
            <button type="button" className=' btnBordColor py-1 px-2 outline-none hover:hover'>
                <Link to={'/login'}>
                    Sign In
                </Link>
            </button>
        </div>
    </nav>
  )
}
