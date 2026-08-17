
export default function ModalLogout({show, setShow, admin = null, setAdmin = null}) {
    function handleLogout(){
        if(admin){
            setAdmin(false)
            localStorage.removeItem("admin")
            window.location.reload()
            return 
        }

        localStorage.removeItem("userLogind")
        window.location.reload()
    }

  return (
    <main className={`flex flex-col gap-5 absolute bg-white border-2 border-black/30 top-9 right-8 px-5 py-2 rounded-[16px_0_16px_16px] w-fit ${!show && "hidden"}`} >
        <div className="flex items-center justify-between border-b-2 border-gray-400 px-2">
            <div className="font-bold text-lg">Info</div>
            <div className="font-bold hover:text-red-500 cursor-pointer"
            onClick={(e)=>{e.stopPropagation(), setShow(false)}}
            >X</div>
        </div>
        <div className="veryCenter px-4 py-2 text-2xl text-orangeFigma hover:bg-gray-100 rounded-2xl cursor-pointer whitespace-nowrap">
            {admin? <div>Admin Dashboard</div> : <div>My Profile</div>}
        </div>
        <button className="btnBordColor font-semibold py-1 hover:bg-black/20 hover:text-red-500" 
        onClick={handleLogout}
        >Logout</button>
    </main>
  )
}
