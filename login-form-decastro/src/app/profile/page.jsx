"use client";

import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="text-center mt-20 font-sans">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>

      <img
        src="/rey.jpg"
        alt="Profile Picture"
        className="w-36 h-36 rounded-full mx-auto my-5 block object-cover"
      />

      <p className="mb-5">Welcome, reynaldo!</p>

      <button
        onClick={() => router.back()}
        className="px-5 py-2.5 bg-gray-800 text-white rounded cursor-pointer hover:bg-gray-900"
      >
        Back to Login
      </button>
    </div>
  );
}
