import * as React from "react";
import TutorDetails from "../custom-element/tutorDetails";

interface Tutor {
  name: string;
  photo: string;
  subjects: string[];
  description: string;
  experience: string;
  rating?: number;
}

const tutors: Tutor[] = [
  {
    name: "陳老師",
    photo: "/bin/tutor-1.png",
    subjects: ["數學", "物理"],
    description: "擁有10年教學經驗，專注於中學數理科。",
    experience: "前中學教師，現全職補習導師。",
    rating: 4.8,
  },
  {
    name: "李老師",
    photo: "/bin/tutor-2.png",
    subjects: ["英文", "通識"],
    description: "善於啟發學生思考，提升英語能力。",
    experience: "英語碩士，曾任教於國際學校。",
    rating: 4.9,
  },
  {
    name: "王老師",
    photo: "/bin/tutor-3.png",
    subjects: ["化學", "生物"],
    description: "專業化學及生物導師，注重實踐與理論結合。",
    experience: "大學講師，10年補習經驗。",
    rating: 4.7,
  },
  {
    name: "周老師",
    photo: "/bin/tutor-4.png",
    subjects: ["中文", "歷史"],
    description: "熱愛文學，善於啟發學生閱讀興趣。",
    experience: "資深中文老師，出版多本教學書籍。",
    rating: 4.6,
  },
  {
    name: "吳老師",
    photo: "/bin/tutor-5.png",
    subjects: ["數學", "經濟"],
    description: "數學邏輯思維訓練專家，經濟學碩士。",
    experience: "曾任職於知名補習社。",
    rating: 4.8,
  },
  {
    name: "林老師",
    photo: "/bin/tutor-6.png",
    subjects: ["物理", "資訊科技"],
    description: "資訊科技與物理雙專業，注重實驗教學。",
    experience: "STEM課程設計師。",
    rating: 4.7,
  },
  {
    name: "何老師",
    photo: "/bin/tutor-7.png",
    subjects: ["地理", "通識"],
    description: "地理知識豐富，善於結合理論與生活。",
    experience: "多年高中教學經驗。",
    rating: 4.5,
  },
  {
    name: "張老師",
    photo: "/bin/tutor-8.png",
    subjects: ["英文", "數學"],
    description: "雙語教學，提升學生自信心。",
    experience: "國際學校任教背景。",
    rating: 4.9,
  },
];

export default function Home() {
  const [selectedTutor, setSelectedTutor] = React.useState<Tutor | null>(null);

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
        {tutors.map((tutor, idx) => (
          <img
            key={idx}
            src={tutor.photo}
            alt={tutor.name}
            className="border-2  rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center cursor-pointer"
            onClick={() => setSelectedTutor(tutor)}
          />
        ))}
      </div>
      <TutorDetails tutor={selectedTutor} onClose={() => setSelectedTutor(null)} />

      <h1 className="m-4 font-bold text-2xl my-2 text-[#9F5C5C]">
        最新個案
      </h1>
      {/* Gallery for 最新個案 */}
      <div
        className="flex overflow-x-auto gap-4 px-4 mb-8 snap-x snap-mandatory scrollbar-hide p-4"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <img src="/bin/case-11-1.png" alt="Case 1" className="rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="/bin/case-12-1.png" alt="Case 2" className="rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="/bin/case-13-1.png" alt="Case 3" className="rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="/bin/case-14-1.png" alt="Case 4" className="rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="/bin/case-15-1.png" alt="Case 5" className="rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="/bin/case-16-1.png" alt="Case 6" className="rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="/bin/case-17-1.png" alt="Case 7" className="rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
        <img src="/bin/case-19-1.png" alt="Case 8" className="rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center" />
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
