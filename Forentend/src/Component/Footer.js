import React from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material';
import '../assests/common.css'

const Footer = () => {
  return (
    <div>
      <Box
        className='Footerparent'
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
        © 2023 Copyright :  Food
        </Typography>
      </Box>
    </div>
  )
}

export default Footer;