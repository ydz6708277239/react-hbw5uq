import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

let tmp = 55;
let aqi = 55;
let hp = 80;

const img_link = 'https://images5.alphacoders.com/928/928703.jpg';

const articles = [
  ['volcano eruption in indonesia', -3, 20],
  ['wildfires rage across California', -2, 40],
  ['nuclear tests conducted in Pacific waters', -2, 15],
];

export default function MainApp({props}) {
  console.log(props.index)
  // let index = 0;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     index++;
  //     console.log(index, articles[index % articles.length]);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, [index]);

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      {articles[index][0]}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `"header header header header"
        "main main main sidebar"
        "footer footer footer footer"`,
        }}
      >
        <Card sx={{ gridArea: 'header' }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Welcome, URSA!
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ gridArea: 'main' }}>
          <CardMedia component="img" image={img_link} alt="bear avatar" />
          <CardActions>
            <Button size="small">Feed</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ gridArea: 'sidebar' }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Temp={tmp}
            </Typography>
            <Typography variant="h5" component="div">
              AQI={aqi}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              critical
            </Typography>
            <Typography variant="h5" color="text.secondary">
              HP = {hp}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ gridArea: 'footer' }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              ! BREAKING NEWS !
            </Typography>
            <Typography variant="h5" component="div">
              {articles[index][0]}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Absolutely terrible news
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
