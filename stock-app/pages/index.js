import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [stock, setStock] = useState("Fb");
  const [btnText, setBtnText] = useState("Search");
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);

  /*Fetch stock api
   *
   *
   *
   * */
  const fetchStockInformation = async (e) => {
    e.preventDefault();

    try {
      setRes(null);
      setError(null);
      setBtnText("Loading Stonks...");
      const res = await axios.get(`/api/info`, {
        params: { stock },
      });

      if (res.status === 404) {
        throw err;
      }
      setRes(res.data);
    } catch (err) {
      setError(err);
    }

    setBtnText("Search");
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        <span className="text-primary tracking-widest">STOCKS</span>
      </h2>
      <h3 className="text-primary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Get info of any stocks quickly
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form className="flex w-full justify-center md:flex-col md:w-5/6 ">
          <input
            type="text"
            className="  outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Name of stock..."
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <button
            className="outline-none border border-primary font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-royalBlueDark text-primary transition duration-300 hover:bg-oceanBlueDark
              md:ml-0 md:mt-4"
            onClick={fetchStockInformation}
          >
            {btnText}
          </button>
        </form>
        {res && (
          <div className="flex flex-col text-raleway mt-12 w-3/6 h-4/5 md:w-5/6 md:h-full md:mb-12">
            <table className="text-primary border md:text-sm md:mx-2">
              <tbody>
                <tr>
                  <td className="border-lightGrey border px-4 py-4">Price</td>
                  <td className="border-lightGrey text-price border px-4 py-4">
                    <span className="text-lightGrey">USD</span> {res.price}
                  </td>
                </tr>
                <tr>
                  <td className="border-lightGrey border px-4 py-4">
                    Change Percentage
                  </td>
                  <td className="border-lightGrey text-priceDown border px-4 py-4">
                    {res.change_percentage}
                  </td>
                </tr>
                <tr>
                  <td className="border-lightGrey border px-4 py-4">
                    Change Point
                  </td>
                  <td className="border-lightGrey text-priceDown border px-4 py-4">
                    {res.change_point}
                  </td>
                </tr>
                <tr>
                  <td className="border-primary border px-4 py-4">Total Vol</td>
                  <td
                    className="
                  text-price border-lightGrey border px-4 py-4"
                  >
                    {res.total_vol}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {error && (
          <div className="flex flex-col mt-16 w-3/6 h-4/5 md:flex-col md:w-4/6 md:h-full md:mb-12 md:w-4/5">
            <p className="mb-12 border border-secondary text-primary font-raleway px-4 py-8 tracking-wide leading-8">
              {error.toString()}
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col mt-10 justify-end h-36 md:h-24">
        <p className="block mb-10 text-center text-secondary text-xs">
          Made by Mathiassrensen
        </p>
      </div>
    </div>
  );
}
