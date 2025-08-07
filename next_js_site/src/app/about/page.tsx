import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto py-16 px-4">
      <section className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4 tracking-tight">About MediConnect</h1>
        <p className="text-lg text-gray-600 mb-6">
          At <span className="font-semibold text-blue-600">MediConnect</span>, we are dedicated to connecting you with the best healthcare professionals, ensuring a seamless and compassionate experience from consultation to recovery. Our team of expert doctors is committed to providing world-class care, personalized attention, and the latest in medical advancements.
        </p>
        <div className="flex justify-center gap-4 mb-2">
          <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">Expert Doctors</span>
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Patient-Centered Care</span>
          <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Modern Technology</span>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Meet Our Specialists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Dr. Ahmed */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="w-36 h-36 mb-5 rounded-full overflow-hidden border-4 border-blue-100 shadow">
              <Image
                src="/images/dr-ahmed.png"
                alt="Dr. Ahmed"
                width={144}
                height={144}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Dr. Ahmed</h3>
            <p className="text-blue-700 font-medium mb-3">Consultant Neurologist</p>
            <p className="text-gray-600 text-center text-sm mb-4">
              With over 15 years of experience, Dr. Ahmed specializes in diagnosing and treating complex neurological disorders. He is renowned for his empathetic approach, advanced treatment plans, and dedication to improving patients' quality of life.
            </p>
            <ul className="text-gray-500 text-xs mb-2">
              <li>• Stroke & Epilepsy Management</li>
              <li>• Neurorehabilitation</li>
              <li>• Patient Education & Support</li>
            </ul>
          </div>
          {/* Dr. Khan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="w-36 h-36 mb-5 rounded-full overflow-hidden border-4 border-blue-100 shadow">
              <Image
                src="/images/dr-khan.png"
                alt="Dr. Khan"
                width={144}
                height={144}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Dr. Khan</h3>
            <p className="text-blue-700 font-medium mb-3">Consultant Dermatologist</p>
            <p className="text-gray-600 text-center text-sm mb-4">
              Dr. Khan brings a wealth of expertise in treating a wide range of skin, hair, and nail conditions. His patient-first philosophy and use of cutting-edge dermatological techniques ensure the best outcomes for every individual.
            </p>
            <ul className="text-gray-500 text-xs mb-2">
              <li>• Acne & Skin Disorders</li>
              <li>• Cosmetic Dermatology</li>
              <li>• Personalized Skincare Plans</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mt-16 text-center">
        <h3 className="text-xl font-bold text-blue-700 mb-2">Why Choose MediConnect?</h3>
        <p className="text-gray-600 mb-4">
          We believe in building lasting relationships with our patients, offering not just treatment but guidance, support, and education. Our platform ensures easy appointment booking, secure communication, and access to top medical professionals—all in one place.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium shadow">24/7 Support</span>
          <span className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium shadow">Verified Specialists</span>
          <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium shadow">Confidential & Secure</span>
        </div>
      </section>
    </div>
  );
}
