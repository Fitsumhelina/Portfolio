    import self from "../img/profile .jpg"
    import mock1 from "../img/mock1.png"
    import mock2 from "../img/mock2.png"
    import mock3 from "../img/mock3.png"
    import mock4 from "../img/mock4.png"
    import mock5 from "../img/mock5.png"
import { Details } from "@mui/icons-material"

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
        miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
            {
                emoji: '☕',
                text: 'fueled by coffee'
            },
            {
                emoji: '🌎',
                text: 'based in Ethiopia'
            },
            {
                emoji: "💼",
                text: "Software Engineer"
            },
            {
                emoji: "📧",
                text: "dev.fitsum@gmail.com"
            }
        ],
        
        socials: [
            {
                link: "https://facebook.com",
                icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111646.png  ',
                label: 'telegram'
            },
            {
                link: "https://instagram.com",
                icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
                label: 'instagram'
            },
            {
                link: "https://github.com",
                icon: "https://cdn-icons-png.flaticon.com/128/2111/2111432.png",
                label: 'github'
            },
            {
                link: "https://linkedin.com",
                icon: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
                label: 'linkedin'
            },
            {
                link: "https://linkedin.com",
                icon: "https://cdn-icons-png.flaticon.com/128/15707/15707820.png",
                label: 'Whatsapp'
            }
        
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.

        ],
        bio: "I am a Mern Stack developer and president of my university club(TechTonic Tribe), currently studying BCA in software engineering. Alongside my coursework, I work on numerous real-world side projects and Internship.",
        skills:
            {
                proficientWith: ['javascript', 'react','mongoDB','vercel', 'git','adobe illustrator', 'github', 'bootstrap','tailwind', 'html5', 'css3', 'figma'],
                exposedTo: ['nodejs', 'python','firebase', 'adobe photoshop' ]
            }
        ,
        hobbies: [
            {
                label: 'reading',
                emoji: '📖'
            },
            {
                label: 'teaching',
                emoji: '👨‍🏫'
            },
            {
                label: 'movies',
                emoji: '🎥'
            },
            {
                label: 'biking',
                emoji: '🚲'
            }
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
        ],
        portfolio: [ // This is where your portfolio projects will be detailed
            {
                title: "TechTonic Tribe portfolio",
                live: "https://front-end-virid-eight.vercel.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
                source: "https://github.com/Fitsumhelina/TechTonic-Tribe.git", // this should be a link to the **repository** of the project, where the code is hosted.
                image: mock1,
                Details:"Landing page for tech club in the universty made by using REACT,CSS"
            },
            {
                title: "Blog website ",
                live: "https://front-end-virid-eight.vercel.app/blog", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
                source: "https://github.com/Fitsumhelina/TechTonic-Tribe.git", // this should be a link to the **repository** of the project, where the code is hosted.
                Details:"Proresive Blog WedApp made by using REACT,TAILWID,EPRESS.JS and MONGODB",
                image: mock3
            },
            {
                title: "Student Dashbord",
                live: "https://front-end-virid-eight.vercel.app/dashboard", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
                source: "https://github.com/Fitsumhelina/TechTonic-Tribe.git", // this should be a link to the **repository** of the project, where the code is hosted.
                Details:"Resourcefull Website To help the student to get the Best Material made by using REACT,CSS,JAVASCRIPT,MONGODB",
                image: mock2
            },
            {
                title: "Real time chat ",
                live: "https://front-end-virid-eight.vercel.app/chat", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
                source: "https://github.com/Fitsumhelina/TechTonic-Tribe.git", // this should be a link to the **repository** of the project, where the code is hosted.
                Details:"Real Time Chat app Use for Comminication Made by using React,Firebase,CSS",
                image: mock4
            },
            {
                title: "Student Registartion Managment system ",
                source: "https://github.com/Fitsumhelina/Student-Registration-system.git", // this should be a link to the **repository** of the project, where the code is hosted.
                Details:"Advanced stuednt managment systemin During registration Using PYTHON oop",
                image: mock5
            }
        ]
    }