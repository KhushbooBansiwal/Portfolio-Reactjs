import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect,useState } from 'react'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import Loader from 'react-loaders'
const About = () =>{

    const [letterClass, setLetterClass] = useState("text-animate")


    useEffect(() => {
        const timer= setLetterClass(() => {
            setLetterClass('text-animate-hover');
    },3000);
    return() => clearTimeout(timer);

},[]);
    return (
        <>
       
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>I’m a Front-End Developer with 2 years and 8 months of industry experience, inspired by curiosity and creativity. I specialize in building engaging and responsive applications that resonate with users. I’m eager to explore exciting opportunities in the tech industry where I can leverage my skills and passion to create impactful user experiences.</p>
                <p>I’m passionate about connecting with fellow tech enthusiasts to exchange innovative ideas and inspire creativity. If you’re interested in collaborating on exciting projects or sharing insights, let’s connect and turn our visions into extraordinary realities!</p>

            </div>
            <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                <FaReact style={{ color: "#61DAFB ", backgroundColor: "#282C34" }}  />
                </div>
                <div className='face2'>
                <FaHtml5 style={{ color: "#E34F26 ", backgroundColor: "#F7F7F7" }} />


                </div>
                <div className='face3'>
                <IoLogoCss3 style={{ color: "#1572B6 ", backgroundColor: "#F7F7F7" }} />

                </div>
                <div className='face4'>
                <IoLogoJavascript style={{ color: "#F7DF1E ", backgroundColor: "#282C34" }}  />
                 </div>

                 <div className='face5'>
                 <FaGithub style={{ color: "#181717 ", backgroundColor: " #F6F8FA" }}  />
                 </div>

                 
                 <div className='face5'>
                 <SiRedux  style={{ color: "#764ABC ", backgroundColor: " #F7F7F7" }}  />
                 </div>

                </div>
                </div>
        </div>
        <Loader  type ="pacman"/>
        </>
    )
}

export default About