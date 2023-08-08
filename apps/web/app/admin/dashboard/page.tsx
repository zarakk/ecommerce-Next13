"use client";

import MainDashboard from "../components/MainDashBoard";
import Navbar from "../components/Navbar";

export default function AdminDashboard() {
  return (
    <div className="flex">
      <Navbar />
      <MainDashboard />
    </div>
  );
}
