import "../css/contact.css"
import emailjs from "emailjs-com"
import loadingGif from "../assets/images/loading2.gif"

import {ChangeEvent, FormEvent, useState} from "react"
import SvgMail from "../assets/icons/svgMail"
import SvgPhone from "../assets/icons/svgPhone"
import SvgLinkedin from "../assets/icons/svgLinkedin"
import SvgGitHub from "../assets/icons/svgGitHub"

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


  function validate(form: ErrorObj){
    let error: ErrorObj = {
      name: null,
      email: null,
      subject: null,
      body: null
    }

    if (!form.name) {
      error.name = "Name missing"
    }else if (form.name.length < 3) {
      error.name = "The name must contain at least 3 characters."
    }

    if (!form.email) {
      error.email = "Email missing"
    }else if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(form.email) === false) {
      error.email = "Please enter a valid email."
    }
    
    if (!form.subject) {
      error.subject = "Subject missing"
    }else if (form.subject.length < 5) {
      error.subject = "The subject must contain at least 5 characters."
    }

    if (!form.body) {
      error.body = "Message missing"
    }else if (form.body.length < 10) {
      error.body = "The message must contain at least 10 characters."
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
    await emailjs.send('service_h7qkxni', 'template_skypbwn', contactForm, "mjOXxAXhg5lKA4scT")
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

  return (
    <div className={`bigContactContainer`} >
      {showModal === true && 
        <div className="contactModal">
          <p>This message was successfully delivered. Thanks for contacting me!</p>
          <button className="closeModalButton" onClick={() => setShowModal(false)} >Close</button>
        </div>
      }
      <div className={`${showModal === true && "blurBg"} `} >
        <div className="contactTextContainer animate__animated animate__fadeInLeft" >
          <h2>Contact me!</h2>
        </div>
        <div className="contactContainer">
          <div className="contactMeIconsContainer animate__animated animate__fadeInDown" >
            <div className="contactMeIcon">
              <SvgMail className= "contactMeIconSvg" />
              <span>matiasdonato14@gmail.com</span>
            </div>
            <div className="contactMeIcon">
              <SvgPhone className= "contactMeIconSvg" />
              <span>+54 9 11 6209-1233</span>
            </div>
            <a href="https://www.linkedin.com/in/matías-donato-227488224/" target={"_blank"} rel="noreferrer" className="contactMeIcon" >
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
            {error.name && <p className="errorText">*{error.name}</p> }
            <div className="inputBox"> 
              <input className="contactInput" autoComplete="off" maxLength={38} type="text" required={true} name="email" value={contactForm.email} onChange={(e) => handleInput(e) } />
              <span>Mail</span>
              <i></i> 
              <div className="borderInput"></div>
            </div>
            {error.email && <p className="errorText" >*{error.email}</p>}
            <div className="inputBox"> 
              <input className="contactInput" autoComplete="off" maxLength={34} type="text" required={true} name="subject" value={contactForm.subject} onChange={(e) => handleInput(e) } />
              <span>Subject</span>
              <i></i>
              <div className="borderInput"></div>
            </div>
            {error.subject && <p className="errorText" >*{error.subject}</p>}
            <div className="inputBox"> 
              <textarea className="contactInput" name="body" required={true} value={contactForm.body} cols={30} rows={10} onChange={(e) => handleInput(e) } maxLength={600} ></textarea>
              <span>Message</span> 
              <i></i>
              <div className="borderTextarea"></div>
            </div>
            {error.body && <p className="errorText" >*{error.body}</p>}
            <div className="submitContactContainer">
              {emailLoading === false ? <input type="submit" className="submitButton" value={"Submit"} disabled={ error.name !== null || error.email !== null || error.subject !== null || error.body !== null} /> : <div className="loadingContainer" > <img className="loadingSubmit" src={loadingGif} alt="loading" /> </div> }        
            </div>
          </form>
        </div>
      </div>
    </div>
  )
    
}