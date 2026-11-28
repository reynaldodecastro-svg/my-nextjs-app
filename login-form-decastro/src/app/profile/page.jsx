"use client";

import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center font-sans">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Hi, Reynaldo!!!</h1>

      <img
        src="/rey.jpg"
        alt="Profile Picture"
        className="w-36 h-36 rounded-full mx-auto my-5 block object-cover shadow-md"
      />

      <p className="mb-5 text-gray-700">This is your website</p>

      <button
        onClick={() => router.back()}
        className="px-5 py-2.5 bg-gray-800 text-white rounded cursor-pointer hover:bg-gray-900 transition"
      >
        Back to Login
      </button>
    </div>
  );
}
