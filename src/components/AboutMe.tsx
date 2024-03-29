
import SvgLinkedin from "../assets/icons/svgLinkedin"
import Resume from "../assets/files/Full-Stack-Developer-Resume-Matias-Donato.pdf"
import CV from "../assets/files/Full-Stack-Developer-CV-Matias-Donato.pdf"
import "../css/about.css"
import SvgGitHub from "../assets/icons/svgGitHub"
import SvgMail from "../assets/icons/svgMail"
import SvgFile from "../assets/icons/svgFile"
import SvgPhone from "../assets/icons/svgPhone"
import SvgLocation from "../assets/icons/svgLocation"
import { useSelector } from "react-redux"



export default function AboutMe(){

  interface AppState{
    lenguage : string
  }
  
  let {lenguage} = useSelector((state: AppState) => state)

  if(lenguage === "english"){
    return (
      <div className="bigAboutContainer" >
        <div className="aboutTextContainer animate__animated animate__fadeInLeft" >
          <h2>
            About Me
          </h2>
        </div>
        <div className="aboutContainer">
          <div className="descriptionContainer animate__animated animate__fadeInUp">
            <h5>{"<Matias Donato />"} <b className="yellow">{"<Full Stack Web Developer/>"}</b></h5>
            <p>
              Hi! My name is Matias and I am a passionate Full Stack Developer from Argentina. I have over 2 years of work experience in web application development using technologies such as JavaScript, TypeScript, React, Angular, NodeJS, Express, REST APIs, Redux, SQL, and MongoDB, among others. I can code a website from the ground up, Front or Back, including the database. I consider myself a proactive and creative individual with a positive attitude, strong organizational skills, a dynamic teamwork style, and strong problem-solving abilities. I also have a good handle of Git Flow, a wide capacity for learning, and a good level of english.</p>
          </div>
          <div className="aboutLinksContainer animate__animated animate__fadeInUp">
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
              <div className="aboutInfoContainer animate__animated animate__fadeInLeft">
                <h5>Recent Experience</h5>
                <div className="aboutLineAndInfo">
                  <hr className="aboutInfoLine" />
                  <div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">IT Patagonia</h6>
                        <h6 className="infoTitleDate">May 1 of 2023 - Present</h6>
                      </div>
                      <p>At IT Patagonia, I work on various projects hand in hand with different teams to develop modern web applications with dynamic and attractive interfaces using React and Angular, ensuring code security with TypeScript, and building scalable back-end systems with Express. To achieve this, we use a set of technologies that include React, Angular, Redux, TypeScript, Node.js, Express, Nest.js, and MySQL, among others. <a href="https://www.itpatagonia.com" target="_blank" rel="noreferrer" className="yellow">Web Page Link</a></p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">ALTER-LEARNING EDUCATIONAL PLATFORM, INC.</h6>
                        <h6 className="infoTitleDate">Sept. 25 of 2021 - April 1 of 2023</h6>
                      </div>
                      <p>As a Full Stack Developer I am responsible for developing applications that offer interactive and engaging educational experiences for the future. Our platform is a leading e-learning provider, and my role involves using a range of cutting-edge technologies, including React, Typescript, Node, Express, GraphQL, MySQL, MongoDB, Colyseus, and other tools. By leveraging these tools and my expertise, I aim to create innovative and seamless user experiences for our platform's users. <a href="https://alter-learning.com" target="_blank" rel="noreferrer" className="yellow">Web Page Link</a></p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">NFTRADE</h6>
                        <h6 className="infoTitleDate">Oct. 17 of 2022 - Nov. 17 of 2022</h6>
                      </div>
                      <p>Design and develop an online market for NFTs that included: login (third-party Auth and user profile creation), payment gateway, searches, filtering by price ranges, sorting (by price or name), creation and publication of products (NFT´s), uploading of images, notifications, email sending, logical delete, use of local storage, reviews, a dashboard, and an admin dashboard.</p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">Dogs App</h6>
                        <h6 className="infoTitleDate">Sept. 19 of 2022 - Oct. 10 of 2022</h6>
                      </div>
                      <p>Design and develop a dog app that included searches, filtering, ordering, and creation with uploading of images</p>
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
                        <h6 className="infoTitleName">Bachelor of Computer Science</h6>
                        <h6 className="infoTitleDate">March 2021 - present</h6>
                      </div>
                      <p>I am currently in my second year of the Computer Science degree at the Faculty of Exact Sciences at UBA (University of Buenos Aires)</p>
                    </div>
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
                      <p>High school completed at Technical School N°15 "Alte. Brown" with computer technician orientation.</p>
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
                  <p>C2 - Proeficient. <a href="https://www.efset.org/cert/cb7bgb" target="_blank" rel="noreferrer" className="yellow">Certificate Link</a></p>
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
  }else{
    return (
      <div className="bigAboutContainer" >
        <div className="aboutTextContainer animate__animated animate__fadeInLeft" >
          <h2>
            Sobre Mi
          </h2>
        </div>
        <div className="aboutContainer">
          <div className="descriptionContainer animate__animated animate__fadeInUp">
            <h5>{"<Matias Donato />"} <b className="yellow">{"<Full Stack Web Developer/>"}</b></h5>
            <p>
              Hola! Mi nombre es Matias, soy un apasionado Full Stack Developer de Argentina. Cuento con mas de 2 años de experiencia laboral trabajando en el desarrollo de aplicaciones web con tecnologías como JavaScript, TypeScript, React, Angular, NodeJS, Express, API REST, Redux, SQL y MongoDB, entre otras. Soy capaz de codear páginas web desde 0 tanto en Front cómo Back incluyendo la DB. Me considero una persona proactiva, creativa, con buena predisposición, grandes capacidades de organización y trabajo en equipo, buen manejo del Git Flow, resolución de problemas, amplia capacidad de aprendizaje y buen nivel de inglés.</p>
          </div>
          <div className="aboutLinksContainer animate__animated animate__fadeInUp">
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
                <h3>Celular:</h3>
                <p>+54 9 11 6209-1233</p>
              </div> 
            </div>
            <div className="aboutLinks">
              <SvgFile className="aboutLinkIcon"/>
              <div className="aboutLinkInfo">
              <a href={CV} download="Resume Matias Donato Full Stack Web Developer">
                <h3>Curriculum</h3>
              </a>
              </div> 
            </div>
            <div className="aboutLinks">
              <SvgLocation className="aboutLinkIcon"/> 
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
                        <h6 className="infoTitleName">IT Patagonia</h6>
                        <h6 className="infoTitleDate">Mayo 1 del 2023 - Hoy</h6>
                      </div>
                      <p>En IT Patagonia, trabajo en diversos proyectos mano a mano con diferentes equipos para desarrollar aplicaciones web modernas con interfaces dinámicas y atractivas con React y Angular, garantizando la seguridad del código con TypeScript y construyendo sistemas backend escalables con Express. Para lograr esto, utilizamos un conjunto de tecnologías que incluyen React, Angular, Redux, TypeScript, Node.js, Express, Nest.js y MySQL, entre otras. <a href="https://www.itpatagonia.com" target="_blank" rel="noreferrer" className="yellow">Pagina Web</a></p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">ALTER-LEARNING EDUCATIONAL PLATFORM, INC.</h6>
                        <h6 className="infoTitleDate">Sept. 25 del 2021 - Abril 1 del 2023</h6>
                      </div>
                      <p>Como desarrollador Full Stack, soy responsable de desarrollar aplicaciones que ofrezcan experiencias educativas interactivas y atractivas para el futuro. Nuestra plataforma es un proveedor líder de e-learning, y mi papel implica el uso de una variedad de tecnologías modernas, incluyendo React, Typescript, Node, Express, GraphQL, MySQL, MongoDB, Colyseus, entre otras. Al aprovechar estas herramientas y mi experiencia, mi objetivo es crear experiencias de usuario innovadoras y sin problemas para los usuarios de nuestra plataforma. <a href="https://alter-learning.com" target="_blank" rel="noreferrer" className="yellow">Link a la Pagina Web</a></p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">NFTRADE</h6>
                        <h6 className="infoTitleDate">Oct. 17 del 2022 - Dic. 30 del 2022</h6>
                      </div>
                      <p>Diseño y desarrollo de un mercado en línea de NFT´s, el cual incluye: Login (Auth de terceros y creación de perfiles de usuario), Pasarela de pagos, Busquedas, Filtrados por rangos de precios, Ordenamientos (Por precio o nombre), Creación y publicación de productos (NFT´s), Subida de imagenes, Notificaciones, Envío de mails, Borrado lógico, Uso del local storage, Reviews, Dashboard y Admin-Dashboard.</p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">Dogs App</h6>
                        <h6 className="infoTitleDate">Sept. 1 del 2022 - Oct. 10 del 2022</h6>
                      </div>
                      <p>Diseñar y desarrollar una App de perros que incluía: búsquedas, filtrados, ordenamientos y creación con subida de imágenes.</p>
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
                        <h6 className="infoTitleName">Licenciatura en Ciencias de la Computación</h6>
                        <h6 className="infoTitleDate">Marzo del 2021 - hoy</h6>
                      </div>
                      <p>Actualmente me encuentro cursando el segundo año de la carrera Ciencias de la Computación en la Facultad de Ciencias Exactas de la UBA (Universidad de Buenos Aires)</p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">Henry Bootcamp</h6>
                        <h6 className="infoTitleDate">Jul. 18 del 2022 - Nov. 18 del 2022</h6>
                      </div>
                      <p>Full Stack Web Developer bootcamp. 700 horas de curso teórico-práctico. <a href="https://certificates.soyhenry.com/cert?id=9f3ac456-70d8-4f53-b5df-c5adec661fe9" target="_blank" rel="noreferrer" className="yellow">Link del Certificado</a></p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">Coderhouse Curso de Desarrollo Web</h6>
                        <h6 className="infoTitleDate">Marzo 17 del 2022 - Jun. 21 of 2022</h6>
                      </div>
                      <p>38 horas de curso teórico-práctico <a href="https://www.coderhouse.com/certificados/62c58d6f5e9e070019dc521d" target="_blank" rel="noreferrer" className="yellow">Link del Certificado</a></p>
                    </div>
                    <div className="aboutInfo">
                      <div className="infoTitle">
                        <div className="aboutPoint" />
                        <h6 className="infoTitleName">Título secundario de Técnico Informático</h6>
                        <h6 className="infoTitleDate">Marzo 3 del 2017 - Dic. 6 del 2021</h6>
                      </div>
                      <p>Secundario completado en la Escuela Técnica N°15 "Alte. Brown" con orientación en Técnico Informático.</p>
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
                  <p>C2 - Proeficient. <a href="https://www.efset.org/cert/cb7bgb" target="_blank" rel="noreferrer" className="yellow">Link del Certificado</a></p>
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
    )
  }
    
    
}