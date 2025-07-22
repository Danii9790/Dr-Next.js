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

