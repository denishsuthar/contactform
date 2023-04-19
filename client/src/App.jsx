import './index.css';
import React, {useState} from 'react';

const App = () => {
  const [form, setForm] = useState({
    name:"", email:"", mobileNumber:"", message:"",
  })

  let name, value;
  const handleInputs = (e) =>{
    console.log(e)
    name = e.target.name;
    value =e.target.value;

    setForm({...form, [name]:value});
  }

  const postData = async (e) =>{
    e.preventDefault();

    const {name , email, mobileNumber, message}= form;
    const res = await fetch("/contact", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name, email, mobileNumber, message
      })
    })
    const data = await res.json();
    if(data.statusCode === 400 || !data){
      window.alert("Error");
    }
    else{
      window.alert("Form Submitted");
    }

  }

  return (
    <>
      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">
                  Get in Touch </div>
                <form method="POST" id="contact_form">
                  <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
                    <input type="text" id="contact_form_name"
                      className="contact_form_name input_field"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleInputs}
                      required />

                    <input type="email" id="contact_form_email"
                      className="contact_form_email input_field"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleInputs}
                      required />

                    <input type="number" id="contact_form_phone"
                      className="contact_form_phone input_field"
                      name="mobileNumber"
                      placeholder="Your Phone Number"
                      value={form.mobileNumber}
                      onChange={handleInputs}
                      required />
                  </div>

                  <div className="contact_form_text mt-5">
                    <textarea className="text_field contact_form_message"
                      name="message"
                      placeholder="Message"
                      value={form.message}
                      onChange={handleInputs}
                      cols="30" rows="10"></textarea>
                  </div>

                  <div className="contact_form_button">
                    <button type="submit" className="button contact_submit_button"
                    onClick={postData}
                      >Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
