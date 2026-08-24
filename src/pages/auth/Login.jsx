import { Link,useNavigate } from "react-router"
import { useForm } from "react-hook-form"
// import { useContext } from "react"
// import userLogindContex from "../../context/userLogind/userLogindContext"
import { useDispatch } from "react-redux"
import { login } from "../../Redux/slice/userSlice.js"

export default function Login() {
  // const user = useContext(userLogindContex)
  const dispatch = useDispatch()

  const {
    handleSubmit,
    register,
    formState:{errors},
    reset
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = (data) => {
    if(data.email === import.meta.env.VITE_USERNAME && data.password === import.meta.env.VITE_PASSWORD){
      
      data.images = "https://i.pinimg.com/736x/19/ad/7e/19ad7edff92d85bf46b28cebd129060b.jpg"

      localStorage.setItem("admin",JSON.stringify(data))

      navigate('/')
      return
    }

    if(data.email === import.meta.env.VITE_COM_USERNAME && data.password === import.meta.env.VITE_COM_PASSWORD){
      
      data.images = "https://i.pinimg.com/736x/19/ad/7e/19ad7edff92d85bf46b28cebd129060b.jpg"

      localStorage.setItem("comunities",JSON.stringify(data))

      navigate('/')
      return
    }

    const dataLocal = JSON.parse(localStorage.getItem("users")||"[]")
    
    const isLogind = dataLocal.find((e)=> e.email === data.email)

    dispatch(login(isLogind))

    reset()

    navigate('/')

    // const isLogind = dataLocal.find((e)=> e.name === data.name && e.email === data.email)
    // isLogind.isLogind = true

    // user.setUserLogind({
    //     id: isLogind.id,
    //     fullName: isLogind.fullName,
    //     email: isLogind.email,
    // })

    // localStorage.setItem("userLogind", JSON.stringify(isLogind))
    // reset()
    // navigate('/')
  }

  return (
    <main className="flex flex-col gap-5 py-8 px-5 sm:py-10 sm:px-10 md:px-16 lg:px-20 xl:px-30">
      <div>
        <div className="text-3xl sm:text-4xl font-bold mb-2">
          Welcome back
        </div>

        <div className="text-black/50 mb-5 flex flex-wrap items-center gap-2">
          Don't have an account?
          <Link className="text-orangeFigma" to={"/auth/registration"}>
            Sign up
          </Link>
        </div>
      </div>

      {/* Social Login */}
      <div className="veryCenter flex-col sm:flex-row gap-3 sm:gap-5 text-gray-600">
        <div className="veryCenter gap-2 myBorder w-full sm:w-auto px-5 sm:px-12 md:px-16 lg:px-22 py-3">
          <div className="text-xl font-bold">G</div>
          <div>Google</div>
        </div>

        <div className="veryCenter gap-2 myBorder w-full sm:w-auto px-5 sm:px-12 md:px-16 lg:px-22 py-3">
          <div className="text-xl font-bold">⌥</div>
          <div>GitHub</div>
        </div>
      </div>

      {/* Divider */}
      <div className="veryCenter w-full gap-3 sm:gap-5 text-gray-500">
        <div className="border w-full"></div>

        <div className="whitespace-nowrap text-sm sm:text-base">
          or continue with email
        </div>

        <div className="border w-full"></div>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="flex flex-col gap-2 font-semibold">
          Email address

          <input
            {...register("email",{
              required: "Email is required",
              validate:{
                isRegisted : (v) => {
                  if(v === import.meta.env.VITE_USERNAME || v === import.meta.env.VITE_COM_USERNAME){
                    return true
                  } else if (!(v.includes("@"))) {
                    return "there must be an @ character"
                  } else {
                    const dataLocal = JSON.parse(localStorage.getItem("users")||"[]")
                    const isRegis = dataLocal.some((u) => u.email.toLowerCase() === v.toLowerCase())
                    return isRegis || "This email not registered"
                  }
                }
              }
            })}
            type="text"
            autoComplete="email"
            className={`border-2 outline-none text-base sm:text-lg md:text-xl px-4 sm:px-5 py-3 sm:py-4 font-normal ${errors.email ? "border-red-500":"border-white"} bg-gray-200 rounded-xl`}
            placeholder="exemple@mail.com"
          />
        </label>

        <p className="text-base sm:text-xl h-6 font-medium text-red-400"
        >{errors.email?.message}</p>

        <label className="flex flex-col gap-2">
          <div className="flex flex-wrap justify-between gap-2">
            <span className="font-semibold">
              Password
            </span>

            <Link
              to={"/auth/forgotPassword"}
              className="text-orangeFigma font-semibold hover:text-green-500"
            >
              Forgot password?
            </Link>
          </div>

          <input
            {...register('password',{
              required: "Password is required",
              minLength:{
                value:6,
                message: "password minimum 6 characters"
              },
              validate: {
                isCorrect : (v,fs) => {
                  const dataLocal = JSON.parse(localStorage.getItem("users")||"[]")
                  if(v === import.meta.env.VITE_PASSWORD || v === import.meta.env.VITE_COM_PASSWORD){
                    return true
                  }else{
                    const isRegis = dataLocal.some((u) => u.email.toLowerCase() === fs.email?.toLowerCase() && u.password === v)
                    return isRegis || "This email or password not registered"
                  }
                }
              }
            })}
            type="password"
            autoComplete="current-password"
            className={`border-2 outline-none text-base sm:text-lg md:text-xl px-4 sm:px-5 py-3 sm:py-4 ${errors.password? "border-red-500":"border-white"} bg-gray-200 rounded-xl`}
            placeholder="Input Here . . ."
          />
        </label>

        <p className="text-base sm:text-xl h-6 font-medium text-red-400"
        >{errors.password?.message}</p>

        <button className="btnBordColor w-full hover:bg-green-600 font-bold py-3 sm:py-4 text-lg sm:text-xl">
          Sign in
        </button>
      </form>

      {/* Guest */}
      <div className="veryCenter flex-wrap text-center text-gray-400 gap-2">
        Just browsing?

        <Link to={"/"}>
          <span className="underline hover:text-orangeFigma">
            Continue as guest →
          </span>
        </Link>
      </div>
    </main>
  )
}