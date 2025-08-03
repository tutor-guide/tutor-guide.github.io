import * as React from "react";

interface Case {
  title: string;
  photo: string;
  subject: string;
  description: string;
  location: string;
  postedDate: string;
  budget?: string;
}

interface CaseDetailsProps {
  caseData: Case | null;
  onClose: () => void;
}

const CaseDetails = (props: CaseDetailsProps) => {
  const { caseData, onClose } = props;
  if (!caseData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative animate-fade-in">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-4xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <img
            src={caseData.photo}
            alt={caseData.title}
            className="w-32 h-32 rounded-lg object-cover border-2 border-[#9F5C5C] mb-4"
          />
          <h2 className="text-2xl font-bold text-[#9F5C5C] mb-2">{caseData.title}</h2>
          <div className="mb-2 text-[#9b6f39] font-semibold">{caseData.subject}</div>
          <div className="mb-2 text-gray-700 text-center">{caseData.description}</div>
          <div className="mb-2 text-sm text-gray-500">地點：{caseData.location}</div>
          <div className="mb-2 text-sm text-gray-500">發佈日期：{caseData.postedDate}</div>
          {caseData.budget && (
            <div className="flex items-center mt-2">
              <span className="font-bold text-[#9b6f39]">預算：</span>
              <span className="text-[#9b6f39]">{caseData.budget}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;
