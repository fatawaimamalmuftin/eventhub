import moon from '../assets/moon.svg'

export default function Navbar() {
  return (
    <nav className="veryCenter gap-8 py-4 px-8 bg-whiteFigma shadow-xl">
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
                Event
            </div>
            <div className='hover:hover py-1 px-2'>
                Communities
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
                Sign In
            </button>
        </div>
    </nav>
  )
}
