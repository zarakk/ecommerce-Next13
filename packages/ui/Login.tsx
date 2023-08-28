"use client";
import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isDisplayMessage, setIsDisplayMessage] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (window.location.pathname.includes("admin")) {
      setRole("admin");
    }
    if (!window.location.pathname.includes("admin")) {
      setRole("user");
    }
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLogin(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      // if (!res.ok) {
      //   throw new Error(await res.text());
      // }
      const data = await res.json();
      console.log(res);
      setIsLogin(false);
      setSuccess("Login successful!");
      setTimeout(() => setIsDisplayMessage(false), 3000);

      // router.push("/admin/dashboard");
    } catch (error: any) {
      setIsLogin(false);
      setError("Login Error");
      setTimeout(() => setIsDisplayMessage(false), 3000);
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      {success && isDisplayMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <span className="block sm:inline">{success}</span>
        </div>
      )}
      {error && isDisplayMessage && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-4">
        {role !== "" && role === "admin" ? "Admin Login" : "User Login"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md px-3 py-2 hover:bg-blue-700"
        >
          {isLogin ? "Logging in" : "Login"}
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline">
          Signup
        </a>
      </p>
    </div>
  );
}

export default Login;
