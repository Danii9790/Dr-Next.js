// "use client"
// import React, { useEffect, useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Loader2 } from "lucide-react";

// const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
// const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
// const SANITY_TOKEN = process.env.NEXT_PUBLIC_SANITY_TOKEN;

// const fetchAppointments = async () => {
//   const query = `*[_type == "appointment"] | order(_createdAt desc)`;
//   const response = await fetch(
//     `https://${SANITY_PROJECT_ID}.api.sanity.io/v2023-07-19/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`,
//     {
//       headers: {
//         Authorization: `Bearer ${SANITY_TOKEN}`,
//       },
//     }
//   );
//   const data = await response.json();
//   return data.result || [];
// };

// export default function AdminDashboard() {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchAppointments().then((data) => {
//       setAppointments(data);
//       setLoading(false);
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <nav className="bg-white shadow p-4 flex items-center justify-between">
//         <h1 className="text-xl font-semibold text-gray-700">🩺 Doctor Admin Dashboard</h1>
//         <Button variant="outline">Refresh</Button>
//       </nav>

//       {/* Home / Appointments */}
//       <main className="p-6">
//         <h2 className="text-2xl font-bold mb-4">📅 Appointments</h2>

//         {loading ? (
//           <div className="flex justify-center items-center h-40">
//             <Loader2 className="animate-spin w-6 h-6 text-gray-500" />
//           </div>
//         ) : appointments.length === 0 ? (
//           <p>No appointments found.</p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {appointments.map((appt: {
//               _id: string;
//               patientName: string;
//               doctorName: string;
//               email: string;
//               date: string;
//               time: string;
//               status: string;
//             }) => (
//               <Card key={appt._id} className="bg-white shadow hover:shadow-lg">
//                 <CardContent className="p-4">
//                   <p className="font-semibold text-blue-600">{appt.patientName}</p>
//                   <p className="text-gray-700 text-sm">Doctor: {appt.doctorName}</p>
//                   <p className="text-gray-700 text-sm">Email: {appt.email}</p>
//                   <p className="text-gray-700 text-sm">Date: {appt.date}</p>
//                   <p className="text-gray-700 text-sm">Time: {appt.time}</p>
//                   <p className="text-gray-700 text-sm">Status: {appt.status}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// app/admin-dashboard/page.tsx
"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

// import your AdminDashboard component
import AdminDashboard from "@/components/ui/AdminDashboard";

export default function ProtectedDashboard() {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthorized(true);
      } else {
        router.push("/login");
      }
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  if (loading) return <p className="p-4">Loading...</p>;
  if (!authorized) return null;

  return (
    <div>
      <div className="flex justify-between items-center bg-white shadow px-6 py-4">
        <h1 className="text-lg font-semibold">🩺 Doctor Admin Dashboard</h1>
        <button onClick={handleLogout} className="text-red-500">Logout</button>
      </div>
      <AdminDashboard />
    </div>
  );
}

