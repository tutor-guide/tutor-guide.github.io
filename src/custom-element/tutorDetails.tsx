import * as React from "react";

interface Tutor {
  name: string;
  photo: string;
  subjects: string[];
  description: string;
  experience: string;
  rating?: number;
}

interface TutorDetailsProps {
  tutor: Tutor | null;
  onClose: () => void;
}

const TutorDetails = (props: TutorDetailsProps) => {
  const { tutor, onClose } = props;
  if (!tutor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative animate-fade-in">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-4xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <img
            src={tutor.photo}
            alt={tutor.name}
            className="w-32 h-32 rounded-full object-cover border-2 border-[#9F5C5C] mb-4"
          />
          <h2 className="text-2xl font-bold text-[#9F5C5C] mb-2">{tutor.name}</h2>
          <div className="mb-2 text-[#9b6f39] font-semibold">
            {tutor.subjects.join(", ")}
          </div>
          <div className="mb-2 text-gray-700 text-center">{tutor.description}</div>
          <div className="mb-2 text-sm text-gray-500">{tutor.experience}</div>
          {tutor.rating && (
            <div className="flex items-center mt-2">
              <span className="text-yellow-400 mr-1">★</span>
              <span className="font-bold text-[#9b6f39]">{tutor.rating}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;