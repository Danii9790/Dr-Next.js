import Navbar from "@/components/Navbar";
import DoctorCard from "@/components/DoctorCard"
import { getDoctors } from "../../lib/doctorList";

export default async function Home() {
  const doctors = await getDoctors(); // ✅ Call Sanity API

  return (
    <div>
      <Navbar />
      <section className="py-12 bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to MediConnect</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Book appointments with top doctors through our smart assistant system.
        </p>
      </section>

      <section id="doctors" className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-8">Our Doctors</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {doctors.map((doc: any) => (
            <DoctorCard
              key={doc._id}
              name={doc.name}
              specialty={doc.speciality} // ✅ "speciality" not "specialty"
              description={doc.description}
              image={doc.image}
            />
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-gray-100 py-6 text-center">
        <p className="text-gray-600">© 2025 MediConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}

