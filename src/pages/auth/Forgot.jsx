import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { changePassword } from "../../Redux/slice/usersSlice"
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

export default function Forgot() {
  const dispatch = useDispatch()

  const users = useSelector(
    (state) => state.usersState.users
  )

  const [stage1, setStage1] = useState(true)
  const [stage2, setStage2] = useState(false)
  const [userFound, setUserFound] = useState(null)
  const [eye, setEye] = useState("close")

  const {
    register,
    formState:{errors},
    handleSubmit,
    reset,
    setError
  } = useForm()

 const onSubmit = (data) => {
      if (stage1) {
          const result = users.find((e) => {
              return e.email.toLowerCase() === data.email.toLowerCase()
          })

          if (result) {
              setUserFound({id: result.id})
              setStage2(true)
              setStage1(false)
              reset()
          } else {
              setError("email", {
                  type: "manual",
                  message: "Email is not registered."
              })
          }

          return
      }

      if (stage2) {
        if (!userFound) return
        const updatedUser = { ...userFound, password: data.password }
        dispatch(changePassword(updatedUser))
        reset()
        setStage2(false)
      }
  }

  return (
    (stage1 || stage2) ? (
      <main className="flex flex-col gap-2 py-8 px-5 sm:py-10 sm:px-10 md:px-16 lg:px-20 xl:px-30">
        <div>
          <div className="text-3xl sm:text-4xl font-bold mb-2">
            Reset your password
          </div>

          <div className="text-black/50 mb-5 flex items-center gap-2">
            Enter your email and we'll send a link.
          </div>
        </div>

        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          {stage1 && (
            <>
              <label className="flex flex-col gap-2 font-semibold">
                Email address
                <input
                  {...register("email", {
                    required: "Enter your email to check activity."
                  })}
                  type="email"
                  autoComplete="email"
                  className={`border-2 outline-none text-base sm:text-lg md:text-xl px-4 sm:px-5 py-3 sm:py-4 font-normal outline-white bg-gray-200 rounded-xl ${errors.email ? "border-red-500" : "border-white"}`}
                  placeholder="exemple@mail.com"
                />
              </label>

              <p className="text-base sm:text-xl h-6 font-medium text-red-400">
                {errors.email?.message}
              </p>
            </>
          )}

          {stage2 && (
            <>
              <label className="flex flex-col gap-2 font-semibold"
              htmlFor="password">
                Change Password
              </label>
              <div className={`veryCenter border-2 bg-gray-200 rounded-xl ${errors.password ? "border-red-500" : "border-white"} pr-4`}>
                <input
                    {...register("password", {
                      required: "Enter a new password.",
                      minLength: {
                        value: 6,
                        message: "password minimum 6 characters"
                      }
                    })}
                    type={eye === "close" ? "password" : "text"}
                    autoComplete="password"
                    className={`w-full outline-none text-base sm:text-lg md:text-xl px-4 sm:px-5 py-3 sm:py-4 font-normal outline-white`}
                    placeholder="Input here . . ."
                  />

                  <div className="text-orangeFigma"
                  onClick={()=>eye === "close" ? setEye("opem") : setEye("close")}>
                    {eye === "close" ? <FaEyeSlash size={30}/> : <FaEye size={30}/>}
                  </div>
              </div>

              <p className="text-base sm:text-xl h-6 font-medium text-red-400">
                {errors.password?.message}
              </p>
            </>
          )}

          <button className="btnBordColor w-full hover:hover font-bold py-3 sm:py-4 text-lg sm:text-xl">
            Send reset link
          </button>
        </form>
      </main>
    ):(
      <main className="w-full h-full veryCenter flex-col gap-5 font-bold text-2xl">
        <div className="text-2xl rounded-full bg-green-200 text-green-500 p-5">
          <FaCheck size={50}/>
        </div>
        <div>
          Password has changed        
        </div>
        <Link className="font-normal text-xl text-orangeFigma hover:hover px-2 py-1"
        to="/login">
          Back to sign in
        </Link>
      </main>
    )
  ) 
}