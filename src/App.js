import React from 'react';
import './style.css';
import MainApp from './MainApp';
import StatCard from './StatCard';
import SideCard from './SideCard';
import AvatarCard from './AvatarCard';
import Header from './Header';
import { Box, ThemeProvider } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function App() {
  return (
    <div>
      <MainApp />
    </div>
  );
}
