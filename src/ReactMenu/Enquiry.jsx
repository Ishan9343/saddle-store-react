import React from "react";
import { useRef } from "react";
import enqlogo from "../images/enqlogo.jpg";
import emailjs from "@emailjs/browser";

const Enquiry = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm("service_wdorz0l", "template_yastrjp", form.current, {
        publicKey: "mQfF6kJIWAwZqT07E",
      })
      .then(
        () => {
          alert("Email sent successfully!");
          console.log("Email sent successfully!");
        },
        (error) => {
          console.error("Email sending failed:", error.text);
        }
      );

    form.current.reset(); // Reset the form after submission
  };

  return (
    <form ref={form} onSubmit={sendEmail} id="enquiry">
      <hr />
      <div className="container-fluid my-3">
        
            <h2 id="about" className="text-dark">
            <img src={enqlogo} style={{widht:"2rem", height:"2rem",borderRadius:"5rem"}}></img>
            <small className="text-dark m-3"><b>E</b>nquiry</small>
            </h2>
         
      </div>

      <div className="mb-3">
        <label htmlFor="C_name" className="form-label">
          Name
        </label>
        <input
          type="name"
          name="Customer_name"
          className="form-control"
          id="user_name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="C_email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          name="Customer_email"
          className="form-control"
          id="user_email"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="C_Requirement" className="form-label">
          Requirement
        </label>
        <input
          type="text"
          name="Requirement"
          className="form-control"
          id="user_requirement"
        />
      </div>

      <button type="submit" value="send" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Enquiry;
