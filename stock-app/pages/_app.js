import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
