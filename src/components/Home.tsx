/* eslint-disable jsx-a11y/img-redundant-alt */
import "../css/home.css"
import profilePhoto from "../assets/images/profilePhoto.png"
import SvgLinkedin from "../assets/icons/svgLinkedin"
import SvgGitHub from "../assets/icons/svgGitHub"
import SvgFile from "../assets/icons/svgFile"

import Resume from "../assets/files/Full-Stack-Developer-Resume-Matias-Donato.pdf"

export default function Home(){
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
                  <a href="https://www.linkedin.com/in/matías-donato-227488224/" target="_blank" rel="noreferrer">
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
    
}