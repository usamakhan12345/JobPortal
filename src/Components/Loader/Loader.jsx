import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './loader.css'

export default function Loader({show}) {
  return (
    <Box sx={{ display: show}}>
      <CircularProgress className='loader'/>
    </Box>
  );
}