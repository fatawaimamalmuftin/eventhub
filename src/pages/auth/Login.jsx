import { Link } from "react-router"

export default function Login() {
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
      <form className="flex flex-col gap-2">
        <label className="flex flex-col gap-2 font-semibold">
          Email address

          <input
            type="email"
            autoComplete="email"
            className="text-base sm:text-lg md:text-xl px-4 sm:px-5 py-3 sm:py-4 font-normal outline-white bg-gray-200 rounded-xl"
            placeholder="exemple@mail.com"
          />
        </label>

        <p
          id="errEmail"
          className="text-base sm:text-xl h-6 font-medium text-red-400"
        ></p>

        {/* Email is required */}

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
            type="password"
            autoComplete="current-password"
            className="text-base sm:text-lg md:text-xl px-4 sm:px-5 py-3 sm:py-4 outline-white bg-gray-200 rounded-xl"
            placeholder="Input Here . . ."
          />
        </label>

        <p
          id="errPass"
          className="text-base sm:text-xl h-6 font-medium text-red-400"
        ></p>

        {/* Password is required */}

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