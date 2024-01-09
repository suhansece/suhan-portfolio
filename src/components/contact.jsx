import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
    <div className="container">
        <div className="row">
            <div className="contact-left">
                <h1 className="sub-title">Reach Me</h1>
                <p><i className="fa-solid fa-paper-plane"></i>suhansece@gmail.com</p>
                <p><i className="fa-sharp fa-solid fa-phone"></i>8870189700</p>
                <div className="social-icon">
                    <a href="https://wa.me/+918870189700"target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/suhan-m-4876a726a"target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-telegram"></i></a>
                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                </div>
                <a href="images/my-cv.pdf"className="btn btn2">Download CV</a>
            </div>
            <div className="contact-right">
                <form>
                    <input type="text" name="Name" placeholder="Your Name" required/>
                    <input type="email" name="Email" placeholder="Your Email" required/>
                    <textarea name="Message" placeholder="Your Message" rows="6"></textarea>
                    <button type="submit" className="btn btn2" >Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact
