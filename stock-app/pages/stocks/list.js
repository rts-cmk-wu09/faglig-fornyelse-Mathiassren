const list = () => {
  return (
    <>
      <h1 className="text-primary text-3xl tracking-wide font-bold flex justify-center mt-5">
        LIST
      </h1>
      <div className="flex justify-center mt-20">
        {" "}
        <table className="text-primary border md:text-sm md:mx-2">
          <tbody>
            <tr>
              <td className="border-lightGrey border px-4 py-4">Price</td>
              <td className="border-lightGrey text-price border px-4 py-4">
                <span className="text-lightGrey"></span>
              </td>
            </tr>
            <tr>
              <td className="border-lightGrey border px-4 py-4">
                Change Percentage
              </td>
              <td className="border-lightGrey text-priceDown border px-4 py-4"></td>
            </tr>
            <tr>
              <td className="border-lightGrey border px-4 py-4">
                Change Point
              </td>
              <td className="border-lightGrey text-priceDown border px-4 py-4"></td>
            </tr>
            <tr>
              <td className="border-primary border px-4 py-4">Total Vol</td>
              <td
                className="
                  text-price border-lightGrey border px-4 py-4"
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default list;
