import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import './Responsive.css'
import { FiDownload } from "react-icons/fi";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { PiMicrosoftExcelLogoLight } from "react-icons/pi";
import { FaArrowUp } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";



const Navbar = () => {
  return <>


    <nav className="Nav" id="Home">
      <span>Dev</span>
      <div className="mid-menu">
        <a href="#Home"><l1>Home</l1></a>
        <a href="#about"><l1>About</l1></a>
        <a href="#services"><l1>Service</l1></a>
        <a href="#contact"><l1>Contect</l1></a>
      </div>
      <div className="mobile-nav">
        <GiHamburgerMenu id="hamburger-icon" onClick={() => document.getElementById("Nav").style.display = 'block'} />
      </div>
    </nav>
  </>


}

export const HeroSection = () => {

  

  return <>
    <div className="hero-section hero" id="hero-section">
      <div className="Intro">
       <a href="https://pramod-prajapati.github.io/AboutMe/" target="_blank"> <img src="/picture.jpg" className="pimg" alt="" /></a>
        <caption id="Typing">Hii , I Am Pramod 👋</caption>

        <h1>FullStack Web Development </h1>
        <p className="para">I'm an Software Engineer. based out of India, super into Open Source, Data Science, AI/ML. Developing & Contributing to different Web Project's and AI Chatbot.</p>
        <div className="btn">
          <a href="#contact"><button>Contect me <IoArrowForwardCircleOutline /> </button></a>
          <a href="http://localhost:5173/pramod[1].pdf"  onClick={Download}><button>Resume <FiDownload /> </button></a>

        </div>
      </div>


    </div>

  </>
}

export const Saprater = () => {
  return <>
    <div className="Saprater">
    </div>
  </>
}

export const AboutSection = () => {

  return <>
    <span className="Dev" id="about">About</span>
    <div className="About">
      <div className="left">
        <h3>Hello 👋 </h3>
        <p className="about-intro">Hello, I’m Pramod Prajapati , and I create meaningful and high-quality digital experiences. I combine creative design with technical expertise to deliver solutions that work smoothly and leave a lasting impression of elegance and trust.</p>
        <div className="tool">
          <br />
          <p>Tool's I Use ,</p>
          <div className="icons">

            <img src="/visual_studio_code.png" alt="" className="power" />
            <img src="/Power-BI.png" alt="" className="power" />
            <img src="/Excel-logo.jpg" alt="" className="power" />

          </div>


        </div>
      </div>
      <div className="right">
        <img className="aimg" src="/Pramod-kumar.png" alt="" />
      </div>
    </div>


  </>

}

export const Service = () => {
  return <>
    <div className="Service">
      <span className="Dev" id="services">Service</span>
      <div className="service-card">
        <div className="card">
          <img src="/webdev.jpg" alt="" className="c-image" />
          <h4>Web Development</h4>
          <p className="s-p">I design and develop sleek, responsive websites with modern UI and strong backend, delivering seamless user experiences and impactful digital presence.</p>
        </div>
        <div className="card">
          <img src="/DataA.jpg" alt="" className="c-image" />
          <h4>Data Analysis</h4>
          <p className="s-p">I transform complex data into meaningful insights using Excel, Power BI, and Python, enabling businesses to make confident, data-driven decisions effortlessly.</p>
        </div>
        <div className="card">
          <img src="/Microsoft.jpeg" alt="" className="c-image" />
          <h4>For Office Work.</h4>
          <p className="s-p">I create professional reports, presentations, and data sheets using Microsoft Word, Excel, and PowerPoint, improving workflow efficiency and delivering polished results.</p>
        </div>
      </div>
    </div>
  </>

}

export const Contect = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ljzsict",    // <- yaha apna Service ID daalo
      "template_8yrdima",   // <- yaha apna Template ID daalo
      form.current,
      "jHc6QhIFnJFTr-a1-"     // <- yaha apna Public Key daalo
    )
      .then((result) => {
        console.log(result.text);
        alert("✅ Message sent successfully!");
        e.target.reset(); // Reset the form after successful submission
      }, (error) => {
        console.log(error.text);
        alert("❌ Failed to send message!");
      });
  };

  return <>
    <div className="content">
      <span className="Dev" id="contact"> Content </span>
      <div className="contect">
        <h3>Get In Touch</h3>
        <p>If you have any questions or inquiries, feel free to reach out!</p>
        <form ref={form} onSubmit={sendEmail} method="POST" className="FormElement">
          <label htmlFor="name" >Name : </label>
          <input type="text" name="name" placeholder="Your Name" required className="input" />
          <label htmlFor="email" >Email : </label>
          <input type="email" name="email" placeholder="Your Email" required className="input" />
          <label htmlFor="phone" >Phone : </label>
          <input type="Number" name="phone" placeholder="Your Phone Number" required maxLength={10} className="input" />
          <label htmlFor="message" >Message : </label>
          <textarea name="message" placeholder="Your Message" required rows={4} cols={50} className="input" ></textarea>
          <div className="from-btn">
            <button type="submit" className="Submit">Send </button>
            <button type="reset" className="Submit">Reset</button>
          </div>
          <div className="s-media">
            <FaWhatsapp id="s-logo" />
            <FaInstagram id="s-logo" />
            <FaLinkedin id="s-logo" />

          </div>
        </form>

      </div>
    </div>

    <div className="arrow" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>

      <FaArrowUp />
    </div>


  </>
}

export const Footer = () => {
  return <>
    <div className="footer">
      <p>&copy; 2023 Pramod Prajapati. All rights reserved.</p>
    </div>
  </>
}

export const MobileNav = () => {
  return <>
    <nav id="Nav">
      <div id="mobile-nav">
        <span>Dev</span>
        <IoCloseSharp id="close-icon" onClick={() => document.getElementById("Nav").style.display = 'none'} />
      </div>
      <div id="mid-menu">
        <a href="#hero-section"><l1>Home</l1></a>
        <a href="#about"><l1>About</l1></a>
        <a href="#services"><l1>Service</l1></a>
        <a href="#contact"><l1>Contect</l1></a>
      </div>

      <div className="log">
        <button className="logbtn">log In</button>
        <button className="logbtn">Sign Up</button>
      </div>

    </nav>


  </>
}

export default Navbar;

function Download() {
  const fileUrl = 'http://localhost:5173/pramod[1].pdf';
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'pramod[1].pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



