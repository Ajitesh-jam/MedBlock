import { useRouter } from "next/router";
import { useState } from "react";
import magic from "../../lib/Magic";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      // Trigger Magic Link email authentication
      await magic.auth.loginWithMagicLink({ email });

      // Redirect to intermediate page for verification
      router.push("/verify");
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        style={{ padding: "10px", width: "250px" }}
      />
      <button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? "Logging in..." : "Send Magic Link"}
      </button>
    </div>
  );
};

export default Login;

