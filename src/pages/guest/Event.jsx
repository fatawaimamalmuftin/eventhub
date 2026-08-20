import search from "../../assets/search.svg";
import filter from "../../assets/filter.svg";
import CardEvents from "../../components/CardEvent.jsx";
import Events from "../../lib/dummyEvent.js";
import { useState } from "react";
import Modal from "../../components/Modal.jsx";
import CardFilterCompo from '../../components/CardFilterCompo.jsx'

export default function Event() {
    const [isShow,setIsShow] = useState(false)
    const [searchEvent,setSearchEvent] = useState("")
    const [category,setCategory] = useState("")
    const [filterTogle,setFilterTogel] = useState(false)
    const [showMore, setShowMore] = useState(false)

    const filters = [
        {
            Category : ["All","Technology","Design","Business","Career","Ai","Programming","Music"]
        },
        {
            Location : ["All Location", "Bandung", "Jakarta", "Surabaya", "Yogyakarta", "Online"]
        },
        {
            SortBy : ["Upcoming","Most Popular", "Almost Full","Recently Added"]
        }
    ]

    const filterEvent = Events.filter((e) => {
        const searchValue = searchEvent.toLowerCase()

        const matchSearch =
            e.title.toLowerCase().includes(searchValue) ||
            e.location.toLowerCase().includes(searchValue)

        const matchCategory =
            category === "" ||
            e.filters.some((c) => c.toLowerCase() === category.toLowerCase())

        return matchSearch && matchCategory
    })

    const dataEvent = showMore? filterEvent.slice(0,6) : filterEvent
        

  return (
    <>
    <Modal show={isShow} setShow={setIsShow}/>
    
    <header className="veryCenter px-14 py-5 shadow-xl gap-4">
        <label className='veryCenter w-full bg-borderClr p-2 rounded-2xl'>
            <img src={search} alt="search" className='h-7 w-7'/>
            <input className='veryCenter px-2 py-1 outline-none w-full'
            value={searchEvent}
            onChange={(e)=>setSearchEvent(e.target.value)}
            type="text" placeholder='Search events...'/>
        </label>
        {filterTogle?
        <button className='veryCenter gap-2 myBorder hover:hover hover:border-orangeFigma'
        onClick={()=>setFilterTogel(false)}
        >
            <div>X</div>
            <div>Filters</div>
        </button>
                
        :
        <button className='veryCenter gap-2 myBorder hover:hover hover:border-orangeFigma'
        onClick={()=>setFilterTogel(true)}
        >
            <img src={filter} alt="filter" className='w-5 h-5'/>
            <div>Filters</div>
        </button>
        }
        
    </header>

        {filterTogle &&
        <section className="veryCenter">
            <CardFilterCompo show={filters} setCategory={setCategory}/>
        </section>
        }

    <main className="mainEvent">
        <div className='myBorder w-40 mb-5 hover:hover'>
            <span className='font-bold'>{dataEvent.length} </span><span>events found</span>
        </div>
        <div className='grid grid-cols-3 gap-3'>
            {dataEvent.map((v)=>(
                <CardEvents 
                    key={v.id} 
                    event={v} 
                    isShow={setIsShow}
                />))}     
        </div>
        <div className='veryCenter'>
                <button className='myBorder mt-10 w-fit veryCenter hover:hover hover:border-orangeFigma'
                onClick={()=>showMore? setShowMore(false) : setShowMore(true)}
                >
                    {showMore? "Load more events" : "show less data"}
                </button>
        </div>
    </main>
    </>
  )
}
