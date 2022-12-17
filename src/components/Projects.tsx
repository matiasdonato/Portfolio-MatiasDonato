import "../css/portfolio.css"
import dogsAppImage from "../assets/images/DogsApp.png"
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
        <div className="portfolioContainer">
            <div className="projectContainer">
              <a href="https://dogs-app-matiasdonato.vercel.app" target={"_blank"} rel="noreferrer">
                <img src={dogsAppImage} alt="Dogs App Matias Donato" className="projectImage" />
                <div className="projectInfo">
                  <div className="mainProjectInfo">
                    <div className="projectTitleContainer">
                      <h3>Dogs App</h3>
                      <a href="https://dogs-app-matiasdonato.vercel.app" target={"_blank"} rel="noreferrer">
                        <SvgOpenWindow className="projectLinkIcon" />
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/in/matías-donato-227488224/details/projects/" target={"_blank"} rel="noreferrer">
                        <SvgInfo className="projectInfoIcon" />
                      </a>
                      <a href="https://github.com/matiasdonato/Dogs-App--PI-Henry" target={"_blank"} rel="noreferrer">
                        <SvgGitHub className="projectInfoIcon" />
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="projectContainer">
              <a href="https://dogs-app-matiasdonato.vercel.app" target={"_blank"} rel="noreferrer">
                <img src={dogsAppImage} alt="Dogs App Matias Donato" className="projectImage" />
                <div className="projectInfo">
                  <div className="mainProjectInfo">
                    <div className="projectTitleContainer">
                      <h3>Dogs App</h3>
                      <a href="https://dogs-app-matiasdonato.vercel.app" target={"_blank"} rel="noreferrer">
                        <SvgOpenWindow className="projectLinkIcon" />
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/in/matías-donato-227488224/details/projects/" target={"_blank"} rel="noreferrer">
                        <SvgInfo className="projectInfoIcon" />
                      </a>
                      <a href="https://github.com/matiasdonato/Dogs-App--PI-Henry" target={"_blank"} rel="noreferrer">
                        <SvgGitHub className="projectInfoIcon" />
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="projectContainer">
              <a href="https://dogs-app-matiasdonato.vercel.app" target={"_blank"} rel="noreferrer">
                <img src={dogsAppImage} alt="Dogs App Matias Donato" className="projectImage" />
                <div className="projectInfo">
                  <div className="mainProjectInfo">
                    <div className="projectTitleContainer">
                      <h3>Dogs App</h3>
                      <a href="https://dogs-app-matiasdonato.vercel.app" target={"_blank"} rel="noreferrer">
                        <SvgOpenWindow className="projectLinkIcon" />
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/in/matías-donato-227488224/details/projects/" target={"_blank"} rel="noreferrer">
                        <SvgInfo className="projectInfoIcon" />
                      </a>
                      <a href="https://github.com/matiasdonato/Dogs-App--PI-Henry" target={"_blank"} rel="noreferrer">
                        <SvgGitHub className="projectInfoIcon" />
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="projectContainer">
              <a href="https://dogs-app-matiasdonato.vercel.app" target={"_blank"} rel="noreferrer">
                <img src={dogsAppImage} alt="Dogs App Matias Donato" className="projectImage" />
                <div className="projectInfo">
                  <div className="mainProjectInfo">
                    <div className="projectTitleContainer">
                      <h3>Dogs App</h3>
                      <a href="https://dogs-app-matiasdonato.vercel.app" target={"_blank"} rel="noreferrer">
                        <SvgOpenWindow className="projectLinkIcon" />
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/in/matías-donato-227488224/details/projects/" target={"_blank"} rel="noreferrer">
                        <SvgInfo className="projectInfoIcon" />
                      </a>
                      <a href="https://github.com/matiasdonato/Dogs-App--PI-Henry" target={"_blank"} rel="noreferrer">
                        <SvgGitHub className="projectInfoIcon" />
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
        </div>
      </div>
    )
    
}