import { useState } from "react"
import UserLogindContex from "./userLogindContext"

export default function UserLogindProvider({children}) {
    const [userLogind,setUserLogind] = useState(()=>({
        id: null,
        profile: null,
        fullName: null,
        email: null,
    }))

  return (
    <UserLogindContex.Provider
        value={{
            userLogind,
            setUserLogind
        }}
    >
        {children}
    </UserLogindContex.Provider>
  )
}
