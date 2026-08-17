
export default function CardFilterCompo({show}) {
    // console.log(show)
  return (
    <main className="absolute right-5 top-15 veryCenter justify-end gap-5 mt-5">
        {show.map((v,i)=>(
            <div key={i} value={v} className=" btnBordColor hover:hover">
                {v}
            </div>
        ))}
    </main>
  )
}
