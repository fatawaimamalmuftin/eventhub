export default function Forgot() {
  return (
    <main className="flex flex-col gap-2 py-8 px-5 sm:py-10 sm:px-10 md:px-16 lg:px-20 xl:px-30">
      <div>
        <div className="text-3xl sm:text-4xl font-bold mb-2">
          Reset your password
        </div>

        <div className="text-black/50 mb-5 flex items-center gap-2">
          Enter your email and we'll send a link.
        </div>
      </div>

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

        <button className="btnBordColor w-full hover:bg-green-600 font-bold py-3 sm:py-4 text-lg sm:text-xl">
          Send reset link
        </button>
      </form>
    </main>
  )
}