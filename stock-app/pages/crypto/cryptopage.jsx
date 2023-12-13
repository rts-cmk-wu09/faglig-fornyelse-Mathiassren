// pages/crypto/index.js
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Crypto = ({ cryptoData }) => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-purple-800 min-h-screen p-4 sm:p-8">
      <div className="grid grid-cols-1 gap-4">
        {cryptoData.map((crypto) => (
          <Link
            key={crypto.id}
            href={`/crypto/${crypto.id}`} // Define your route path with parameters
          >
            <div className="text-white cursor-pointer text-decoration-none">
              <div className="bg-white rounded-md shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="flex p-4">
                  <img
                    src={crypto.image}
                    alt={`${crypto.name} Logo`}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-lg font-bold mb-1">{crypto.name}</h2>

                    <div>
                      <p className="text-gray-600">
                        24h High: ${crypto.high_24h}
                      </p>
                      <p className="text-gray-600">
                        24h Low: ${crypto.low_24h}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">
                        Change (24h): ${crypto.price_change_24h}
                      </p>
                      <p
                        className={`text-gray-600 ${
                          crypto.price_change_percentage_24h > 0
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        Change % (24h): {crypto.price_change_percentage_24h}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Crypto;

// Fetch data at build time
export async function getStaticProps() {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 50,
          page: 1,
          sparkline: false,
          locale: "en",
        },
      }
    );

    const cryptoData = response.data;

    return {
      props: {
        cryptoData,
      },
      revalidate: 60, // Revalidate the data every 60 seconds
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        cryptoData: [],
      },
    };
  }
}
