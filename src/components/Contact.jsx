import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
            </div>
            </div>
            </div>
  
      <div className="container">
        <span className="big-circle"></span>
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              To know more about cryptocurrency and to solve any query please feel free to contact us!
            </p>

            <div className="info">
              <div className="information">
                <img src="img/location.png" className="icon" alt="" />
                <p> Gomti Nagar, New Delhi</p>
              </div>
              <div className="information">
                <img src="img/email.png" className="icon" alt="" />
                <a href="mailto:abhishekbradwal27@gmail.com"> abhishekbradwal27@gmail.com </a>
              </div>
              <div className="information">
                <img src="img/phone.png" className="icon" alt="" />
                <p>(+91) 9759459658</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form action="index.html" autocomplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label for="">Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label for="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label for="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input"></textarea>
                <label for="">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div><script src="app.js"></script></div>
  );
}

export default Contact;
