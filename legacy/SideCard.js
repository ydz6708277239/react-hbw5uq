import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const tmp = 0;
const aqi = 55;
export default function StatCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
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
        <Typography variant="body2">
          hi meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
