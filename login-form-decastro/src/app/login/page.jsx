"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const VALID_USERNAME = "reynaldo";
  const VALID_PASSWORD = "reynaldo17";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError("Please fill in both username and password.");
      return;
    }

    if (username !== VALID_USERNAME) {
      setError("Wrong username.");
      return;
    }

    if (password !== VALID_PASSWORD) {
      setError("Wrong password.");
      return;
    }

    setError("");
    router.push("/profile");
  };

  return (
    <div className="max-w-sm mx-auto mt-20 font-sans">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <div className="mb-3">
        <label className="block mb-1">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
            className="mr-2"
          />
          Show Password
        </label>
      </div>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <button
        onClick={handleLogin}
        className="w-full p-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700"
      >
        Login
      </button>
    </div>
  );
}
