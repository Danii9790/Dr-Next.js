import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <section className="bg-gray-100 py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-10">
            Have a question, suggestion, or want to place an order directly via WhatsApp?
            We're here to help!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
              <Phone className="text-black mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Call / WhatsApp</h3>
                <p className="text-gray-600">+92 317 3762160</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
              <Mail className="text-black mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">24ds34@quest.edu.pk</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
              <MapPin className="text-black mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-gray-600">Main Bazaar, Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="mt-12">
            <iframe
              className="w-full h-96 rounded-xl shadow-md border-0"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.590264247528!2d74.3196278147523!3d31.549700980203734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904dd73555cfb%3A0xe2f6f34057a7fa93!2sLahore%20Bazaar!5e0!3m2!1sen!2s!4v1691079118323!5m2!1sen!2s"
            ></iframe>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}