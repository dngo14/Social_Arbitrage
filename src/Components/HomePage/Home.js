import React, { useState, useEffect } from 'react';
import {Grid, Card, CardContent, CardHeader, Typography} from "@mui/material/"
import InfoCard from './InfoCard';
import NewsCard from './NewsCard';
import { Link } from 'react-router-dom';
import { Audio } from 'react-loader-spinner'
import dailystockPerformers from './dailystockPerformers';
import MyCalendar from './Calendar';
//import Divider from '@mui/material/Divider';


function HomePage() {

  const recentNews = [
    {
      title: "News Item 1",
      imageUrl: "https://www.investopedia.com/thmb/WmfAdzhHGSnSEbyz3wYWrODrCCk=/4000x2667/filters:no_upscale():max_bytes(150000):strip_icc()/Primary-Image-how-to-invest-in-web-3-0-in-2023-7480982-787d9b953b4944f9b8ed25a284228269.jpg",
    },
    {
      title: "News Item 2",
      imageUrl: "https://via.placeholder.com/150",
    },
    // Add more news items as needed
  ];

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
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12} sm={6} lg={4}>
          <div style={{ height: '1065px', width: '750px', overflowY: 'scroll', scrollbarWidth: "none", msOverflowStyle: "none", margin: "10px" }}>
            {stockNews.map((item, index) => (
              <Link to={item.url} style={{ textDecoration: 'none' }}>
                <NewsCard item={item} />
              </Link>
            ))}
          </div>
        </Grid>
        <Grid item container xs={12} sm={6} lg={8} justifyContent="center">
          <Grid item container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <InfoCard title="Top Gainers" content={dailystockPerformers.top_gainers} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InfoCard title="Top Losers" content={dailystockPerformers.top_losers} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InfoCard title="Most Active" content={dailystockPerformers.most_actively_traded} />
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "5px", display: "flex", justifyContent: "center" }}>
            <MyCalendar earningsCalendar={earningsCalendar} />
          </Grid>
        </Grid>
      </Grid>


      
    );
  }
  
  export default HomePage;