import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample chart data
const data = [
  { name: "Jan", users: 400, sales: 240 },
  { name: "Feb", users: 300, sales: 139 },
  { name: "Mar", users: 200, sales: 980 },
  { name: "Apr", users: 278, sales: 390 },
  { name: "May", users: 189, sales: 480 },
  { name: "Jun", users: 239, sales: 380 },
];

function Projexio() {
  return (
    <div className="flex bg-gray-100 h-screen">
      <aside className="w-100 bg-black text-white p-5 shadow-md hidden md:block rounded-tr-2xl">
        <h1 className="text-2xl font-bold my-6">YOUR PROJECTS</h1>

        <div>
          <button className="bg-stone-600 rounded-xl py-3 px-6 text-lg text-center text-white">
            + Add Project
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Welcome, Exponent</h2>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
              Notifications
            </button>
            <div className="p-2 bg-gray-200 rounded">Profile</div>
          </div>
        </header>

        {/* Table */}
      </main>
    </div>
  );
}

export default Projexio;
