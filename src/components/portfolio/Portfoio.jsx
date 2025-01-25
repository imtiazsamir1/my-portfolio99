import "./portfolio.scss"
import React, { useRef } from 'react';
import {motion,useScroll,useSpring, useTransform} from "framer-motion";

const items =[
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
        id:2,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
        id:3,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
        id:4,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
];
const Single =({item}) =>{

const ref= useRef()

const {scrollYProgress}= useScroll({terget:ref,
    //offset:["start start","end start"]
 });

 const scaleX =useSpring(scrollYProgress,
    {
        stiffness: 100,
        damping: 30,
    }
)

const y= useTransform(scrollYProgress,[0,1],[-100,100]);



    return(
<section >
    <div className="container">
        <div className="wrapper">
            <div className="imageContainer"ref={ref}>

        
        <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{y}}>
            <h2 >{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
        </motion.div>
        </div>
    </div>
</section>
    )
}


const Portfoio = () => {
    
const ref = useRef()


/*ll*/

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{}} className="progressBar"></motion.div>
            </div>
            {items.map((item)=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Portfoio;