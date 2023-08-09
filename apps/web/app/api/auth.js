import jwt from "jsonwebtoken";

const users = [];

const secret = "SECRET_KEY";

export default function handler(req, res) {
  const { url, method } = req;

  if (url === "/api/auth/signup" && method === "POST") {
    const { email, password } = req.body;
    const user = { id: users.length + 1, email, password };
    users.push(user);
    res.status(201).json({ message: "User created" });
  } else if (url === "/api/auth/login" && method === "POST") {
    const { email, password } = req.body;
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      res.status(400).json({ message: "Email or password is incorrect" });
      return;
    }
    const token = jwt.sign({ sub: user.id }, secret, { expiresIn: "1h" });
    res.status(200).json({ token, role: "admin" });
  } else if (url === "/api/auth/verify" && method === "GET") {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({ message: "Missing token" });
      return;
    }
    try {
      const decoded = jwt.verify(token, secret);
      res.status(200).json({ message: "Token is valid", decoded });
    } catch (error) {
      res.status(401).json({ message: "Token is invalid" });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
