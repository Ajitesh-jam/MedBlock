import { useEffect } from "react";
import { useRouter } from "next/router";
import magic from "../lib/magic";

const Verify = () => {
  const router = useRouter();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        // Check if the user is logged in
        const isLoggedIn = await magic.user.isLoggedIn();

        if (isLoggedIn) {
          // Redirect to dashboard or any other page after successful login
          router.push("/onepage");
        } else {
          // Redirect back to login if not authenticated
          router.push("/login");
        }
      } catch (error) {
        console.error("Verification failed", error);
        router.push("/login");
      }
    };

    verifyUser();
  }, [router]);

  return <p>Verifying login...</p>;
};

export default Verify;
