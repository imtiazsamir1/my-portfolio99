import React from 'react';
import "./services.scss";
import {motion} from "framer-motion"
const Services = () => {
    return (
        <motion.div className='services'>
            <motion.div className="textContainer">
                <p>I Focus on helping your brand grow <br/>and move froward</p>
                <hr/>
            </motion.div>
            <motion.div className="titleContainer">
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><b>Unique</b></h1>
                </div>
                <div className="title">
                   
                    <h1><b>For Your</b>Business.</h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer">
                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et obcaecati quis nam saepe architecto voluptatem itaque voluptatum quisquam ducimus in.</p>
                    <button>GO</button>
                </motion.div>
                <motion.div className="box"whileHover={{background:"lightgray",color:"black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et obcaecati quis nam saepe architecto voluptatem itaque voluptatum quisquam ducimus in.</p>
                    <button>GO</button>
                </motion.div>
                <motion.div className="box"whileHover={{background:"lightgray",color:"black"}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et obcaecati quis nam saepe architecto voluptatem itaque voluptatum quisquam ducimus in.</p>
                    <button>GO</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}} >
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et obcaecati quis nam saepe architecto voluptatem itaque voluptatum quisquam ducimus in.</p>
                    <button>GO</button>
                </motion.div>
            </motion.div>
            Services
        </motion.div>
    );
};

export default Services;