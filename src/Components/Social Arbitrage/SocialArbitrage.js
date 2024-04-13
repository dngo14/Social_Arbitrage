import React, { useState, useEffect } from 'react';

function SocialArbitrage() {

  //const recentNews = ["News item 1", "News item 2"];
  const topPerformers = ["Stock 1", "Stock 2"];
  const activeStocks = ["Stock 5", "Stock 6"];
  const [loading, setLoading] = useState(true);
  const [stockData, setStockData] = useState([])
  const [stockNews, setStockNews] = useState([])
  const [earningsCalendar, setEarningsCalendar] = useState([]);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
      mode: 'cors' // Set mode to 'cors'
    };
    
    try {
      //const response = await fetch("http://127.0.0.1:5000/get_active_stocks", options);
      const response2 = await fetch("http://127.0.0.1:5000/get_news", options);
      const response3 = await fetch("http://127.0.0.1:5000/get_earnings", options);
      // if (!response.ok) {
      //   throw new Error("Response error");
      // }
      //const data = await response.json();
      const data2 = await response2.json()
      const data3 = await response3.json()
      console.log(data3)
      //setStockData(data);
      setStockNews(data2)
      setEarningsCalendar(data3)
      setLoading(false);
    } catch (error) {
      console.log("Error:", error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
    <div>Loading...</div>
    );
  }

    return (
      <p>hi</p>
    );
  }
  
  export default SocialArbitrage;