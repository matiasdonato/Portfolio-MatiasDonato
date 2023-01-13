import "../css/portfolio.css"
import dogsAppImage from "../assets/images/DogsApp.png"
import nftradeImage from "../assets/images/nftrade.png"
import weatherAppImage from "../assets/images/WeatherApp.png"
import blackCloverTattooImage from "../assets/images/BlackCloverTattoo.png"
import SvgInfo from "../assets/icons/svgInfo"
import SvgOpenWindow from "../assets/icons/svgOpenWindow"
import SvgGitHub from "../assets/icons/svgGitHub"


export default function Projects(){
    return (
      <div className="bigPortfolioContainer" >
        <div className="portfolioTextContainer" >
          <h2>Portfolio</h2>
          <p>My Projects:</p>
        </div>
        <div className="portfolioContainerPositionBox">
          <div className="portfolioContainer">
              <div className="projectContainer">
                <a href="https://dogs-app-matiasdonato.vercel.app" target={"_blank"} rel="noreferrer">
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
                        <a href="https://www.linkedin.com/in/matías-donato-227488224/details/projects/" target={"_blank"} rel="noreferrer">
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
                </a>
              </div>
              <div className="projectContainer">
                <a href="https://pf-nftrade.netlify.app" target={"_blank"} rel="noreferrer">
                  <img src={nftradeImage} alt="Dogs App Matias Donato" className="projectImage" />
                  <div className="projectInfo">
                    <div className="mainProjectInfo">
                      <div className="projectTitleContainer">
                        <h3>NFTRADE</h3>
                      </div>
                      <div className="projectInfoContainer">
                        <a href="https://pf-nftrade.netlify.app" target={"_blank"} rel="noreferrer">
                          <div className="projectLinkContainer">
                            <p>Deploy</p>
                            <SvgOpenWindow className="projectInfoIcon" />
                          </div>
                        </a>
                        <a href="https://www.linkedin.com/in/matías-donato-227488224/details/projects/" target={"_blank"} rel="noreferrer">
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
                </a>
              </div>
              <div className="projectContainer">
                <a href="https://weather-app-matiasdonato.vercel.app" target={"_blank"} rel="noreferrer">
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
                        <a href="https://www.linkedin.com/in/matías-donato-227488224/details/projects/" target={"_blank"} rel="noreferrer">
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
                </a>
              </div>
              <div className="projectContainer">
                <a href="https://black-clover-tattoo.netlify.app" target={"_blank"} rel="noreferrer">
                  <img src={blackCloverTattooImage} alt="Dogs App Matias Donato" className="projectImage" />
                  <div className="projectInfo">
                    <div className="mainProjectInfo">
                      <div className="projectTitleContainer">
                        <h3>Weather App</h3>
                      </div>
                      <div className="projectInfoContainer">
                        <a href="https://black-clover-tattoo.netlify.app" target={"_blank"} rel="noreferrer">
                          <div className="projectLinkContainer">
                            <p>Deploy</p>
                            <SvgOpenWindow className="projectInfoIcon" />
                          </div>
                        </a>
                        <a href="https://www.linkedin.com/in/matías-donato-227488224/details/projects/" target={"_blank"} rel="noreferrer">
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
                </a>
              </div>
          </div>
        </div>
      </div>
    )
    
}