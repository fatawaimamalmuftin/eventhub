import search from "../../assets/search.svg";
import filter from "../../assets/filter.svg";
import CardEvents from "../../components/CardEvent.jsx";
// import Events from "../../lib/dummyEvent.js";
import { useState, useEffect, useContext } from "react";
import Modal from "../../components/Modal.jsx";
import CardFilterCompo from '../../components/CardFilterCompo.jsx'
import EventDetail from "../../components/EventDetail.jsx";
import selectedContext from "../../context/selected/selectedContext.js";
import { useDispatch, useSelector } from "react-redux";
import { getEventThunk } from "../../Redux/slice/eventSlice.js";

export default function Event() {
    const dispatch = useDispatch()

    const Events = useSelector(
        (state)=> state.eventState.events
    )

    const isPending = useSelector(
        (state)=> state.eventState.isPending
    )

    useEffect(()=>{
        dispatch(getEventThunk())     
    },[dispatch])

    const [isShow,setIsShow] = useState(false)
    const [searchEvent,setSearchEvent] = useState("")
    const [category,setCategory] = useState("")
    const [locations,setLocations] = useState("")
    const [,setSortBy] = useState("")
    const [filterTogle,setFilterTogel] = useState(false)
    const [showMore, setShowMore] = useState(false)
    const [showDetail, setShowDetail] = useState(false)
    const selectedData = useContext(selectedContext)

    useEffect(() => {
        if (showDetail) {
            window.scrollTo({top: 0})
        }
    }, [showDetail,selectedData])

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

        const matchSearch = e.title
            .toLowerCase()
            .includes(searchValue)

        const matchCategory =
            category === "" ||
            e.categories.some(
                (item) => item.toLowerCase() === category.toLowerCase()
            )

        const matchLocation =
            locations === "" ||
            e.location.toLowerCase() === locations.toLowerCase()

        return matchSearch && matchCategory && matchLocation
    })

    const dataEvent = showDetail ? filterEvent.slice(0, 3) : showMore ? filterEvent.slice(0, 6) : filterEvent

  return (
    <>
    <Modal show={isShow} setShow={setIsShow}/>
    
    <header className={`veryCenter px-14 py-5 shadow-xl gap-4 ${showDetail && "hidden"}`}>
        <label className={`veryCenter w-full bg-borderClr p-2 rounded-2xl ${showDetail && "hidden"}`}>
            <img src={search} alt="search" className={`${showDetail && "hidden"} h-7 w-7`}/>
            <input className={`${showDetail && "hidden"} veryCenter px-2 py-1 outline-none w-full`}
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
            <CardFilterCompo 
            show={filters} 
            category={category}
            setCategory={setCategory}
            locations={locations}
            setLocations={setLocations}
            setSortBy={setSortBy}
            />
        </section>
        }
        
        <EventDetail showDetail={showDetail} setShowDetail={setShowDetail}/>

    <main className="mainEvent">
        <div className={`myBorder w-40 mb-5 hover:hover ${showDetail && "hidden"}`}>
            <span className='font-bold'>{dataEvent.length} </span><span>events found</span>
        </div>
        {isPending ?

            <div className="veryCenter h-screen w-screen">
                <p>Loading...</p>
            </div>

            :

            <div className='grid md:grid-cols-3 gap-3 grid-rows-1'>
                {dataEvent.map((v)=>(
                    <CardEvents 
                        key={v.id} 
                        event={v} 
                        isShow={setIsShow}
                        setShowDetail={setShowDetail}
                    />))}     
            </div>
        }
        <div className='veryCenter'>
                <button className={`myBorder mt-10 w-fit veryCenter hover:hover hover:border-orangeFigma ${showDetail && "hidden"}`}
                onClick={()=>showMore? setShowMore(false) : setShowMore(true)}
                >
                    {showMore? "Load more events" : "show less data"}
                </button>
        </div>
    </main>
    </>
  )
}
