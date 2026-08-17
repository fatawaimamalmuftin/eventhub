
export default function CardFilterCompo({show, setCategory}) {
    // console.log(show)
  return (
    <main className="absolute right-5 top-15 veryCenter justify-end gap-5 mt-5">
        {show.map((v,i)=>(
            <div className=" btnBordColor hover:hover"
            onClick={()=>setCategory(v)}
            key={i} 
            value={v}>
                {v}
            </div>
        ))}
    </main>
  )
}
