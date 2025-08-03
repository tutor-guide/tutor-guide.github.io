export default function Home() {
  return (
    <>
      <h1 className="m-4 font-bold text-2xl my-2 text-[#9F5C5C]">
        精選導師
      </h1>
      {/* Gallery for 精選導師 */}
      <div
        className="flex overflow-x-auto gap-4 px-4 mb-8 snap-x snap-mandatory scrollbar-hide p-4"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <img src="/bin/tutor-1.png" alt="Tutor 1" className="border-2  rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="/bin/tutor-2.png" alt="Tutor 2" className="border-2  rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="/bin/tutor-3.png" alt="Tutor 3" className="border-2  rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="/bin/tutor-4.png" alt="Tutor 4" className="border-2  rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="/bin/tutor-5.png" alt="Tutor 5" className="border-2  rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="/bin/tutor-6.png" alt="Tutor 6" className="border-2  rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="/bin/tutor-7.png" alt="Tutor 7" className="border-2  rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="/bin/tutor-8.png" alt="Tutor 8" className="border-2  rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
      </div>

      <h1 className="m-4 font-bold text-2xl my-2 text-[#9F5C5C]">
        最新個案
      </h1>
      {/* Gallery for 最新個案 */}
      <div
        className="flex overflow-x-auto gap-4 px-4 mb-8 snap-x snap-mandatory scrollbar-hide p-4"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <img src="https://placehold.co/200x200?text=Case+1" alt="Case 1" className="rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="https://placehold.co/200x200?text=Case+2" alt="Case 2" className="rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="https://placehold.co/200x200?text=Case+3" alt="Case 3" className="rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="https://placehold.co/200x200?text=Case+4" alt="Case 4" className="rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="https://placehold.co/200x200?text=Case+5" alt="Case 5" className="rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="https://placehold.co/200x200?text=Case+6" alt="Case 6" className="rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="https://placehold.co/200x200?text=Case+7" alt="Case 7" className="rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="https://placehold.co/200x200?text=Case+8" alt="Case 8" className="rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
      </div>


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
