import React from 'react';
import {Box} from "@mui/material";

export default function Toggler({darkMode, handleClick}) {
    const transition = 'all 250ms ease'

   return (
      <Box fontSize={'1.5rem'} sx={{cursor: 'pointer', ":hover": {transform: 'translateY(-3px)', transition: transition}}}>
         {
            darkMode ?
               <span onClick={handleClick} aria-label="Full Moon" role="img"><img src="https://cdn-icons-png.flaticon.com/128/2698/2698194.png" alt="" height="30" /></span>
               :
               <span onClick={handleClick} aria-label="New Moon" role="img"><img src="https://cdn-icons-png.flaticon.com/128/547/547433.png" alt="" height="30" /></span>
         }
      </Box>
   )
}