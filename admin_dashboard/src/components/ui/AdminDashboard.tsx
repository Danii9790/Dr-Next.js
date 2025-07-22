"use client";

interface Appointment {
  _id: string;
  patientName: string;
  doctorName: string;
  email: string;
  date: string;
  time: string;
  status: string;
}

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import jsPDF from "jspdf";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase"; // correct path

const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
const SANITY_TOKEN = process.env.SANITY_TOKEN;
const ADMIN_UID = process.env.NEXT_PUBLIC_ADMIN_UID;


const fetchAppointments = async () => {
  const query = `*[_type == "appointment"] | order(_createdAt desc)`;
  const response = await fetch(
    `https://${SANITY_PROJECT_ID}.api.sanity.io/v2023-07-19/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`,
    {
      headers: {
        Authorization: `Bearer ${SANITY_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return data.result || [];
};

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const router = useRouter();

  // ✅ Restrict by UID
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user || user.uid !== ADMIN_UID) {
        router.push("/login"); // 🔐 Only allowed UID
      }
    });
    return () => unsubscribe();
  }, [router]);
  

  useEffect(() => {
    fetchAppointments().then((data) => {
      setAppointments(data);
      setLoading(false);
    });
  }, []);

  const handleDownloadPDF = () => {
    if (!selectedDate) {
      alert("Please select a date before downloading.");
      return;
    }

    const filtered = appointments.filter((a: any) => a.date === selectedDate);

    if (filtered.length === 0) {
      alert("No appointments found for selected date.");
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text(`Appointments on ${selectedDate}`, 10, 10);

    filtered.forEach((appt: Appointment, i: number) => {
      const y = 20 + i * 40;
      doc.setFontSize(12);
      doc.text(`Patient: ${appt.patientName}`, 10, y);
      doc.text(`Doctor: ${appt.doctorName}`, 10, y + 7);
      doc.text(`Email: ${appt.email}`, 10, y + 14);
      doc.text(`Time: ${appt.time}`, 10, y + 21);
      doc.text(`Status: ${appt.status}`, 10, y + 28);
    });

    doc.save(`appointments-${selectedDate}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      {/* <nav className="bg-white shadow p-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-700">🩺 Doctor Admin Dashboard</h1>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Refresh
        </Button>
      </nav> */}

      {/* Tools */}
      <div className="flex gap-4 items-center p-6">
        <Input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-fit"
        />
        <Button onClick={handleDownloadPDF}>Download PDF</Button>
      </div>

      {/* Appointments */}
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">📅 Appointments</h2>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="animate-spin w-6 h-6 text-gray-500" />
          </div>
        ) : appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appointments.map((appt: any) => (
              <Card key={appt._id} className="bg-white shadow hover:shadow-lg">
                <CardContent className="p-4">
                  <p className="font-semibold text-blue-600">{appt.patientName}</p>
                  <p className="text-gray-700 text-sm">Doctor: {appt.doctorName}</p>
                  <p className="text-gray-700 text-sm">Email: {appt.email}</p>
                  <p className="text-gray-700 text-sm">Date: {appt.date}</p>
                  <p className="text-gray-700 text-sm">Time: {appt.time}</p>
                  <p className="text-gray-700 text-sm">Status: {appt.status}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
