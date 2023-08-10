import React, { useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else {
      // Perform form submission logic here
    }
  };

  const navigate = useNavigate();

  const handleNav = () => {
    // Navigate to the portfolio page
    navigate('/certificates');
  };

  return (
    <>
      <div className="arrow-container1" id="arrow" onClick={handleNav}>
        <span className="arrow-text1">Certificates</span>
        <img src="arr.png" alt="" className="arrow1" />
      </div>
      <section className="current">
        <div>
          <div className="content pages" id="contact">
            <section className="centered">
              <div className="wrapper">
                <header>
                  <h1>Get in touch</h1>
                  <p>
                    If you wanna get in touch, talk to me about a project collaboration or just say hi,
                    fill up the awesome form below or send an email to{' '}
                    <span className="fancy">
                      <a href="mailto:muhammadaliansari180@gmail.com">muhammadaliansari180@gmail.com</a>
                    </span>{' '}
                    and ~let's talk.
                  </p>
                </header>
                <div className="lets-talk">
                  <form onSubmit={handleSubmit}>
                    <ul className="input-block">
                      {currentStep === 1 && (
                        <li className="active name">
                          <div className="label cf_">
                            <i className="i-svg user" data-icon="user,"></i>
                            <label title="Name">Fill with your name</label>
                          </div>
                          <i className="i-svg common" data-icon="user,"></i>
                          <input
                            type="text"
                            name="name"
                            placeholder="Fill with your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </li>
                      )}
                      {currentStep === 2 && (
                        <li className="email">
                          <div className="label cf_">
                            <i className="i-svg mail" data-icon="envelope,"></i>
                            <label title="email">now your email address</label>
                          </div>
                          <i className="i-svg common" data-icon="envelope,"></i>
                          <input
                            type="text"
                            name="email"
                            placeholder="now your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </li>
                      )}
                      {currentStep === 3 && (
                        <li className="msg">
                          <div className="label cf_">
                            <i className="i-svg msg" data-icon="edit,"></i>
                            <label title="message">now write your awesome message :)</label>
                          </div>
                          <i className="i-svg common" data-icon="edit,"></i>
                          <textarea
                            placeholder="now write your awesome message :)"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          ></textarea>
                        </li>
                      )}
                    </ul>
                    <div className="submit">
                      {currentStep < 3 && (
                        <button type="submit" color="teal" width="100">
                          Next
                        </button>
                      )}
                      {currentStep === 3 && (
                        <button type="submit" color="teal" progress="true">
                          Submit your message
                        </button>
                      )}
                    </div>
                    <div className="status"></div>
                  </form>
                  <div className="share">
                    <h4>Let's get social</h4>
                    <p>Follow my online fan page on Facebook and profiles on Twitter, GitHub, and Linkedin.</p>
                    <div className="follow-me1">
                      <ul>
                        <li>
                          <a href="https://github.com/aliansari180" title="Follow on GitHub">
                            <img src="git2.png" alt="GitHub" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/ali-ansari-58567923b/" title="Connect on Linkedin">
                            <img src="linkd.png" alt="LinkedIn" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/muhammadaliansari180/" title="Follow on Instagram">
                            <img src="insta.png" alt="Instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
