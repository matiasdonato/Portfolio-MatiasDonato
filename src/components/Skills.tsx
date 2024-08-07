import "../css/skills.css"
import HTML from "../assets/images/HTML.svg.png"
import CSS from "../assets/images/CSS3_logo.svg.png"
import JS from "../assets/images/JS.png"
import TS from "../assets/images/TS.png"
import React from "../assets/images/React-icon.svg.png"
import Redux from "../assets/images/redux.png"
import Next from "../assets/images/next.png"
import Node from "../assets/images/node.png"
import Express from "../assets/images/express.png"
import Nest from "../assets/images/nest.png"
import Postgre from "../assets/images/postgreSQL.png"
import MySQl from "../assets/images/mysql.png"
import Sequelize from "../assets/images/sequelize.png"
import Tailwind from "../assets/images/tailwind.png"
import Bootstrap from "../assets/images/bootstrap.png"
import Git from "../assets/images/git.png"
import Github from "../assets/images/github.png"
import Azure from "../assets/images/azure.png"
import Figma from "../assets/images/figma.png"
import Jest from "../assets/images/jest.png"
import mongodb from "../assets/images/mongodb.png"
import AWS from "../assets/images/AWS.png"
import DynamoDB from "../assets/images/DynamoDB.png"
import Docker from "../assets/images/docker.png"




export default function Skills(){
    return (
      <div className="bigSkillsContainer" >
        <div className="skillsTextContainer animate__animated animate__fadeInLeft" >
          <h2>Skills</h2>
        </div>
        <div className="skillsContainer animate__animated animate__backInUp">
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
          <a href="https://nextjs.org" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Next} alt="HTML Logo" className="skillsIcons" />
            <p>Next.js</p>
          </a>
          <a href="https://nodejs.org/en/about/" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Node} alt="HTML Logo" className="skillsIcons" />
            <p>Node.js</p>
          </a>
          <a href="https://expressjs.com" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Express} alt="HTML Logo" className="skillsIcons" />
            <p>Express</p>
          </a>
          <a href="https://aws.amazon.com/es/" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={AWS} alt="AWS Logo" className="skillsIcons" />
            <p>AWS</p>
          </a>
          <a href="https://expressjs.com" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Nest} alt="HTML Logo" className="skillsIcons" />
            <p>NestJS</p>
          </a>
          <a href="https://www.prisma.io" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Jest} alt="HTML Logo" className="skillsIcons" />
            <p>Jest</p>
          </a>
          <a href="https://www.docker.com" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Docker} alt="HTML Logo" className="skillsIcons" />
            <p>Docker</p>
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
          <a href="https://aws.amazon.com/es/dynamodb/" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={DynamoDB} alt="HTML Logo" className="skillsIcons" />
            <p>DynamoDB</p>
          </a>
          <a href="https://www.mongodb.com" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={mongodb} alt="HTML Logo" className="skillsIcons" />
            <p>MongoDB</p>
          </a> 
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={HTML} alt="HTML Logo" className="skillsIcons" />
            <p>HTML</p>
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={CSS} alt="HTML Logo" className="skillsIcons" />
            <p>CSS</p>
          </a>
          <a href="https://tailwindcss.com" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Tailwind} alt="HTML Logo" className="skillsIcons" />
            <p>Tailwind</p>
          </a>
          <a href="https://getbootstrap.com" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Bootstrap} alt="HTML Logo" className="skillsIcons" />
            <p>Bootstrap</p>
          </a>
          <a href="https://git-scm.com" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Git} alt="HTML Logo" className="skillsIcons" />
            <p>Git</p>
          </a>
          <a href="https://github.com/about" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Github} alt="HTML Logo" className="skillsIcons" />
            <p>GitHub</p>
          </a>
          <a href="https://azure.microsoft.com/es-es/products/devops" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Azure} alt="HTML Logo" className="skillsIcons" />
            <p>Azure DevOps</p>
          </a>
          <a href="https://www.figma.com" className="skillsIconsContainer" target="_blank" rel="noreferrer">
            <img src={Figma} alt="HTML Logo" className="skillsIcons" />
            <p>Figma</p>
          </a>
        </div>
      </div>
    )
    
}