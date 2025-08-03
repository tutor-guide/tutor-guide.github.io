import * as React from "react";
import TutorDetails from "../custom-element/tutorDetails";
import CaseDetails from "../custom-element/caseDetails";

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

interface Case {
  title: string;
  photo: string;
  subject: string;
  description: string;
  location: string;
  postedDate: string;
  budget?: string;
}

const cases: Case[] = [
  {
    title: "中三數學補習",
    photo: "/bin/case-11-1.png",
    subject: "數學",
    description: "需要有經驗導師，協助學生提升數學成績。",
    location: "九龍塘",
    postedDate: "2025-08-01",
    budget: "$300/hr",
  },
  {
    title: "小五英文家教",
    photo: "/bin/case-12-1.png",
    subject: "英文",
    description: "提升英文會話及寫作能力。",
    location: "沙田",
    postedDate: "2025-08-02",
    budget: "$250/hr",
  },
  {
    title: "中六化學補習",
    photo: "/bin/case-13-1.png",
    subject: "化學",
    description: "DSE 應試技巧訓練。",
    location: "荃灣",
    postedDate: "2025-08-03",
    budget: "$350/hr",
  },
  {
    title: "初中中文補習",
    photo: "/bin/case-14-1.png",
    subject: "中文",
    description: "提升閱讀理解及寫作能力。",
    location: "觀塘",
    postedDate: "2025-08-01",
    budget: "$280/hr",
  },
  {
    title: "小六常識家教",
    photo: "/bin/case-15-1.png",
    subject: "常識",
    description: "協助學生準備升中試。",
    location: "大埔",
    postedDate: "2025-08-02",
    budget: "$220/hr",
  },
  {
    title: "高中物理補習",
    photo: "/bin/case-16-1.png",
    subject: "物理",
    description: "DSE 物理重點溫習。",
    location: "屯門",
    postedDate: "2025-08-03",
    budget: "$320/hr",
  },
  {
    title: "中四地理補習",
    photo: "/bin/case-17-1.png",
    subject: "地理",
    description: "地理概念及答題技巧。",
    location: "元朗",
    postedDate: "2025-08-01",
    budget: "$300/hr",
  },
  {
    title: "小三數學家教",
    photo: "/bin/case-19-1.png",
    subject: "數學",
    description: "基礎數學訓練，提升自信。",
    location: "將軍澳",
    postedDate: "2025-08-02",
    budget: "$200/hr",
  },
];

export default function Home() {
  const [selectedTutor, setSelectedTutor] = React.useState<Tutor | null>(null);
  const [selectedCase, setSelectedCase] = React.useState<Case | null>(null);

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
        {cases.map((c, idx) => (
          <img
            key={idx}
            src={c.photo}
            alt={c.title}
            className="rounded-lg object-cover w-40 h-40 flex-shrink-0 snap-center cursor-pointer"
            onClick={() => setSelectedCase(c)}
          />
        ))}
      </div>
      <CaseDetails caseData={selectedCase} onClose={() => setSelectedCase(null)} />

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
