import { useEffect, useState } from 'react'
import moon from '../assets/moon.svg'
import { NavLink } from 'react-router'
import ModalLogout from './ModalLogout'
import bel from '../assets/bel.svg'
import shild from '../assets/shild.svg'

export default function Navbar() {

    const [userLogind,setUserLogind] = useState(null)
    const [admin, setAdmin] = useState(null)
    const [show, setShow] = useState(false)
    const [showAdmin, setShowAdmin] = useState(false)
    const [adminNav, setAdminNav] = useState(false)

    useEffect(()=>{
        (async()=>{
            const admin = JSON.parse(localStorage.getItem("admin")||"null")
            if(admin){
                setAdminNav(true)
                setAdmin(admin)
                return 
            }
            
            const dataLocal = JSON.parse(localStorage.getItem("userLogind")||"null")
            setUserLogind(dataLocal)
        })()
    },[])

    const profile = userLogind? userLogind.fullName[0].toUpperCase() : ""

    const basePath = userLogind? `/${userLogind.fullName}` : admin? `/${admin.email}`: "/guest"

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
            {(userLogind || adminNav) &&
            <div>
                <NavLink 
                to={`${basePath}/explore`}
                className={({isActive})=>isActive? "btnBordColor py-1 px-2" : "hover:hover py-2 px-4"}
                >
                    Explore
                </NavLink>
            </div>
            }

            <div>
                <NavLink 
                to={basePath}
                end
                className={({isActive})=>isActive? "btnBordColor py-1 px-2" : "hover:hover py-2 px-4"}
                >
                    Event
                </NavLink>
            </div>
            
            <div>
                <NavLink 
                to={`${basePath}/comunities`}
                className={({isActive})=>isActive? "btnBordColor py-1 px-2" : "hover:hover py-2 px-4"}
                >
                    Communities
                </NavLink>
            </div>

            {(userLogind || admin) &&
                <div>
                    <NavLink 
                    to={`${basePath}/myevents`}
                    className={({isActive})=>isActive? "btnBordColor py-1 px-2" : "hover:hover py-2 px-4"}
                    >
                        My Events
                    </NavLink>
                </div>
                }
        </div>

        <div className='veryCenter ml-auto gap-5'>
            {userLogind?
            <>
            <img src={bel} alt="bel" className='h-5 w-5 cursor-pointer'/>
            </>
            :
            <div className={admin? `hidden` : `text-gray-400`}>
                Browsing as guest
            </div>
            }

            {admin &&
            <div className='veryCenter gap-2'>
                <div>
                    <img src={shild} alt="shild" className="w-5 h-5 cursor-pointer" />
                </div>

                <div className="text-gray-400 text-xl pt-1">
                    Admin
                </div>

                <div className='ml-6'>
                    <img src={bel} alt="bel" className="w-5 h-5 cursor-pointer" />
                </div>
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
            <button type="button" className={admin? `hidden` : `btnBordColor py-1 px-2 outline-none hover:hover`}>
                <NavLink to={'/login'}>
                    Sign In
                </NavLink>
            </button>
            }
            
            {admin && 
            <div className='relative' onClick={()=>setShowAdmin(true)}>
                <button className='relative w-10 h-10 outline-none rounded-full hover:rounded-4xl cursor-pointer overflow-hidden'
                type="button"
                >
                    <img src={admin.images} alt="profile" className="object-cover w-full h-full"/>
                </button>
                <ModalLogout show={showAdmin} setShow={setShowAdmin} admin={adminNav} setAdmin={setAdminNav}/>
            </div>
            }
        </div>
    </nav>
  )
}
