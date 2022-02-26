import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const avatar_img = "";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://media.tenor.com/images/28a47f2133e5767c203d98cc8799e5d0/tenor.gif"
        alt="bear avatar"
      />
      <CardActions>
        <Button size="small">Feed</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
