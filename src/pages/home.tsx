export default function Home() {
  return (
    <>
      <h1 className="m-4 font-bold text-2xl my-2 text-[#9F5C5C]">
        Tutor Guide 為學生及家長配對最適合的導師
      </h1>
      <div className="grid md:grid-cols-2 gap-8 m-4">
        <div className="h-52  drop-shadow-lg bg-[#FFF4E2] rounded-lg text-center border text-[#9b6f39]">
          <i className="fa-solid fa-hourglass-half fa-6x my-8"></i>
          <div className="text-xl font-bold">極速配對個案</div>
        </div>
        <div className="h-52 drop-shadow-lg bg-[#FFF4E2] rounded-lg text-center border text-[#9b6f39]">
          <i className="fa-solid fa-user fa-6x my-8"></i>
          <div className="text-xl font-bold">真人客服，線上即時回覆</div>
        </div>
        <div className="h-52 drop-shadow-lg bg-[#FFF4E2] rounded-lg text-center border text-[#9b6f39]">
          <i className="fa-solid fa-sack-dollar fa-6x my-8"></i>
          <div className="text-xl font-bold">家長/學生揾導師 零手續費</div>
        </div>
        <div className="h-52 drop-shadow-lg bg-[#FFF4E2] rounded-lg text-center border text-[#9b6f39]">
          <i className="fa-solid fa-shapes fa-6x my-8"></i>
          <div className="text-xl font-bold">多元化導師</div>
        </div>
      </div>
    </>
  );
}
