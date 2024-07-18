import SvgLinkedin from "../assets/icons/svgLinkedin";
import Resume from "../assets/files/Full-Stack-Developer-Resume-Matias-Donato.pdf";
import CV from "../assets/files/Full-Stack-Developer-CV-Matias-Donato.pdf";
import "../css/about.css";
import SvgGitHub from "../assets/icons/svgGitHub";
import SvgMail from "../assets/icons/svgMail";
import SvgFile from "../assets/icons/svgFile";
import SvgPhone from "../assets/icons/svgPhone";
import SvgLocation from "../assets/icons/svgLocation";
import { useSelector } from "react-redux";

export default function AboutMe() {
  interface AppState {
    lenguage: string;
  }

  let { lenguage } = useSelector((state: AppState) => state);

  if (lenguage === "english") {
    return (
      <div className="bigAboutContainer">
        <div className="aboutTextContainer animate__animated animate__fadeInLeft">
          <h2>About Me</h2>
        </div>
        <div className="aboutContainer">
          <div className="descriptionContainer animate__animated animate__fadeInUp">
            <h5>
              {"<Matias Donato />"}{" "}
              <b className="yellow">{"<Full Stack Web Developer/>"}</b>
            </h5>
            <p>
              Hi! My name is Matias and I am an Argentine developer with 3 years
              of experience working on projects using technologies such as
              JavaScript, TypeScript, React, Redux, Node.js, Express, AWS,
              Sequelize, MySQL, among others.consider myself a proactive,
              creative individual with a positive attitude, strong
              organizational and teamwork skills, good handling of Git Flow,
              problem-solving abilities, a wide capacity for learning, and a
              good level of English. I am currently working at LA NACION, a
              renowned Argentine news portal. There, I work closely with other
              developers, as well as design, QA, and architecture teams, using
              different technologies in combination with my knowledge to
              maintain the platform and create new features.
            </p>
          </div>
          <div className="aboutLinksContainer animate__animated animate__fadeInUp">
            <div className="aboutLinks">
              <SvgLinkedin className="aboutLinkIcon" />
              <div className="aboutLinkInfo">
                <h3>Linkedin:</h3>
                <a
                  href="https://www.linkedin.com/in/matias-donato-291579316/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Matias Donato
                </a>
              </div>
            </div>
            <div className="aboutLinks">
              <SvgGitHub className="aboutLinkIcon" />
              <div className="aboutLinkInfo">
                <h3>GitHub:</h3>
                <a
                  href="https://github.com/matiasdonato"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  matiasdonato
                </a>
              </div>
            </div>
            <div className="aboutLinks">
              <SvgMail className="aboutLinkIcon" />
              <div className="aboutLinkInfo">
                <h3>Mail:</h3>
                <p>matiasdonatoit@gmail.com</p>
              </div>
            </div>
            <div className="aboutLinks">
              <SvgPhone className="aboutLinkIcon" />
              <div className="aboutLinkInfo">
                <h3>Phone:</h3>
                <p>+54 9 11 6209-1233</p>
              </div>
            </div>
            <div className="aboutLinks">
              <SvgFile className="aboutLinkIcon" />
              <div className="aboutLinkInfo">
                <a
                  href={Resume}
                  download="Resume Matias Donato Full Stack Web Developer"
                >
                  <h3>Resume</h3>
                </a>
              </div>
            </div>
            <div className="aboutLinks">
              <SvgLocation className="aboutLinkIcon" />
              <div className="aboutLinkInfo">
                <h3>Location:</h3>
                <p>CABA - Buenos Aires</p>
              </div>
            </div>
          </div>
          <div className="educationAndExperienceContainer">
            <div className="bigAboutInfoContainer">
              <div className="aboutInfoContainer animate__animated animate__fadeInLeft">
                <h5>Recent Experience</h5>
                <div className="aboutLineAndInfo">
                  <hr className="aboutInfoLine" />
                  <div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">LA NACION - Buenos Aires, Argentina</h6>
                        <h6 className="infoTitleDate">
                          August 7, 2023 - Present
                        </h6>
                      </div>
                      <p>
                        As a Full Stack Developer at LA NACION, I work alongside
                        a team of developers and designers to shape the LA
                        NACION and Club LA NACION websites. We use technologies
                        such as React, Redux, and TypeScript for front-end
                        development, while for the back-end, we employ Node.js,
                        Express, and AWS. This allows us to create APIs in
                        combination with services like Lambdas, API Gateway,
                        CloudFormation, S3 Buckets, EventBridge, among others.
                        Additionally, we manage our databases with MySQL,
                        Sequelize, and DynamoDB, achieving a diverse and
                        efficient data management. Our development process is
                        guided by version control in Git, and we follow Scrum
                        methodologies to ensure efficient project execution.{" "}
                        <br />
                        <a
                          href="https://www.lanacion.com.ar"
                          target="_blank"
                          rel="noreferrer"
                          className="yellow"
                        >
                          Website LN
                        </a>{" "}
                        -{" "}
                        <a
                          href="https://club.lanacion.com.ar"
                          target="_blank"
                          rel="noreferrer"
                          className="yellow"
                        >
                          Website Club LN
                        </a>{" "}
                        -{" "}
                        <a
                          href="https://www.linkedin.com/company/la/"
                          target="_blank"
                          rel="noreferrer"
                          className="yellow"
                        >
                          Linkedin
                        </a>
                      </p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">IT Patagonia - Buenos Aires, Argentina</h6>
                        <h6 className="infoTitleDate">
                          Nov. 30, 2022 - July 31, 2023
                        </h6>
                      </div>
                      <p>
                        At IT Patagonia, I work on various projects hand in hand
                        with different teams to develop modern web applications
                        with dynamic and attractive interfaces using React and
                        Angular, ensuring code security with TypeScript, and
                        building scalable back-end systems with Express. To
                        achieve this, we use a set of technologies that include
                        React, Angular, Redux, TypeScript, Node.js, Express,
                        Nest.js, and MySQL, among others. <br />
                        <a
                          href="https://www.itpatagonia.com"
                          target="_blank"
                          rel="noreferrer"
                          className="yellow"
                        >
                          Website
                        </a>{" "}
                        -{" "}
                        <a
                          href="https://www.linkedin.com/company/itpatagonia/"
                          target="_blank"
                          rel="noreferrer"
                          className="yellow"
                        >
                          Linkedin
                        </a>
                      </p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">
                          Alet-Learning Educational Platform - Davis, California
                        </h6>
                        <h6 className="infoTitleDate">
                          July 1, 2021 - Nov. 23, 2022
                        </h6>
                      </div>
                      <p>
                        As a Full Stack Developer I am responsible for
                        developing applications that offer interactive and
                        engaging educational experiences for the future. Our
                        platform is a leading e-learning provider, and my role
                        involves using a range of cutting-edge technologies,
                        including React, Typescript, Node, Express, GraphQL,
                        MySQL, MongoDB, Colyseus, and other tools. By leveraging
                        these tools and my expertise, I aim to create innovative
                        and seamless user experiences for our platform's users.
                        <br />
                        <a
                          href="https://alter-learning.com"
                          target="_blank"
                          rel="noreferrer"
                          className="yellow"
                        >
                          Website
                        </a> -{" "}
                        <a
                          href="https://www.linkedin.com/company/alterlearning"
                          target="_blank"
                          rel="noreferrer"
                          className="yellow"  
                        >
                          Linkedin
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aboutInfoContainer animate__animated animate__fadeInRight">
                <h5>Education</h5>
                <div className="aboutLineAndInfo">
                  <hr className="aboutInfoLine" />
                  <div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">
                          Bachelor of Computer Science
                        </h6>
                        <h6 className="infoTitleDate">March 2021 - present</h6>
                      </div>
                      <p>
                        I am currently in my second year of the Computer Science
                        degree at the Faculty of Exact Sciences at UBA
                        (University of Buenos Aires)
                      </p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">
                          Secondary Degree of Computer Technician
                        </h6>
                        <h6 className="infoTitleDate">
                          March 3 of 2017 - Dec. 6 of 2021
                        </h6>
                      </div>
                      <p>
                        High school completed at Technical School N°15 "Alte.
                        Brown" with computer technician orientation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutLenguageContainer animate__animated animate__fadeInUp">
            <h5>Lenguages</h5>
            <div className="aboutLineAndInfo">
              <hr className="aboutInfoLine" />
              <div>
                <div className="aboutInfo">
                  <div className="infoTitle">
                    <div className="aboutPoint" />
                    <h6 className="infoTitleName">English</h6>
                  </div>
                  <p>
                    C2 - Proeficient.{" "}
                    <a
                      href="https://www.efset.org/cert/cb7bgb"
                      target="_blank"
                      rel="noreferrer"
                      className="yellow"
                    >
                      Certificate Link
                    </a>
                  </p>
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
    );
  } else {
    return (
      <div className="bigAboutContainer">
        <div className="aboutTextContainer animate__animated animate__fadeInLeft">
          <h2>Sobre Mi</h2>
        </div>
        <div className="aboutContainer">
          <div className="descriptionContainer animate__animated animate__fadeInUp">
            <h5>
              {"<Matias Donato />"}{" "}
              <b className="yellow">{"<Full Stack Web Developer/>"}</b>
            </h5>
            <p>
              Hola! Soy Matias, un developer argentino con 3 años de experiencia
              laboral desarrollando proyectos con tecnologías como JavaScript,
              TypeScript, React, Redux, Node.js, Express, AWS, Sequelize, MySQL,
              entre otras. Me considero una persona proactiva, creativa, con
              buena predisposición, grandes capacidades de organización y
              trabajo en equipo, buen manejo del Git Flow, resolución de
              problemas, amplia capacidad de aprendizaje y buen nivel de inglés.
              Actualmente me encuentro trabajando en LA NACION, un reconocido
              portal de noticias argentino. Allí trabajo codo a codo con otros
              desarrolladores, así como equipos de diseño, QA y arquitectura,
              utilizando diferentes tecnologías en combinación con mis
              conocimientos para mantener la plataforma y crear nuevas features.
            </p>
          </div>
          <div className="aboutLinksContainer animate__animated animate__fadeInUp">
            <div className="aboutLinks">
              <SvgLinkedin className="aboutLinkIcon" />
              <div className="aboutLinkInfo">
                <h3>Linkedin:</h3>
                <a
                  href="https://www.linkedin.com/in/matias-donato-291579316/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Matias Donato
                </a>
              </div>
            </div>
            <div className="aboutLinks">
              <SvgGitHub className="aboutLinkIcon" />
              <div className="aboutLinkInfo">
                <h3>GitHub:</h3>
                <a
                  href="https://github.com/matiasdonato"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  matiasdonato
                </a>
              </div>
            </div>
            <div className="aboutLinks">
              <SvgMail className="aboutLinkIcon" />
              <div className="aboutLinkInfo">
                <h3>Mail:</h3>
                <p>matiasdonatoit@gmail.com</p>
              </div>
            </div>
            <div className="aboutLinks">
              <SvgPhone className="aboutLinkIcon" />
              <div className="aboutLinkInfo">
                <h3>Celular:</h3>
                <p>+54 9 11 6209-1233</p>
              </div>
            </div>
            <div className="aboutLinks">
              <SvgFile className="aboutLinkIcon" />
              <div className="aboutLinkInfo">
                <a
                  href={CV}
                  download="CV Matias Donato Full Stack Web Developer"
                >
                  <h3>Curriculum</h3>
                </a>
              </div>
            </div>
            <div className="aboutLinks">
              <SvgLocation className="aboutLinkIcon" />
              <div className="aboutLinkInfo">
                <h3>Ubicación:</h3>
                <p>CABA - Buenos Aires</p>
              </div>
            </div>
          </div>
          <div className="educationAndExperienceContainer">
            <div className="bigAboutInfoContainer">
              <div className="aboutInfoContainer animate__animated animate__fadeInLeft">
                <h5>Experiencia Reciente</h5>
                <div className="aboutLineAndInfo">
                  <hr className="aboutInfoLine" />
                  <div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">
                          LA NACION - Buenos Aires, Argentina
                        </h6>
                        <h6 className="infoTitleDate">
                          Agosto 7 del 2023 - Hoy
                        </h6>
                      </div>
                      <p>
                        Como Desarrollador Full Stack en LA NACION, trabajo
                        junto a un equipo de desarrolladores y diseñadores para
                        dar forma a la web de LA NACION y Club LA NACION.
                        Utilizamos tecnologías como React, Redux y TypeScript
                        para el desarrollo front, mientras que en el back
                        empleamos Node.js, Express y AWS, lo que nos permite
                        crear APIs en combinación con servicios como Lambdas,
                        API Gateway, CloudFormation, S3 Buckets, EventBridge,
                        entre otros. Además, gestionamos nuestras bases de datos
                        con MySQL, Sequelize y DynamoDB, logrando una
                        administración de datos diversa y eficiente. Nuestro
                        proceso de desarrollo está guiado por el control de
                        versiones en Git y seguimos metodologías Scrum para
                        garantizar una ejecución eficiente de los proyectos.{" "}
                        <br />
                        <a
                          href="https://www.lanacion.com.ar"
                          target="_blank"
                          rel="noreferrer"
                          className="yellow"
                        >
                          Pagina Web LN
                        </a>{" "}
                        -{" "}
                        <a
                          href="https://club.lanacion.com.ar"
                          target="_blank"
                          rel="noreferrer"
                          className="yellow"
                        >
                          Pagina Web Club LN
                        </a>{" "}
                        -{" "}
                        <a
                          href="https://www.linkedin.com/company/la/"
                          target="_blank"
                          rel="noreferrer"
                          className="yellow"
                        >
                          Linkedin
                        </a>
                      </p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">
                          IT Patagonia - Buenos Aires, Argentina
                        </h6>
                        <h6 className="infoTitleDate">
                          Nov. 30 del 2022 – Julio 31 del 2023
                        </h6>
                      </div>
                      <p>
                        En IT Patagonia, trabaje en diversos proyectos mano a
                        mano con diferentes equipos para desarrollar
                        aplicaciones web modernas con interfaces dinámicas y
                        atractivas, garantizando la seguridad del código con
                        TypeScript y construyendo sistemas backend escalables.
                        Para lograr esto, utilice un conjunto de tecnologías que
                        incluyen React, Angular, Redux, TypeScript, Node.js,
                        Express, Nest.js y MySQL, entre otras. <br />
                        <a
                          href="https://itpatagonia.com"
                          target="_blank"
                          rel="noreferrer"
                          className="yellow"
                        >
                          Pagina Web
                        </a>{" "}
                        -{" "}
                        <a
                          href="https://www.linkedin.com/company/itpatagonia/mycompany/"
                          target="_blank"
                          rel="noreferrer"
                          className="yellow"
                        >
                          Linkedin
                        </a>
                      </p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">
                          Alter-Learning Educational Platform - Davis,
                          California
                        </h6>
                        <h6 className="infoTitleDate">
                          Julio 25 del 2021 – Nov. 23 del 2022
                        </h6>
                      </div>
                      <p>
                        Como Full Stack, mi responsabilidad es crear
                        aplicaciones que ofrezcan experiencias educativas
                        interactivas y atractivas de cara al futuro. Trabajo en
                        una plataforma de e-learning, y para ello utilizo
                        tecnologías de última generación como React, Typescript,
                        Node, Express, GraphQL, MySQL, MongoDB, Colyseus, entre
                        otras herramientas. Con el uso de estas tecnologías y
                        mis conocimientos, mi objetivo es crear experiencias de
                        usuario innovadoras y perfectamente integradas para los
                        usuarios de nuestra plataforma. <br />
                        <a
                          href="https://alter-learning.com"
                          target="_blank"
                          rel="noreferrer"
                          className="yellow"
                        >
                          Pagina Web
                        </a>{" "}
                        -{" "}
                        <a
                          href="https://www.linkedin.com/company/alterlearning"
                          target="_blank"
                          rel="noreferrer"
                          className="yellow"
                        >
                          Linkedin
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aboutInfoContainer animate__animated animate__fadeInRight">
                <h5>Educación</h5>
                <div className="aboutLineAndInfo">
                  <hr className="aboutInfoLine" />
                  <div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">
                          Licenciatura en Ciencias de la Computación
                        </h6>
                        <h6 className="infoTitleDate">Marzo del 2021 - hoy</h6>
                      </div>
                      <p>
                        Actualmente me encuentro cursando el segundo año de la
                        carrera Ciencias de la Computación en la Facultad de
                        Ciencias Exactas de la UBA (Universidad de Buenos Aires)
                      </p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">
                          Título secundario de Técnico Informático
                        </h6>
                        <h6 className="infoTitleDate">
                          Marzo 3 del 2017 - Dic. 6 del 2021
                        </h6>
                      </div>
                      <p>
                        Secundario completado en la Escuela Técnica N°15 "Alte.
                        Brown" con orientación en Técnico Informático.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutLenguageContainer animate__animated animate__fadeInUp">
            <h5>Idiomas</h5>
            <div className="aboutLineAndInfo">
              <hr className="aboutInfoLine" />
              <div>
                <div className="aboutInfo">
                  <div className="infoTitle">
                    <div className="aboutPoint" />
                    <h6 className="infoTitleName">Ingles</h6>
                  </div>
                  <p>
                    C2 - Proeficient.{" "}
                    <a
                      href="https://www.efset.org/cert/cb7bgb"
                      target="_blank"
                      rel="noreferrer"
                      className="yellow"
                    >
                      Link del Certificado
                    </a>
                  </p>
                </div>
                <div className="aboutInfo">
                  <div className="infoTitle">
                    <div className="aboutPoint" />
                    <h6 className="infoTitleName">Español</h6>
                  </div>
                  <p>Nativo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
