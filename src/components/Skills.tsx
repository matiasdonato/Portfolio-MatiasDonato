import "../css/skills.css"
import HTML from "../assets/images/HTML.svg.png"
import CSS from "../assets/images/CSS3_logo.svg.png"
import JS from "../assets/images/JS.png"
import TS from "../assets/images/TS.png"
import React from "../assets/images/React-icon.svg.png"
import Redux from "../assets/images/redux.png"
import ReactNative from "../assets/images/ReactNative.jpg"
import Next from "../assets/images/next.png"
import Node from "../assets/images/node.png"
import Express from "../assets/images/express.png"
import Postgre from "../assets/images/postgreSQL.png"
import MySQl from "../assets/images/mysql.png"
import Sequelize from "../assets/images/sequelize.png"
import Primsa from "../assets/images/prisma.png"
import Tailwind from "../assets/images/tailwind.png"
import Bootstrap from "../assets/images/bootstrap.png"
import SASS from "../assets/images/sass.png"
import Git from "../assets/images/git.png"
import Github from "../assets/images/github.png"
import Figma from "../assets/images/figma.png"
import Balsamiq from "../assets/images/balsamiq.png"
import Photoshop from "../assets/images/photoshop.png"
import Scrum from "../assets/images/scrum.png"
import SEO from "../assets/images/SEO.png"
import SQLite from "../assets/images/sqlite.png"
import Postman from "../assets/images/postman.png"




export default function Skills(){
    return (
      <div className="bigSkillsContainer" >
        <div className="skillsTextContainer" >
          <h2>Skills</h2>
        </div>
        <div className="skillsContainer">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={HTML} alt="HTML Logo" className="skillsIcons" />
            <p>HTML</p>
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={CSS} alt="HTML Logo" className="skillsIcons" />
            <p>CSS</p>
          </a>
          <a href="https://www.javascript.com/about" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={JS} alt="HTML Logo" className="skillsIcons" />
            <p>JavaScript</p>
          </a>
          <a href="https://www.typescriptlang.org" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={TS} alt="HTML Logo" className="skillsIcons" />
            <p>TypeScript</p>
          </a>
          <a href="https://reactjs.org" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={React} alt="HTML Logo" className="skillsIcons" />
            <p>React</p>
          </a>
          <a href="https://redux.js.org" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Redux} alt="HTML Logo" className="skillsIcons" />
            <p>Redux</p>
          </a>
          <a href="https://reactnative.dev" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={ReactNative} alt="HTML Logo" className="skillsIcons" />
            <p>React Native</p>
          </a>
          <a href="https://nodejs.org/en/about/" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Node} alt="HTML Logo" className="skillsIcons" />
            <p>Node.js</p>
          </a>
          <a href="https://nextjs.org" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Next} alt="HTML Logo" className="skillsIcons" />
            <p>Next.js</p>
          </a>
          <a href="https://expressjs.com" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Express} alt="HTML Logo" className="skillsIcons" />
            <p>Express</p>
          </a>
          <a href="https://sequelize.org" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Sequelize} alt="HTML Logo" className="skillsIcons" />
            <p>Sequelize</p>
          </a>
          <a href="https://www.postgresql.org/about/" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Postgre} alt="HTML Logo" className="skillsIcons" />
            <p>PostgreSQL</p>
          </a>
          <a href="https://www.mysql.com" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={MySQl} alt="HTML Logo" className="skillsIcons" />
            <p>MySQl</p>
          </a>
          <a href="https://sqlite.org/index.html" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={SQLite} alt="HTML Logo" className="skillsIcons" />
            <p>SQLite</p>
          </a>  
          <a href="https://www.prisma.io" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Primsa} alt="HTML Logo" className="skillsIcons" />
            <p>Primsa</p>
          </a>
          <a href="https://tailwindcss.com" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Tailwind} alt="HTML Logo" className="skillsIcons" />
            <p>Tailwind</p>
          </a>
          <a href="https://getbootstrap.com" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Bootstrap} alt="HTML Logo" className="skillsIcons" />
            <p>Bootstrap</p>
          </a>
          <a href="https://sass-lang.com" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={SASS} alt="HTML Logo" className="skillsIcons" />
            <p>SASS</p>
          </a>
          <a href="https://git-scm.com" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Git} alt="HTML Logo" className="skillsIcons" />
            <p>Git</p>
          </a>
          <a href="https://github.com/about" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Github} alt="HTML Logo" className="skillsIcons" />
            <p>GitHub</p>
          </a>
          <a href="https://www.figma.com" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Figma} alt="HTML Logo" className="skillsIcons" />
            <p>Figma</p>
          </a>
          <a href="https://balsamiq.com" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Balsamiq} alt="HTML Logo" className="skillsIcons" />
            <p>Balsamiq</p>
          </a>
          <a href="https://www.scrum.org" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Scrum} alt="HTML Logo" className="skillsIcons" />
            <p>Scrum</p>
          </a>
          <a href="https://www.postman.com" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Postman} alt="HTML Logo" className="skillsIcons" />
            <p>Postman</p>
          </a>
          <a href="https://developer.mozilla.org/es/docs/Glossary/SEO" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={SEO} alt="HTML Logo" className="skillsIcons" />
            <p>SEO</p>
          </a>
          <a href="https://helpx.adobe.com/support/photoshop.html" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Photoshop} alt="HTML Logo" className="skillsIcons" />
            <p>Photoshop</p>
          </a>
        </div>
      </div>
    )
    
}