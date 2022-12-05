import "../css/contact.css"
import emailjs from "emailjs-com"

import {ChangeEvent, FormEvent, useState} from "react"

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
    setEmailLoading(false)
  }

  return (
    <div className="bigContactContainer" >
      <div className="contactTextContainer" >
        <h2>Contact</h2>
      </div>
      <h3>Contact me!</h3>
      <div className="contactContainer">
        <form onSubmit={(e) => formSubmit(e)}>
          <input maxLength={24} type="text" name="name" value={contactForm.name} onChange={(e) => handleInput(e) } />
          {error.name && <p>{error.name}</p> }
          <input maxLength={38} type="text" name="email" value={contactForm.email} onChange={(e) => handleInput(e) } />
          {error.email && <p>{error.email}</p> }
          <input maxLength={34} type="text" name="subject" value={contactForm.subject} onChange={(e) => handleInput(e) } />
          {error.subject && <p>{error.subject}</p> }
          <textarea name="body" value={contactForm.body} cols={30} rows={10} onChange={(e) => handleInput(e) } maxLength={600} ></textarea>
          {error.body && <p>{error.body}</p> }
          {emailLoading === false ? <input type="submit" value={"Submit"} disabled={ error.name !== null || error.email !== null || error.subject !== null || error.body !== null} /> : <p>Loading...</p>}
        </form>
      </div>
    </div>
  )
    
}