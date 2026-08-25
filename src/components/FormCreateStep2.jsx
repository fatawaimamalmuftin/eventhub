export default function FormCreateStep2({ page2, register }) {
  return (
    page2 && (
      <div className="w-full px-25 py-8">
        <div className="mb-7">
          <h2 className="text-2xl font-bold">
            Date, Location & Capacity
          </h2>
          <p className="text-gray-500">
            When and where is your event?
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <label className="block mb-2 text-gray-700">
              Event Date
            </label>

            <input
              type="date"
              {...register("eventDate")}
              className="w-full px-3 py-3 border border-gray-200 rounded-lg outline-none focus:border-orangeFigma"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-gray-700">
                Start Time
              </label>

              <input
                type="time"
                {...register("startTime")}
                className="w-full px-3 py-3 border border-gray-200 rounded-lg outline-none focus:border-orangeFigma"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700">
                End Time
              </label>

              <input
                type="time"
                {...register("endTime")}
                className="w-full px-3 py-3 border border-gray-200 rounded-lg outline-none focus:border-orangeFigma"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Event Format
            </label>

            <div className="flex w-fit p-1 bg-gray-100 rounded-lg">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  value="in_person"
                  {...register("eventFormat")}
                  className="hidden peer"
                />

                <div className="px-5 py-2 rounded-lg peer-checked:bg-white peer-checked:shadow-sm">
                  📍 In Person
                </div>
              </label>

              <label className="cursor-pointer">
                <input
                  type="radio"
                  value="online"
                  {...register("eventFormat")}
                  className="hidden peer"
                />

                <div className="px-5 py-2 rounded-lg text-gray-500 peer-checked:bg-white peer-checked:shadow-sm">
                  🖥️ Online
                </div>
              </label>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Location
            </label>

            <input
              type="text"
              placeholder="Bandung, West Java"
              {...register("location")}
              className="w-full px-3 py-3 border border-gray-200 rounded-lg outline-none placeholder:text-gray-400 focus:border-orangeFigma"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Capacity
            </label>

            <input
              type="number"
              placeholder="100"
              {...register("capacity")}
              className="w-full px-3 py-3 border border-gray-200 rounded-lg outline-none placeholder:text-gray-400 focus:border-orangeFigma"
            />
          </div>
        </div>
      </div>
    )
  );
}