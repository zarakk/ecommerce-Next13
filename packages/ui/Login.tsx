import { useState, FormEvent, useEffect } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

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
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        throw new Error(await res.text());
      }
      // Handle successful login here
    } catch (error: any) {
      setError(error.message);
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        {role !== "" && role === "admin" ? "Admin Login" : "User Login"}
      </h2>
      {error && <p className="text-red-600">{error}</p>}
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
          Login
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
