import moon from '../assets/moon.svg'
import { NavLink } from 'react-router'

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

        <div className='veryCenter gap-4'>
            <div>
                <NavLink 
                to={'/guest'}
                end
                className={({isActive})=>isActive? "btnBordColor py-1 px-2" : "hover:hover py-2 px-4"}
                >
                    Event
                </NavLink>
            </div>
            <div>
                <NavLink 
                to={'/guest/comunities'}
                className={({isActive})=>isActive? "btnBordColor py-1 px-2" : "hover:hover py-2 px-4"}
                >
                    Communities
                </NavLink>
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
                <NavLink to={'/login'}>
                    Sign In
                </NavLink>
            </button>
        </div>
    </nav>
  )
}
