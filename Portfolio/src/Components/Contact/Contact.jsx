import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
           const form = useRef();
           const [done, setDone] = useState(false)

           const sendEmail = (e) => {
             e.preventDefault();

             emailjs
               .sendForm(
                 "service_3w353nr",
                 "template_jl2p2rb",
                 form.current,{
                 publicKey: "NaJ7DRNT3Xmqur0KF",
           })
               .then(
                 (result) => {
                   console.log(result.text);
                   setDone(true);
                   form.current.reset(); // Reset form fields
                 },
                 (error) => {
                   console.log(error.text);
                 }
               );
           };
  return (
    <div className="contact-form">
      <div className="c-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contacting me! 😊"}</span>
          <div
            className="blur c-blur"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
