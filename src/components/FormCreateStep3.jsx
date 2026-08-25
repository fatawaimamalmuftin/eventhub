export default function FormCreateStep3({ page3, register }) {
  return (
    page3 && (
      <div className="w-full px-25 py-8">
        <div className="mb-7">
          <h2 className="text-2xl font-bold">
            Speakers & Review
          </h2>
          <p className="text-gray-500">
            Add speakers and confirm your event details.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <label className="block mb-2 text-gray-700">
              Speakers <span className="text-gray-400">(optional)</span>
            </label>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Speaker name and title"
                {...register("speaker")}
                className="w-full px-3 py-3 border border-gray-200 rounded-lg outline-none placeholder:text-gray-400 focus:border-orangeFigma"
              />

              <button
                type="button"
                className="px-5 py-2 border border-gray-200 rounded-lg hover:bg-gray-100"
              >
                Add
              </button>
            </div>

            <div className="flex gap-2 mt-2">
              <div className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                Abdul ×
              </div>

              <div className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                Andi ×
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex justify-between px-4 py-4 border-b border-gray-100">
              <span className="text-gray-500">
                Title
              </span>

              <span>
                Go Concurrency Workshop
              </span>
            </div>

            <div className="flex justify-between px-4 py-4 border-b border-gray-100">
              <span className="text-gray-500">
                Category
              </span>

              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                Technology
              </span>
            </div>

            <div className="flex justify-between px-4 py-4 border-b border-gray-100">
              <span className="text-gray-500">
                Date
              </span>

              <span>
                2026-08-12
              </span>
            </div>

            <div className="flex justify-between px-4 py-4 border-b border-gray-100">
              <span className="text-gray-500">
                Time
              </span>

              <span>
                12:12 – 14:14 WIB
              </span>
            </div>

            <div className="flex justify-between px-4 py-4 border-b border-gray-100">
              <span className="text-gray-500">
                Format
              </span>

              <span>
                Bandung
              </span>
            </div>

            <div className="flex justify-between px-4 py-4 border-b border-gray-100">
              <span className="text-gray-500">
                Capacity
              </span>

              <span>
                121 attendees
              </span>
            </div>

            <div className="flex justify-between px-4 py-4">
              <span className="text-gray-500">
                Speakers
              </span>

              <span>
                2 added
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  );
}