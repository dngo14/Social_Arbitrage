import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './NewsCard.css'; // Assume you'll create a corresponding CSS file

function NewsCard({ item }) {
  const marketWatchImage = "https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png"; 
  return (
    <Card className="newsCard">
      <CardMedia
        component="img"
        height="140"
        image={item.source === "MarketWatch" ? marketWatchImage : item.image}
        alt={item.headline}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.headline}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {Date(item.datetime)}
        </Typography>
        <Typography gutterBottom variant="h7" component="div" align="right">
          {(item.category.toUpperCase())+" | "} {item.source}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NewsCard;
