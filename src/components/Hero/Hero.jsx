import React from 'react';
import "./hero.scss";
import {motion} from "framer-motion"

const textVariants={
    initial:{
        x: -500,
        opacity: 0,

    },
    animate :{
        x: 0,
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }

    }
};

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
            <motion.div className='textContainer'variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>MERN STACK</motion.h2>
                <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
                <motion.divdiv variants={textVariants} className='buttons'>
                    <motion.button variants={textVariants}>See the Latest Works</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>

                </motion.divdiv>
                <img src="/scroll.png" alt="" />

            </motion.div>
            </div>
            <div className='slidingTextContainer'>Writer Contant Creator Influencer</div>
            <div className='imageContainer'>
            <img src="/samiru.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;