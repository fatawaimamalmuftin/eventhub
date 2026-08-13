import bookmark from '../assets/bookmark.svg'
import calendar from '../assets/calender.svg'
import location from '../assets/location.svg'
import users from '../assets/users.svg'

export default function CardEvent({ event }) {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white border-borderClr border-2 transition duration-300 hover:-translate-y-2">
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="h-56 w-full object-cover"
        />
        <div className="absolute bottom-4 left-4 flex gap-2">
          {event.categories.map((category,i) => (
            <span
              key={i}
              className="rounded-full bg-black/20 px-3 py-1 text-sm text-white"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5">

        <h2 className="mb-4 text-xl font-semibold">
          {event.title}
        </h2>
        <div className="mb-3 flex items-center gap-2 text-gray-500">
          <img alt='calendar' src={calendar} className="h-5 w-5" />
          <p>
            {event.date} · {event.time}
          </p>
        </div>
        <div className="mb-3 flex items-center gap-2 text-gray-500">
          <img alt='location' src={location} className="h-5 w-5" />
          <p>{event.location}</p>
        </div>
        <div className="mb-5 flex items-center gap-2 text-gray-500">
          <img alt='users' src={users} className="h-5 w-5" />
          <p>
            {event.attendees} / {event.capacity} attendees
          </p>
        </div>
        <div className="mb-5">

          <div className="mb-2 flex justify-between text-gray-500">
            <p>{event.attendees} attendees</p>
            <p>{event.capacity} capacity</p>
          </div>

          <div className="h-2 rounded-full bg-gray-100">
            <div
              className="h-2 rounded-full bg-green-500"
              style={{
                width: `${(event.attendees / event.capacity) * 100}%`,
              }}
            ></div>
          </div>

        </div>
        <div className="flex gap-2">

          <button className="btnBordColor w-full hover:hover">
            Join Event
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-xl border hover:bg-green-400  cursor-pointer">
            <img src={bookmark} className="h-5 w-5" />
          </button>

        </div>

      </div>
    </div>
  );
}