import React from 'react'
import "./Contact.css";
import { themeContext } from "../../Context";
import { useContext } from "react";


const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


 

 return (
     <div className="contact-from" id="contact">
       <div className="w-left">
          <div className= "awesome">
               <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
               <span>Contact me </span>
               <div className="blur s-blurl"
                    style={{ background:" #ABF1FF94"}}></div>

          </div>
       </div>
       <div className="c-right">
        <form onSubmit>
             <input type="text" name="user_name" className="user" placeholder="Name"/>
             <input type="email" name="user_email" className="user" placeholder="Email"/>
             <textarea type="message" name="user" className="user" placeholder="Message"/>
             <input type="submit" value="Sent" className="button"/>
             <span>{  "Thank for contact me!"}</span>
             <div
                 className="blur c-blurl"
                 style={{ background:"var(--purple)"}}></div>

             

        </form>
       </div>


    </div>
    


  )
}

export default Contact
