import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import { FaJs, FaReact, FaNode, FaGit, FaGithub, FaHtml5, FaCss3, FaFigma, FaPython } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiPostgresql, SiAdobephotoshop, SiPostman, SiTailwindcss, SiVercel } from 'react-icons/si';

const iconMapping = {
    javascript: <FaJs />,
    react: <FaReact />,
    mongoDB: <SiMongodb />,
    vercel: <SiVercel />,
    git: <FaGit />,
    postgres: <SiPostgresql />,
    github: <FaGithub />,
    postman: <SiPostman />,
    tailwind: <SiTailwindcss />,
    html5: <FaHtml5 />,
    css3: <FaCss3 />,
    figma: <FaFigma />,
    nodejs: <FaNode />,
    python: <FaPython />,
    firebase: <SiFirebase />,
    'adobe photoshop': <SiAdobephotoshop />,
};

export default function About({ innerRef }) {
    const firstName = info.firstName.toLowerCase();

    function aboutMeText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd about{firstName} </p>
            <p><span style={{ color: info.baseColor }}>about{firstName} <span className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools</p>
            <p><span style={{ color: info.baseColor }}>skills/tools <span className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{ color: info.baseColor }}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => (
                    <li key={index}>{iconMapping[proficiency]} {proficiency}</li>
                ))}
            </ul>
            <p style={{ color: info.baseColor }}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => (
                    <li key={index}>{iconMapping[skill]} {skill}</li>
                ))}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd hobbies/interests</p>
            <p><span style={{ color: info.baseColor }}>hobbies/interests <span className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()} />
            <Terminal text={skillsText()} />
            <Terminal text={miscText()} />
        </Box>
    )
}
