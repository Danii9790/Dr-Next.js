"use client";

import { useSupportAgent } from "@/context/SupportAgentContext";
import Image from "next/image";
interface DoctorProps {
  name: string;
  specialty: string;
  image: string;
  description: string;
}

const DoctorCard = ({ name, specialty, image, description }: DoctorProps) => {
  const { openAgent } = useSupportAgent();

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full max-w-sm flex flex-col justify-between h-[550px]">
      <div>
        <Image
          src={image}
          alt={name}
          className="w-full h-64 object-cover object-top rounded-xl"
        />
        <h3 className="text-xl font-semibold mt-4">{name}</h3>
        <p className="text-gray-500 font-medium">{specialty}</p>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
      </div>

      <div className="mt-4">
        <button
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
          onClick={openAgent}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
