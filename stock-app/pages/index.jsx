import { useEffect } from "react";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import Flowicon from "../assets/Stockoverflow.json";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/start"); // Replace with the path to your start.jsx page
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timeout);
  }, [router]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Flowicon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Lottie options={defaultOptions} height={150} width={150} />
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Stock Overflow</h1>
      <p className="text-lg text-gray-600">Loading...</p>
    </div>
  );
};

export default HomePage;
