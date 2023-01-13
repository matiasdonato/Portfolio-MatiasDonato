
import SvgLinkedin from "../assets/icons/svgLinkedin"
import Resume from "../assets/files/Full-Stack-Developer-Resume-Matias-Donato.pdf"
import "../css/about.css"
import SvgGitHub from "../assets/icons/svgGitHub"
import SvgMail from "../assets/icons/svgMail"
import SvgFile from "../assets/icons/svgFile"
import SvgPhone from "../assets/icons/svgPhone"
import SvgLocation from "../assets/icons/svgLocation"

export default function AboutMe(){
    return (
      <div className="bigAboutContainer" >
        <div className="aboutTextContainer" >
          <h2>
            About Me
          </h2>
        </div>
        <div className="aboutContainer">
          <div className="descriptionContainer">
            <h5>{"<Matias Donato />"} <b className="yellow">{"<Full Stack Web Developer/>"}</b></h5>
            <p>
              Hi! My name is Matias Donato and im a passionate Full Stack Developer from Argentina. I have experience working with JavaScript, TypeScript, NodeJS, Express, React, Redux, and SQL, among other technologies of the same nature. I can code a website from the ground up, Front or Back, including the database. I consider myself a proactive and creative individual with a positive attitude, strong organizational skills, a dynamic teamwork style, and strong problem-solving abilities. I also have a good handle of Git Flow, a wide capacity for learning, and a good level of english.</p>
          </div>
          <div className="aboutLinksContainer">
            <div className="aboutLinks">
              <SvgLinkedin className="aboutLinkIcon"/> 
              <div className="aboutLinkInfo">
                <h3>Linkedin:</h3> 
                <a href="https://www.linkedin.com/in/matías-donato-227488224/" target={"_blank"} rel="noreferrer">Matias Donato</a></div>
            </div>
            <div className="aboutLinks">
              <SvgGitHub className="aboutLinkIcon"/> 
              <div className="aboutLinkInfo">
                <h3>GitHub:</h3>
                <a href="https://github.com/matiasdonato" target={"_blank"} rel="noreferrer">matiasdonato</a>
              </div>
            </div>
            <div className="aboutLinks">
              <SvgMail className="aboutLinkIcon"/>
              <div className="aboutLinkInfo">
                <h3>Mail:</h3>
                <p>matiasdonato14@gmail.com</p>
              </div>
            </div>
            <div className="aboutLinks">
              <SvgPhone className="aboutLinkIcon"/>
              <div className="aboutLinkInfo">
                <h3>Phone:</h3>
                <p>+54 9 11 6209-1233</p>
              </div> 
            </div>
            <div className="aboutLinks">
              <SvgFile className="aboutLinkIcon"/>
              <div className="aboutLinkInfo">
              <a href={Resume} download="Resume Matias Donato Full Stack Web Developer">
                <h3>Resume</h3>
              </a>
              </div> 
            </div>
            <div className="aboutLinks">
              <SvgLocation className="aboutLinkIcon"/> 
              <div className="aboutLinkInfo">
                <h3>Location:</h3>
                <p>CABA - Buenos Aires</p>
              </div>
            </div>
          </div>
          <div className="educationAndExperienceContainer">
            <div className="bigAboutInfoContainer">
              <div className="aboutInfoContainer">
                <h5>Experience</h5>
                <div className="aboutLineAndInfo">
                  <hr className="aboutInfoLine" />
                  <div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">Dogs App</h6>
                        <h6 className="infoTitleDate">Sept. 19 of 2022 - Oct. 10 of 2022</h6>
                      </div>
                      <p>Design and develop a dog app that included searches, filtering, ordering, and creation with uploading of images</p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">NFTRADE</h6>
                        <h6 className="infoTitleDate">Oct. 17 of 2022 - Nov. 17 of 2022</h6>
                      </div>
                      <p>Design and develop an online market for NFTs that included: login (third-party Auth and user profile creation), payment gateway, searches, filtering by price ranges, sorting (by price or name), graphs based on the transaction history, uploading of images, notifications, email sending, logical delete, use of local storage, reviews, a dashboard, and an admin dashboard.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aboutInfoContainer">
                <h5>Education</h5>
                <div className="aboutLineAndInfo">
                  <hr className="aboutInfoLine" />
                  <div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">Henry Bootcamp</h6>
                        <h6 className="infoTitleDate">Jul. 18 of 2022 - Nov. 18 of 2022</h6>
                      </div>
                      <p>Full Stack Web Developer bootcamp. 700 hours of theoretical-practical course. <a href="https://certificates.soyhenry.com/cert?id=9f3ac456-70d8-4f53-b5df-c5adec661fe9" target="_blank" rel="noreferrer" className="yellow">Certificate Link</a></p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">Coderhouse Web Development Course</h6>
                        <h6 className="infoTitleDate">March 17 of 2022 - Jun. 21 of 2022</h6>
                      </div>
                      <p>38 hours of theoretical-practical course. <a href="https://www.coderhouse.com/certificados/62c58d6f5e9e070019dc521d" target="_blank" rel="noreferrer" className="yellow">Certificate Link</a></p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">Secondary Degree of Computer Technician</h6>
                        <h6 className="infoTitleDate">March 3 of 2017 - Dec. 6 of 2021</h6>
                      </div>
                      <p>High school completed at 36 D.E. Technical School N°15 "Alte. Brown" with computer technician orientation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutLenguageContainer">
                <h5>Lenguages</h5>
                <div className="aboutLineAndInfo">
                  <hr className="aboutInfoLine" />
                  <div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">English</h6>
                      </div>
                      <p>C1</p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">Spanish</h6>
                      </div>
                      <p>Native</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    )
    
}