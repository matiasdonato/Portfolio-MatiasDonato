import "../css/portfolio.css"
import dogsAppImage from "../assets/images/DogsApp.png"
import nftradeImage from "../assets/images/nftrade.png"
import weatherAppImage from "../assets/images/WeatherApp.png"
import blackCloverTattooImage from "../assets/images/BlackCloverTattoo.png"
import SvgInfo from "../assets/icons/svgInfo"
import SvgOpenWindow from "../assets/icons/svgOpenWindow"
import SvgGitHub from "../assets/icons/svgGitHub"
import { useSelector } from "react-redux"



export default function Projects(){

  interface AppState{
    lenguage : string
  }
  
  let {lenguage} = useSelector((state: AppState) => state)

    return (
      <div className="bigPortfolioContainer" >
        {lenguage === "english" ? 
        <div className="portfolioTextContainer animate__animated animate__fadeInLeft" >
          <h2>Portfolio</h2>
          <p>My Projects:</p>
        </div> : 
        <div className="portfolioTextContainer animate__animated animate__fadeInLeft" >
          <h2>Portafolio</h2>
          <p>Mis Projectos:</p>
        </div>}
        
        <div className="portfolioContainerPositionBox animate__animated animate__fadeInRight">
          <div className="portfolioContainer">
              <div className="projectContainer">               
                <img src={nftradeImage} alt="Dogs App Matias Donato" className="projectImage" />
                <div className="projectInfo">
                  <div className="mainProjectInfo">
                    <div className="projectTitleContainer">
                      <h3>NFTRADE</h3>
                    </div>
                    <div className="projectInfoContainer">
                      <a href="https://nftrade-one.vercel.app" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Deploy</p>
                          <SvgOpenWindow className="projectInfoIcon" />
                        </div>
                      </a>
                      <a href="https://www.linkedin.com/posts/mat%C3%ADas-donato-227488224_work-team-react-activity-7027768436130787329-Ou0C?utm_source=share&utm_medium=member_desktop" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Info</p>
                          <SvgInfo className="projectInfoIcon" />
                        </div>
                      </a>
                      <a href="https://github.com/NicoCastagnet/PF-NFTRADE" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Github</p>
                          <SvgGitHub className="projectInfoIcon" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projectContainer">
                <img src={dogsAppImage} alt="Dogs App Matias Donato" className="projectImage" />
                <div className="projectInfo">
                  <div className="mainProjectInfo">
                    <div className="projectTitleContainer">
                      <h3>Dogs App</h3>
                    </div>
                    <div className="projectInfoContainer">
                      <a href="https://dogs-app-matiasdonato.vercel.app" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Deploy</p>
                          <SvgOpenWindow className="projectInfoIcon" />
                        </div>
                      </a>
                      <a href="https://www.linkedin.com/posts/mat%C3%ADas-donato-227488224_javascript-react-redux-activity-7022332674220437504-TZAb?utm_source=share&utm_medium=member_desktop" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Info</p>
                          <SvgInfo className="projectInfoIcon" />
                        </div>
                      </a>
                      <a href="https://github.com/matiasdonato/Dogs-App--PI-Henry" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Github</p>
                          <SvgGitHub className="projectInfoIcon" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projectContainer">
                <img src={weatherAppImage} alt="Dogs App Matias Donato" className="projectImage" />
                <div className="projectInfo">
                  <div className="mainProjectInfo">
                    <div className="projectTitleContainer">
                      <h3>Weather App</h3>
                    </div>
                    <div className="projectInfoContainer">
                      <a href="https://weather-app-matiasdonato.vercel.app" target={"_blank"} rel="noreferrer">
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
                      <a href="https://github.com/matiasdonato/weatherApp" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Github</p>
                          <SvgGitHub className="projectInfoIcon" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="projectContainer">
                <img src={blackCloverTattooImage} alt="Dogs App Matias Donato" className="projectImage" />
                <div className="projectInfo">
                  <div className="mainProjectInfo">
                    <div className="projectTitleContainer">
                      <h3>Black Clover Tattoo</h3>
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
                      <a href="https://github.com/matiasdonato/BlackCloverTattooStudio--HTML-CSS-Project" target={"_blank"} rel="noreferrer">
                        <div className="projectLinkContainer">
                          <p>Github</p>
                          <SvgGitHub className="projectInfoIcon" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
    
}