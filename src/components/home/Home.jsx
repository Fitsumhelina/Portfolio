import React from "react";
import Style from "./Home.module.scss";
import me from "../../img/profile .jpg";
import classNames from "classnames";
import EmojiBullet from "./EmojiBullet";
import {Box} from '@mui/material';
import { info } from "../../info/Info";
import { motion } from 'framer-motion';
import DocumentsButton from "../button/DocumentsButton";
import SendButton from "../button/SendButton";

const jiggle = {
   animate: {
     x: [0, -5, 5, 0],
     y: [0, -5, 5, 0],
     transition: {
       duration: 5.5,
       repeat: Infinity,
       repeatType: 'loop',
     },
   },
 };
 
 const hoverTapVariants = {
   hover: { scale: 1.05 },
   tap: { scale: 0.95 },
 };
export default function Home({ innerRef }) {
   
  return (
    <Box
    variants={jiggle}
      animate="animate"
      ref={innerRef}
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"80px"}
      minHeight={"calc(100vh - 175px)"}
      id={"home"}
    >
   <motion.div
      variants={jiggle}
      animate="animate"
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div
        variants={hoverTapVariants}
      >
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        alt={"image of developer"}
        style={{ background: info.gradient }}
        component={"img"}
        src={me}
        width={{ xs: "35vh", md: "50vh" }}
        height={{ xs: "35vh", md: "50vh" }}
        p={"0.75rem"}
        mb={{ xs: "1rem", sm: 0 }}
        mr={{ xs: 0, md: "2rem" }}
        />
        </motion.div>
        </motion.div>
      <Box>
        <h1>
          Hi, I'm {" "}
          <span
            style={{
              background: info.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {info.firstName}
          </span>
          
          <span className={Style.hand}>🤚</span>
        </h1>
        <h2>I'm {info.position}.</h2>
        <Box component={"ul"} p={"1rem"}>
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box display={"flex"} gap={"20px"}>
         <SendButton/>
         <DocumentsButton/>
        </Box>
       
      </Box>
    </Box>
  );
}
