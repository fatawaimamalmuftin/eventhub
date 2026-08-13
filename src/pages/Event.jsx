import search from '../assets/search.svg'
import filter from '../assets/filter.svg'
import CardEvents from '../components/CardEvent.jsx'
import Events from '../lib/dummy.js'

export default function Event() {
  return (
    <>
    <header className="veryCenter px-14 py-5 shadow-xl gap-4">
        <label className='veryCenter w-full bg-borderClr p-2 rounded-2xl'>
            <img src={search} alt="search" className='h-7 w-7'/>
            <input className='veryCenter px-2 py-1 outline-none w-full'
            type="text" placeholder='Search events...'/>
        </label>
        <div className='veryCenter gap-2 myBorder hover:hover hover:border-orangeFigma'>
            <img src={filter} alt="filter" className='w-5 h-5'/>
            <div>Filters</div>
        </div>
    </header>
    <main className="mainEvent">
        <div className='myBorder w-40 my-8 hover:hover'>
            <span className='font-bold'>10 </span><span>events found</span>
        </div>
        <div className='grid grid-cols-3 gap-3'>
            {Events.map((v)=>(<CardEvents key={v.id} event={v}></CardEvents>))}     
        </div>
        <div className='px-150'>
            <div className='myBorder mt-10 veryCenter hover:hover hover:border-orangeFigma'>
                Load more events
            </div>
        </div>
    </main>
    </>
  )
}
