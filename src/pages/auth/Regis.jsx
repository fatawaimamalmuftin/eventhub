import { Link } from "react-router"

export default function Regis() {
  return (
    <main className="flex flex-col gap-2 py-8 px-5 sm:py-10 sm:px-10 md:px-16 lg:px-20 xl:px-30">
      <div>
        <div className="text-3xl sm:text-4xl font-bold mb-2">
          Create your account
        </div>

        <div className="text-black/50 mb-5 flex flex-wrap items-center gap-2">
          Already have an account?
          <Link className="text-orangeFigma" to={"/auth/login"}>
            Sign in
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
        {/* Full Name */}
        <label className="flex flex-col gap-2 font-semibold">
          Full name

          <input
            type="text"
            autoComplete="name"
            className="text-base sm:text-lg md:text-xl px-4 sm:px-5 py-3 sm:py-4 font-normal outline-white bg-gray-200 rounded-xl"
            placeholder="exemple name"
          />
        </label>

        <p
          id="errName"
          className="text-base sm:text-xl h-6 font-medium text-red-400"
        ></p>

        {/* Email */}
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

        {/* Password */}
        <label className="flex flex-col gap-2 font-semibold">
          Password

          <input
            type="password"
            autoComplete="new-password"
            className="font-normal text-base sm:text-lg md:text-xl px-4 sm:px-5 py-3 sm:py-4 outline-white bg-gray-200 rounded-xl"
            placeholder="At least 8 characters"
          />
        </label>

        <p
          id="errPass"
          className="text-base sm:text-xl h-6 font-medium text-red-400"
        ></p>

        {/* Confirm Password */}
        <label className="flex flex-col gap-2 font-semibold">
          Confirm Password

          <input
            type="password"
            autoComplete="new-password"
            className="font-normal text-base sm:text-lg md:text-xl px-4 sm:px-5 py-3 sm:py-4 outline-white bg-gray-200 rounded-xl"
            placeholder="Re-enter your password"
          />
        </label>

        <p
          id="errConfirmPass"
          className="text-base sm:text-xl h-6 font-medium text-red-400"
        ></p>

        {/* Terms */}
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            value={true}
            className="mt-1 shrink-0"
          />

          <span className="text-sm sm:text-base">
            I agree to the{" "}
            <Link className="text-orangeFigma">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link className="text-orangeFigma">
              Privacy Policy
            </Link>
          </span>
        </label>

        <p
          id="errTerms"
          className="text-base sm:text-xl h-6 font-medium text-red-400"
        ></p>

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