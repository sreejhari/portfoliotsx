import React, { useState } from "react";
const Contact = () => {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[message,setMessage]= useState('');
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = () => {
      alert("Data sent...")    

  };
  return (
    <div className="hero">
    <div className="content">
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required  onChange={(event)=> setName(event.target.value)}/>
        </div>
        <div>
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required onChange={(event)=> setEmail(event.target.value)}/>
        </div>
        <div >
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required onChange={(event)=> setMessage(event.target.value)} />
        </div>
        <button type="submit">{formStatus}</button>
      </form>
    </div>
    </div>
    </div>
  )
}
export default Contact;

