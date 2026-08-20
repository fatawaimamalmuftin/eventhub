export default function CardFilterCompo({ show }) {
    const Category = show[0].Category
    const Location = show[1].Location
    const SortBy = show[2].SortBy

    return (
        <main className="grid grid-cols-2 gap-6 mt-5 border-b-2 border-gray-200 px-10 py-6">

            <div className="col-span-full flex flex-col gap-3">
                <div className="font-semibold text-gray-500 uppercase">
                    Category
                </div>

                <div className="flex gap-3">
                    {Category.map((e, i) => (
                        <button className="px-4 py-2 myBorder hover:btnBordColor whitespace-nowrap"
                            value={e}
                            key={i}
                        >
                            {e}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="font-semibold text-gray-500 uppercase">
                    Location
                </div>

                <div className="flex gap-3">
                    {Location.map((e, i) => (
                        <button className="px-4 py-2 myBorder hover:btnBordColor whitespace-nowrap"
                            value={e}
                            key={i}
                        >
                            {e}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="font-semibold text-gray-500 uppercase">
                    Sort By
                </div>

                <div className="flex gap-3">
                    {SortBy.map((e, i) => (
                        <button className="px-4 py-2 myBorder hover:btnBordColor whitespace-nowrap"
                            value={e}
                            key={i}
                        >
                            {e}
                        </button>
                    ))}
                </div>
            </div>

        </main>
    )
}