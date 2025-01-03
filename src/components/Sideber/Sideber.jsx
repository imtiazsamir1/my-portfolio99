import Links from "./Links/Links";
import "./sideber.scss"
import ToggleButton from "./ToggleButton/ToggleButton";
import{useState} from "react";
import{delay, motion} from "framer-motion";


const Sideber = () => {
const [open,setOpen]=useState(false)

const variants={
    open:{
        clipPath:"circle(1200 at 50px 50px)",
        transition:{
            type:"spring",
            stiffness:400,
        }
    },
    closed:{
        clipPath:"circle(30px at 50px 50px)",
        transition:{
            delay:0.5,
            type:"spring",
            stiffness:80,
            damping:40,
        }
    }
}



    return (
        <motion.div className="sideber" animate={open ? "open":"closed"}>
           <motion.div className="bg" variants={variants}><Links></Links>
            </motion.div> 
            <ToggleButton setOpen={setOpen }>

            </ToggleButton>
        </motion.div>
    );
};

export default Sideber;