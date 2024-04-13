import React, { useState, useEffect } from 'react';
import {Card, CardContent, CardHeader, Typography} from "@mui/material/"
import './InfoCard.css';

function InfoCard({ title, content }) {
    return (
        <Card className="infoCard">
          <div className="infoCardHeader">
            <Typography variant="h6" component="div">
              {title}
            </Typography>
          </div>
          <CardContent className="infoCardContent">
            {content.map((item, index) => (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography key={index} variant="body2" component="p">
                {item.ticker}
              </Typography>
              <Typography key={index} variant="body2" component="p">
                {"$" + item.price}
              </Typography>
              <Typography key={index} variant="body2" component="p" color={parseFloat(item.change_percentage) < 0 ? 'red' : 'green'}>
                {item.change_percentage}
              </Typography>
              </div>
            ))}
          </CardContent>
          </Card>
      );
    }
  
  export default InfoCard;