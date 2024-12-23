import self from "../img/profile .jpg";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.jpg";
import mock6 from "../img/mock6.png";
import { Details } from "@mui/icons-material";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
    how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
    I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
    These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
    the site.
    */

/* 
    This variable will change the layout of the website from multipage to single, scrollable page
    */
export let singlePage = false;

/*
    So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
    that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
    of what each of the values mean.
    */

export const info = {
  firstName: "Fitsum",
  lastName: "Helina",
  initials: "js", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "🌎",
      text: "based in Ethiopia",
    },
    {
      emoji: "💼",
      text: "Software Engineer",
    },
    {
      emoji: "✨",
      text: "Active Communicator",
    },
    {
      emoji: "🎯",
      text: "Passionate Developer",
    },
  ],

  bio: "I am a Mern Stack developer and president of my university club(TechTonic Tribe), currently studying BCA in software engineering. Alongside my coursework, I work on numerous real-world side projects and Internship.",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "mongoDB",
      "vercel",
      "git",
      "postgres",
      "github",
      "postman",
      "nodejs",
      "html5",
      "css3",
      "figma",
    ],
    exposedTo: ["tailwind", "python", "firebase", "adobe photoshop"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "teaching",
      emoji: "👨‍🏫",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "biking",
      emoji: "🚲",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "TechTonic Tribe portfolio",
      live: "https://front-end-virid-eight.vercel.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/Fitsumhelina/TechTonic-Tribe.git", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
      Details:
        "Landing page for tech club in the universty made by using REACT,CSS",
    },
    {
      title: "Blog website ",
      live: "https://front-end-virid-eight.vercel.app/blog", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/Fitsumhelina/TechTonic-Tribe.git", // this should be a link to the **repository** of the project, where the code is hosted.
      Details:
        "Progressive Blog WedApp made by using REACT,TAILWID,EPRESS.JS and MONGODB",
      image: mock3,
    },
    {
      title: "Student Dashbord",
      live: "https://front-end-virid-eight.vercel.app/dashboard", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/Fitsumhelina/TechTonic-Tribe.git", // this should be a link to the **repository** of the project, where the code is hosted.
      Details:
        "Resourcefull Website To help the student to get the Best Material made by using REACT,CSS,JAVASCRIPT,MONGODB",
      image: mock2,
    },
    {
      title: "Real time chat ",
      live: "https://front-end-virid-eight.vercel.app/chat", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/Fitsumhelina/TechTonic-Tribe.git", // this should be a link to the **repository** of the project, where the code is hosted.
      Details:
        "Real Time Chat app Use for Comminication Made by using React,Firebase,CSS",
      image: mock4,
    },
    {
      title: "Business Directory",
      source: "https://github.com/Fitsumhelina/business-directory-backend", // this should be a link to the **repository** of the project, where the code is hosted.
      Details:
        "I was the Backend developer in Advanced and flexible Business Directory system ",
      image: mock5,
    },
    {
      title: "Club's landing page",
      live: "https://techtonictribe.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/Fitsumhelina/TechTonic-Landing.git", // this should be a link to the **repository** of the project, where the code is hosted.
      Details:
        "Fully responsive landing page for the club made by using REACT,Tailwind",
      image: mock6,
    },
  ],
};
