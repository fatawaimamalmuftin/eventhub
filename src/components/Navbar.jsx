import { useEffect, useState } from 'react'
import moon from '../assets/moon.svg'
import { NavLink } from 'react-router'
import ModalLogout from './ModalLogout'
import bel from '../assets/bel.svg'

export default function Navbar() {

    const [userLogind,setUserLogind] = useState(null)
    const [show, setShow] = useState(false)

    useEffect(()=>{
        (async()=>{
            const dataLocal = JSON.parse(localStorage.getItem("userLogind")||"null")
            setUserLogind(dataLocal)
        })()
    },[])

    const profile = userLogind? userLogind.fullName[0].toUpperCase() : ""

    

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
            {userLogind &&
            <div className="hover:hover py-2 px-4">
                    Explore
            </div>
            }

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

            {userLogind &&
            <div className="hover:hover py-2 px-4">
                    My Events
            </div>
            }
        </div>

        <div className='veryCenter ml-auto gap-5'>
            {userLogind?
            <img src={bel} alt="bel" className='h-5 w-5 cursor-pointer'/>
            :
            <div className='text-gray-400'>
                Browsing as guest
            </div>
            }
            <div>
                <img src={moon} alt="moon" className="w-5 h-5 cursor-pointer" />
            </div>
            {userLogind? 
            <div className='relative' onClick={()=>setShow(true)}>
                <button className='relative btnBordColor py-1 px-2 w-10 h-10 outline-none hover:hover rounded-4xl text-2xl hover:rounded-4xl'
                type="button"
                >
                    {profile}
                </button>
                <ModalLogout show={show} setShow={setShow}/>
            </div>
            :
            <button type="button" className=' btnBordColor py-1 px-2 outline-none hover:hover'>
                <NavLink to={'/login'}>
                    Sign In
                </NavLink>
            </button>
            }
        </div>
    </nav>
  )
}
