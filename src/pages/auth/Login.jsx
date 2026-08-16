import { Link,useNavigate } from "react-router"
import { useForm } from "react-hook-form"

export default function Login() {
  const {
    handleSubmit,
    register,
    formState:{errors},
    reset
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = (data) => {
    const dataLocal = JSON.parse(localStorage.getItem("users")||"[]")

    const isLogind = dataLocal.find((e)=> e.name === data.name && e.email === data.email)
    isLogind.isLogind = true

    localStorage.setItem("userLogind", JSON.stringify(isLogind))
    reset()
    navigate('/')
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
                  const dataLocal = JSON.parse(localStorage.getItem("users")||"[]")
                  const isRegis = dataLocal.some((u) => u.email.toLowerCase() === v.toLowerCase())
                  return isRegis || "This email not registered"
                }
              }
            })}
            type="email"
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
                  const isRegis = dataLocal.some((u) => u.email.toLowerCase() === fs.email?.toLowerCase() && u.password === v)
                  return isRegis || "This email or password not registered"
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