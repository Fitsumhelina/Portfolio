import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import styles from "./PortfolioBlock.module.scss";

function PortfolioBlock(props) {
   const { image, live, source, title, details } = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <div className={styles.cardContainer}>
            <div className={styles.card}>
               <img
                  src={image}
                  className={styles.imgContent}
                  alt={'mockup'}
               />
               <div className={styles.content}>
                  <p className={styles.detail}>{details}</p>
               </div>


            </div>
         </div>
         <h2 className={styles.topic}>{title}</h2>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;
