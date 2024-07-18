/* eslint-disable jsx-a11y/img-redundant-alt */
import "../css/home.css"
import profilePhoto from "../assets/images/profilePhoto.png"
import SvgLinkedin from "../assets/icons/svgLinkedin"
import SvgGitHub from "../assets/icons/svgGitHub"
import SvgFile from "../assets/icons/svgFile"

import Resume from "../assets/files/Full-Stack-Developer-Resume-Matias-Donato.pdf"
import CV from "../assets/files/Full-Stack-Developer-CV-Matias-Donato.pdf"
import { useSelector } from "react-redux"



export default function Home(){

  interface AppState{
    lenguage : string
  }
  
  let {lenguage} = useSelector((state: AppState) => state)

  if(lenguage === "english"){
    return (
      <div className="bigHomeContainer">
        <div className="homeContainer animate__animated animate__fadeInRight">
          <div className="profilePhotoContainer">
            <img className="photo" src={profilePhoto} alt="My Photo" />
          </div>
          <div className="dataContent">
            <div className="homeWelcomeText">
              <h2>Hello World!</h2>
              <h3>My name is <b className="yellow">Matias Donato</b> and I'm a <b className="yellow">Full Stack Web Developer</b></h3>
            </div>
            <div className="homeContent">
              <div className="bigProfileIconsContainer">
                <div>
                  {/* <p>I am a Web Developer from Argentina, experienced with React, Redux, Node.js, Express, PostgreSQL,  Sequelize, Next.js, Tailwind, and more techs from the same nature</p>  */}
                  <a href="https://www.linkedin.com/in/matias-donato-291579316/" target="_blank" rel="noreferrer">
                    <div className="profileIconsContainer">
                      <SvgLinkedin className="profileIcons" />
                    </div>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/matiasdonato" target="_blank" rel="noreferrer">
                    <div className="profileIconsContainer">
                      <SvgGitHub className="profileIcons" />
                    </div>
                  </a>
                </div>
                <div>
                  <a href={Resume} download="Resume Matias Donato Full Stack Web Developer">
                    <div className="profileIconsContainer">
                      <SvgFile className="profileIcons" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    )
  }else{
    return (
      <div className="bigHomeContainer">
        <div className="homeContainer animate__animated animate__fadeInRight">
          <div className="profilePhotoContainer">
            <img className="photo" src={profilePhoto} alt="My Photo" />
          </div>
          <div className="dataContent">
            <div className="homeWelcomeText">
              <h2>Hola Mundo!</h2>
              <h3>Mi nombre es <b className="yellow">Matias Donato</b> y soy <b className="yellow">Desarrollador Web Full Stack</b></h3>
            </div>
            <div className="homeContent">
              <div className="bigProfileIconsContainer">
                <div>
                  {/* <p>I am a Web Developer from Argentina, experienced with React, Redux, Node.js, Express, PostgreSQL,  Sequelize, Next.js, Tailwind, and more techs from the same nature</p>  */}
                  <a href="https://www.linkedin.com/in/matias-donato-291579316/" target="_blank" rel="noreferrer">
                    <div className="profileIconsContainer">
                      <SvgLinkedin className="profileIcons" />
                    </div>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/matiasdonato" target="_blank" rel="noreferrer">
                    <div className="profileIconsContainer">
                      <SvgGitHub className="profileIcons" />
                    </div>
                  </a>
                </div>
                <div>
                  <a href={CV} download="CV Matias Donato Full Stack Web Developer">
                    <div className="profileIconsContainer">
                      <SvgFile className="profileIcons" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    )
  }
    
    
}