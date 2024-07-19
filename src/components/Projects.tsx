import "../css/portfolio.css"
import bestia from "../assets/images/bestia.png"
import migra from "../assets/images/migra.png"
import minerva from "../assets/images/minerva.png"
import vulk from "../assets/images/vulk.png"
import SvgInfo from "../assets/icons/svgInfo"
import SvgOpenWindow from "../assets/icons/svgOpenWindow"
import SvgGitHub from "../assets/icons/svgGitHub"
import { useSelector } from "react-redux"
import { useState } from "react"



export default function Projects(){

  interface AppState{
    lenguage : string
  }
  
  let {lenguage} = useSelector((state: AppState) => state)

  const [showGithubSpan, setShowGithubSpan] = useState(true)

    return (
      <div className="bigPortfolioContainer" >
        {lenguage === "english" ? 
        <div className="portfolioTextContainer animate__animated animate__fadeInLeft" >
          <h2>Portfolio</h2>
          <p>Projects I worked on:</p>
        </div> : 
        <div className="portfolioTextContainer animate__animated animate__fadeInLeft" >
          <h2>Portafolio</h2>
          <p>Proyectos en los que trabaje:</p>
        </div>}
        {
          showGithubSpan && 
          <div className="githubModalInfoContainer animate__animated animate__bounceIn link2">
            <div className="githubModalInfo">
              <button onClick={() => setShowGithubSpan(false)}>x</button>
              {lenguage === "english" ?
                <span>Due to privacy reasons, GitHub repositories are not available</span> :
                <span>Por cuestiones de privacidad, los repositorios de GitHub no se encuentran disponibles</span>
              }
            </div>
          </div>
        }
        <div className="portfolioContainerPositionBox animate__animated animate__fadeInRight">
          <div className="portfolioContainer">
              <div className="projectContainer">               
                <img src={bestia} alt="Bestia Matias Donato" className="projectImage" />
                <div className="projectInfo">
                  <div className="mainProjectInfo">
                    <div className="projectTitleContainer">
                      <h3>BESTIA</h3>
                    </div>
                    <div className="projectInfoContainer">
                      <a href="https://bestianegra.com" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Deploy</p>
                          <SvgOpenWindow className="projectInfoIcon" />
                        </div>
                      </a>
                      <a href="https://www.linkedin.com/in/matias-donato-291579316/details/projects/" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Info</p>
                          <SvgInfo className="projectInfoIcon" />
                        </div>
                      </a>
                      {/* <a href="https://github.com/matiasdonato/bestia-project" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Github</p>
                          <SvgGitHub className="projectInfoIcon" />
                        </div>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="projectContainer">
                <img src={vulk} alt="Vulk Matias Donato" className="projectImage" />
                <div className="projectInfo">
                  <div className="mainProjectInfo">
                    <div className="projectTitleContainer">
                      <h3>Vulk</h3>
                    </div>
                    <div className="projectInfoContainer">
                      <a href="https://vulkeyewear.com" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Deploy</p>
                          <SvgOpenWindow className="projectInfoIcon" />
                        </div>
                      </a>
                      <a href="https://www.linkedin.com/in/matias-donato-291579316/details/projects/" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Info</p>
                          <SvgInfo className="projectInfoIcon" />
                        </div>
                      </a>
                      {/* <a href="https://github.com/matiasdonato/vulk-project" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Github</p>
                          <SvgGitHub className="projectInfoIcon" />
                        </div>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="projectContainer">
                <img src={migra} alt="Migra Matias Donato" className="projectImage" />
                <div className="projectInfo">
                  <div className="mainProjectInfo">
                    <div className="projectTitleContainer">
                      <h3>Migra</h3>
                    </div>
                    <div className="projectInfoContainer">
                      <a href="https://migramigra.com" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Deploy</p>
                          <SvgOpenWindow className="projectInfoIcon" />
                        </div>
                      </a>
                      <a href="https://www.linkedin.com/in/matias-donato-291579316/details/projects/" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Info</p>
                          <SvgInfo className="projectInfoIcon" />
                        </div>
                      </a>
                      {/* <a href="https://github.com/matiasdonato/migra-project" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Github</p>
                          <SvgGitHub className="projectInfoIcon" />
                        </div>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="projectContainer">
                <img src={minerva} alt="Minerva Matias Donato" className="projectImage" />
                <div className="projectInfo">
                  <div className="mainProjectInfo">
                    <div className="projectTitleContainer">
                      <h3>Minerva</h3>
                    </div>
                    <div className="projectInfoContainer">
                      <a href="https://black-clover-tattoo.netlify.app" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Deploy</p>
                          <SvgOpenWindow className="projectInfoIcon" />
                        </div>
                      </a>
                      <a href="https://www.linkedin.com/in/matias-donato-291579316/details/projects/" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Info</p>
                          <SvgInfo className="projectInfoIcon" />
                        </div>
                      </a>
                      {/* <a href="https://github.com/matiasdonato/minerva-project" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Github</p>
                          <SvgGitHub className="projectInfoIcon" />
                        </div>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
    
}