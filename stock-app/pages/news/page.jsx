import React, { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [newsData, setNewsData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mboum-finance.p.rapidapi.com/ne/news/",
          {
            params: {
              symbol: "AAPL,MSFT",
            },
            headers: {
              "X-RapidAPI-Key":
                "900f424182msh425d1399576f50cp11ca87jsn30a98881d57d",
              "X-RapidAPI-Host": "mboum-finance.p.rapidapi.com",
            },
          }
        );
        console.log(response.data.body[0].title);
        setNewsData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Function to select a subset of articles
  const getSelectedArticles = (count) => {
    return newsData && newsData.body.slice(0, count);
  };

  return (
    <>
      <h1 className="text-primary font-bold text-5xl flex justify-center ">
        News Center
      </h1>

      <div className="text-primary w-96 m-auto text-center mt-20 gap-5">
        {newsData &&
          getSelectedArticles(20).map((item, index) => (
            <section
              className="text-primary flex-col flex text-center mt-20 border md:text-sm md:mx-2"
              key={index}
            >
              <p className="text-left text-price">{item.pubDate}</p>
              <h1 className="text-primary text-left font-bold mt-5 mb-5">
                {item.title}
              </h1>
              <p className="text-left">{item.description}</p>
              <a href={item.link} className="hover:bg-price text-left mt-5 ">
                LINK
              </a>
            </section>
          ))}
      </div>
    </>
  );
};

export default News;
