
import SvgLinkedin from "../assets/icons/svgLinkedin"
import "../css/about.css"

export default function AboutMe(){
    return (
      <div className="bigAboutContainer" >
        <div className="aboutTextContainer" >
          <h2>
            About Me
          </h2>
        </div>
        <div className="aboutContainer">
          <div>
            <h5>{"<Matias Donato />"} <b className="yellow">{"<Full Stack Web Developer/>"}</b></h5>
            <p>
              Hi! My name is Matias Donato and im a passionate Full Stack Developer from Argentina. I have experience working with JavaScript, TypeScript, NodeJS, Express, React, Redux, and SQL, among other technologies of the same nature. I can code a website from the ground up, Front or Back, including the database. I consider myself a proactive and creative individual with a positive attitude, strong organizational skills, a dynamic teamwork style, and strong problem-solving abilities. I also have a good handle of Git Flow, a wide capacity for learning, and a good level of english.</p>
          </div>
          <div className="aboutLinksContainer">
            <div className="aboutLinks">
              <SvgLinkedin/> Linkedin
            </div>
            <div className="aboutLinks">
              <SvgLinkedin/> Linkedin
            </div>
            <div className="aboutLinks">
              <SvgLinkedin/> Linkedin
            </div>
            <div className="aboutLinks">
              <SvgLinkedin/> Linkedin
            </div>
            <div className="aboutLinks">
              <SvgLinkedin/> Linkedin
            </div>
            <div className="aboutLinks">
              <SvgLinkedin/> Linkedin
            </div>
          </div>
          <div className="educationAndExperienceContainer">
            <div className="bigAboutInfoContainer">
              <div className="aboutInfoContainer">
                <h5>Experience</h5>
                <div className="aboutInfo">
                  <div className="infoTitle">
                    <h6>Dogs App</h6>
                    <h6>Sept. 19 of 2022 - Oct. 10 of 2022</h6>
                  </div>
                  <p>Design and develop a dog app that included searches, filtering, ordering, and creation with uploading of images</p>
                </div>
                <div className="aboutInfo">
                  <div className="infoTitle">
                    <h6>NFTRADE</h6>
                    <h6>Oct. 17 of 2022 - Nov. 17 of 2022</h6>
                  </div>
                  <p>Design and develop an online market for NFTs that included: login (third-party Auth and user profile creation), payment gateway, searches, filtering by price ranges, sorting (by price or name), graphs based on the transaction history, uploading of images, notifications, email sending, logical delete, use of local storage, reviews, a dashboard, and an admin dashboard.</p>
                </div>
              </div>
              <div className="aboutInfoContainer">
                <h5>Education</h5>
                <div className="aboutInfo">
                  <div className="infoTitle">
                    <h6>Henry Bootcamp</h6>
                    <h6>Jul. 18 of 2022 - Nov. 18 of 2022</h6>
                  </div>
                  <p>Full Stack Web Developer bootcamp. 700 hours of theoretical-practical course. <a href="https://certificates.soyhenry.com/cert?id=9f3ac456-70d8-4f53-b5df-c5adec661fe9" target="_blank" rel="noreferrer" className="yellow">Certificate Link</a></p>
                </div>
                <div className="aboutInfo">
                  <div className="infoTitle">
                    <h6>Coderhouse Web Development Course</h6>
                    <h6>March 17 of 2022 - Jun. 21 of 2022</h6>
                  </div>
                  <p>38 hours of theoretical-practical course. <a href="https://www.coderhouse.com/certificados/62c58d6f5e9e070019dc521d" target="_blank" rel="noreferrer" className="yellow">Certificate Link</a></p>
                </div>
                <div className="aboutInfo">
                  <div className="infoTitle">
                    <h6>Secondary Degree of Computer Technician</h6>
                    <h6>March 3 of 2017 - Dec. 6 of 2021</h6>
                  </div>
                  <p>High school completed at 36 D.E. Technical School N°15 "Alte. Brown" with computer technician orientation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    
}