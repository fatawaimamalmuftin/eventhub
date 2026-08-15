import { Link } from "react-router"

export default function Login() {
  return (
    <main className="flex flex-col gap-5 py-18 px-30">
      <div>
        <div className="text-4xl font-bold mb-2">Welcome back</div>
        <div className="text-black/50 mb-5 flex items-center gap-2">Don't have an account?
          <Link className="text-orangeFigma" to={'/auth/registration'}>
          Sign up
          </Link>
        </div>
      </div>

      <div className="veryCenter gap-5 text-gray-600">
        <div className="veryCenter gap-2 myBorder px-22">
          <div className="text-xl font-bold">G</div>
          <div>Google</div>
        </div>

        <div className="veryCenter gap-2 myBorder px-22">
          <div className="text-xl font-bold">⌥</div>
          <div>GitHub</div>
        </div>
      </div>

      <div className="veryCenter w-full gap-5 text-gray-500">
        <div className="border w-full"></div>
        <div className="w-full">or continue with email</div>
        <div className="border w-full"></div>
      </div>

      <form className="flex flex-col gap-2">
        <label className="flex flex-col gap-2 font-semibold">
          Email address
          <input type="email" autoComplete="email" className="text-xl px-5 py-4 font-normal outline-white bg-gray-200 rounded-xl" placeholder="exemple@mail.com"/>
        </label>
        <p id="errEmail" className="text-xl h-6 font-medium text-red-400"></p>
        {/* Email is required */}

        <label className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="font-semibold">Password</span>
            <Link to={'/auth/forgotPassword'} className="text-orangeFigma font-semibold hover:text-green-500">
              Forgot password?
            </Link>
          </div>
          <input type="password" autoComplete="password" className="text-xl px-5 py-4 outline-white bg-gray-200 rounded-xl" placeholder="Input Here . . ."/>
        </label>
        <p id="errPass" className="text-xl h-6 font-medium text-red-400"></p>
        {/* Password is required */}

        <button className="btnBordColor w-full hover:bg-green-600 font-bold py-4 text-xl">Sign in</button>
      </form>

      <div className="veryCenter text-gray-400 gap-2">
        Just browsing?
        <Link to={'/'}>
        <span className="underline hover:text-orangeFigma">Continue as guest →</span>
        </Link>
      </div>
    </main>
  )
}
