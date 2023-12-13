// pages/crypto/[id].js
import { useRouter } from "next/router";
import axios from "axios";

const CryptoDetails = ({ cryptoDetails }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!cryptoDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{cryptoDetails.name} Details</h1>
      {/* Display additional details based on cryptoDetails */}
    </div>
  );
};

export default CryptoDetails;

// Fetch data at runtime
export async function getServerSideProps({ params }) {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${params.id}`
    );

    const cryptoDetails = response.data;

    return {
      props: {
        cryptoDetails,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        cryptoDetails: null,
      },
    };
  }
}
