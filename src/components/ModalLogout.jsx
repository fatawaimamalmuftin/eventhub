import { useDispatch, useSelector } from "react-redux"
import { logout } from "../Redux/slice/userSlice.js"

export default function ModalLogout({ show, admin = null, setAdmin = null, comunities = null, setComunities = null }) {

    const userLogind = useSelector(
        (state) => state.userState.user
    )

    const dispatch = useDispatch()

    function handleLogout() {

        if (admin) {
            setAdmin(false)
            localStorage.removeItem("admin")
            window.location.reload()
            return
        }

        if (comunities) {
            setComunities(false)
            localStorage.removeItem("comunities")
            window.location.reload()
            return
        }

        const dataLocal = JSON.parse(localStorage.getItem("users") || "[]")

        const setData = dataLocal.map((user) => {

            if (user.id === userLogind.id) {

                return {
                    ...user,
                    cart: userLogind.cart
                }
            }
            return user
        })

        localStorage.setItem("users",JSON.stringify(setData))

        dispatch(logout())
    }

    return (
        <main
            className={` absolute top-15 right-15 max-w-84 overflow-hidden rounded-2xl border  border-black/10  bg-white shadow-xl ${!show && "hidden"}`}>
            {userLogind && (
                <div className="px-7 py-5">

                    <div className="text-2xl font-semibold whitespace-nowrap">
                        {userLogind.fullName}
                    </div>

                    <div className="text-lg text-gray-400">
                        {userLogind.email}
                    </div>

                </div>
            )}


            <div className="border-t border-gray-200 px-7 py-4 text-xl text-gray-700 hover:bg-gray-200 cursor-pointer whitespace-nowrap">

                {admin ? "Admin Dashboard" : "My Profile"}

            </div>


            <button
                className="w-full border-t border-gray-200 px-7 py-5 text-left text-xl text-red-500 hover:bg-red-300 hover:text-white cursor-pointer"
                onClick={handleLogout}
            >
                Sign Out
            </button>

        </main>
    )
}