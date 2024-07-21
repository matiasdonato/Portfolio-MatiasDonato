import "../css/contact.css"
import emailjs from "emailjs-com"
import loadingGif from "../assets/images/loading2.gif"

import {ChangeEvent, FormEvent, useState} from "react"
import SvgMail from "../assets/icons/svgMail"
import SvgPhone from "../assets/icons/svgPhone"
import SvgLinkedin from "../assets/icons/svgLinkedin"
import SvgGitHub from "../assets/icons/svgGitHub"
import { useSelector } from "react-redux"

export default function Contact(){

  const [contactForm, setContactForm] = useState({
    name : "",
    email: "",
    subject: "",
    body: ""
  })

  interface ErrorObj {
    name: string | null
    email: string | null
    subject: string | null
    body: string | null

  }

  interface AppState{
    lenguage : string
  }
  
  let {lenguage} = useSelector((state: AppState) => state)

  function validate(form: ErrorObj){
    let error: ErrorObj = {
      name: null,
      email: null,
      subject: null,
      body: null
    }

    if (!form.name) {
      error.name = lenguage === "english" ? "Name missing" : "Falta el nombre";
    } else if (form.name.length < 3) {
      error.name = lenguage === "english" ? "The name must contain at least 3 characters." : "El nombre debe contener al menos 3 caracteres.";
    }

    if (!form.email) {
      error.email = lenguage === "english" ? "Email missing" : "Falta el correo electrónico";
    } else if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(form.email) === false) {
      error.email = lenguage === "english" ? "Please enter a valid email." : "Por favor ingrese un correo electrónico válido.";
    }

    if (!form.subject) {
      error.subject = lenguage === "english" ? "Subject missing" : "Falta el asunto";
    } else if (form.subject.length < 5) {
      error.subject = lenguage === "english" ? "The subject must contain at least 5 characters." : "El asunto debe contener al menos 5 caracteres.";
    }

    if (!form.body) {
      error.body = lenguage === "english" ? "Message missing" : "Falta el mensaje";
    } else if (form.body.length < 10) {
      error.body = lenguage === "english" ? "The message must contain at least 10 characters." : "El mensaje debe contener al menos 10 caracteres.";
    }

    return error;
  }

  const [error, setError] = useState<ErrorObj>({
    name: "",
    email: "",
    subject: "",
    body: ""
  })

  function validateErrors(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>){
    let value : string | null = e.target.value
    let name = e.target.name
    if (value === "") {
      value = null
    }
    let objError = validate({...contactForm, [e.target.name]: value})
    //@ts-ignore
    setError((prev) => ({...prev, [name] : objError[name]}))
  }



  function handleInput(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>){
    let name = e.target.name
    let value = e.target.value
    setContactForm( (contactForm) => ({...contactForm, [name] : value}))
    validateErrors(e)
  }
  //Envio de mail: 

  const [emailLoading, setEmailLoading] = useState(false)

  async function formSubmit(e: FormEvent){
    e.preventDefault()
    setEmailLoading(true)
    await emailjs.send('service_4rkbijp', 'template_dkmbg7f', contactForm, "x-GfuI_-CcUc_xE6N")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    setContactForm({
      name: "",
      email: "",  
      subject: "",
      body: ""
    })
    setError({
      name: "",
      email: "",
      subject: "",
      body: ""
    })
    setEmailLoading(false)
    setShowModal(true)
  }

  let [showModal, setShowModal] = useState(false)

  if(lenguage === "english"){
    return (
      <div className={`bigContactContainer`} >
        {showModal === true && 
          <div className="contactModal">
            <p>This message was successfully delivered. Thanks for contacting me!</p>
            <button className="closeModalButton" onClick={() => setShowModal(false)} >Close</button>
          </div>
        }
        <div className={`${showModal === true && "blurBg"} contactBox`} >
          <div className="contactTextContainer animate__animated animate__fadeInLeft" >
            <h2>Contact me!</h2>
          </div>
          <div className="contactContainer">
            <div className="contactMeIconsContainer animate__animated animate__fadeInDown" >
              <div className="contactMeIcon">
                <SvgMail className= "contactMeIconSvg" />
                <span>matiasdonatoit@gmail.com</span>
              </div>
              <div className="contactMeIcon">
                <SvgPhone className= "contactMeIconSvg" />
                <span>+54 9 11 6209-1233</span>
              </div>
              <a href="https://www.linkedin.com/in/matias-donato-291579316/" target={"_blank"} rel="noreferrer" className="contactMeIcon" >
                <SvgLinkedin className= "contactMeIconSvg" />
                <span>Matias Donato</span>
              </a>
              <a href="https://github.com/matiasdonato" target={"_blank"} rel="noreferrer" className="contactMeIcon">
                <SvgGitHub className= "contactMeIconSvg" />
                <span>matiasdonato</span>
              </a>
            </div>
            <form className="contactForm animate__animated animate__fadeIn" onSubmit={(e) => formSubmit(e)}>
              <div className="inputBox">
                <input className="contactInput" autoComplete="off" maxLength={24} type="text" required={true} name="name" value={contactForm.name} onChange={(e) => handleInput(e) } />
                <span>Name</span>
                <i></i>
                <div className="borderInput"></div>
              </div>
              <div className="errorTextContainer" >
                {error.name && <p className="errorText">*{error.name}</p> }
              </div>
              <div className="inputBox"> 
                <input className="contactInput" autoComplete="off" maxLength={38} type="text" required={true} name="email" value={contactForm.email} onChange={(e) => handleInput(e) } />
                <span>Mail</span>
                <i></i> 
                <div className="borderInput"></div>
              </div>
              <div className="errorTextContainer" >
                {error.email && <p className="errorText" >*{error.email}</p>}
              </div>
              <div className="inputBox"> 
                <input className="contactInput" autoComplete="off" maxLength={34} type="text" required={true} name="subject" value={contactForm.subject} onChange={(e) => handleInput(e) } />
                <span>Subject</span>
                <i></i>
                <div className="borderInput"></div>
              </div>
              <div className="errorTextContainer" >
                {error.subject && <p className="errorText" >*{error.subject}</p>}
              </div>
              <div className="inputBox"> 
                <textarea className="contactInput" name="body" required={true} value={contactForm.body} cols={30} rows={10} onChange={(e) => handleInput(e) } maxLength={600} ></textarea>
                <span>Message</span> 
                <i></i>
                <div className="borderTextarea"></div>
              </div>
              <div className="errorTextContainer" >
                {error.body && <p className="errorText" >*{error.body}</p>}
              </div>
              <div className="submitContactContainer">
                {emailLoading === false ? <input type="submit" className="submitButton" value={"Submit"} disabled={ error.name !== null || error.email !== null || error.subject !== null || error.body !== null} /> : <div className="loadingContainer" > <img className="loadingSubmit" src={loadingGif} alt="loading" /> </div> }        
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }else{
    return (
      <div className={`bigContactContainer`} >
        {showModal === true && 
          <div className="contactModal">
            <p>El mensaje fue enviado exitosamente. Gracias por contactarme!</p>
            <button className="closeModalButton" onClick={() => setShowModal(false)} >Cerrar</button>
          </div>
        }
        <div className={`${showModal === true && "blurBg"} contactBox`} >
          <div className="contactTextContainer animate__animated animate__fadeInLeft" >
            <h2>Contactame!</h2>
          </div>
          <div className="contactContainer">
            <div className="contactMeIconsContainer animate__animated animate__fadeInDown" >
              <div className="contactMeIcon">
                <SvgMail className= "contactMeIconSvg" />
                <span>matiasdonatoit@gmail.com</span>
              </div>
              <div className="contactMeIcon">
                <SvgPhone className= "contactMeIconSvg" />
                <span>+54 9 11 6209-1233</span>
              </div>
              <a href="https://www.linkedin.com/in/matias-donato-291579316/" target={"_blank"} rel="noreferrer" className="contactMeIcon" >
                <SvgLinkedin className= "contactMeIconSvg" />
                <span>Matias Donato</span>
              </a>
              <a href="https://github.com/matiasdonato" target={"_blank"} rel="noreferrer" className="contactMeIcon">
                <SvgGitHub className= "contactMeIconSvg" />
                <span>matiasdonato</span>
              </a>
            </div>
            <form className="contactForm animate__animated animate__fadeIn" onSubmit={(e) => formSubmit(e)}>
              <div className="inputBox">
                <input className="contactInput" autoComplete="off" maxLength={24} type="text" required={true} name="name" value={contactForm.name} onChange={(e) => handleInput(e) } />
                <span>Nombre</span>
                <i></i>
                <div className="borderInput"></div>
              </div>
              <div className="errorTextContainer" >
                {error.name && <p className="errorText">*{error.name}</p> }
              </div>
              <div className="inputBox"> 
                <input className="contactInput" autoComplete="off" maxLength={38} type="text" required={true} name="email" value={contactForm.email} onChange={(e) => handleInput(e) } />
                <span>Mail</span>
                <i></i> 
                <div className="borderInput"></div>
              </div>
              <div className="errorTextContainer" >
                {error.email && <p className="errorText" >*{error.email}</p>}
              </div>
              <div className="inputBox"> 
                <input className="contactInput" autoComplete="off" maxLength={34} type="text" required={true} name="subject" value={contactForm.subject} onChange={(e) => handleInput(e) } />
                <span>Asunto</span>
                <i></i>
                <div className="borderInput"></div>
              </div>
              <div className="errorTextContainer" >
                {error.subject && <p className="errorText" >*{error.subject}</p>}
              </div>
              <div className="inputBox"> 
                <textarea className="contactInput" name="body" required={true} value={contactForm.body} cols={30} rows={10} onChange={(e) => handleInput(e) } maxLength={600} ></textarea>
                <span>Mensaje</span> 
                <i></i>
                <div className="borderTextarea"></div>
              </div>
              <div className="errorTextContainer" >
                {error.body && <p className="errorText" >*{error.body}</p>}
              </div>
              <div className="submitContactContainer">
                {emailLoading === false ? <input type="submit" className="submitButton" value={"Enviar"} disabled={ error.name !== null || error.email !== null || error.subject !== null || error.body !== null} /> : <div className="loadingContainer" > <img className="loadingSubmit" src={loadingGif} alt="loading" /> </div> }        
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  
    
}