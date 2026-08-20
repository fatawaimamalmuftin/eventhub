import { useEffect, useState } from "react"

export default function ModalLogout({ show, admin = null, setAdmin = null }) {

    const [userLogind, setUserLogind] = useState(null)

    useEffect(() => {
        (async()=>{
            const data = JSON.parse(localStorage.getItem("userLogind") || "null")
            setUserLogind(data)
        })()
    }, [])

    function handleLogout() {
        if (admin) {
            setAdmin(false)
            localStorage.removeItem("admin")
            window.location.reload()
            return
        }

        localStorage.removeItem("userLogind")
        window.location.reload()
    }

    return (
        <main
            className={`
                absolute
                top-11
                right-0
                max-w-84
                overflow-hidden
                rounded-2xl
                border
                border-black/10
                bg-white
                shadow-xl
                ${!show && "hidden"}
            `}
        >

            {userLogind && (
                <div className="px-7 py-5">
                    <div className="text-2xl font-semibold">
                        {userLogind.fullName}
                    </div>

                    <div className="text-lg text-gray-400">
                        {userLogind.email}
                    </div>
                </div>
            )}

            <div className="border-t border-gray-200 px-7 py-4 text-xl text-gray-700 hover:bg-gray-200 cursor-pointer">
                {admin ? "Admin Dashboard" : "My Profile"}
            </div>

            <button className="w-full border-t border-gray-200 px-7 py-5 text-left text-xl text-red-500 hover:bg-red-300 hover:text-white cursor-pointer"
                onClick={handleLogout}
            >
                Sign Out
            </button>

        </main>
    )
}