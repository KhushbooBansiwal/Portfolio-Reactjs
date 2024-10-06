import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser'
const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef()

  useEffect(() => {
    setLetterClass("text-animate-hover");

    const timer = setTimeout(() => {}, 3000);

    return () => clearTimeout(timer);
  }, []);
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .sendForm(
      'service_90qypng',
      'template_f9luouj',
      refForm.current,
      '2sJdxs3d4FEoawnLs'
    )
    .then(
      () => {
        alert('Message successfully sent!')
        window.location.reload(false)
      },
      () => {
        alert('Failed ,Please try again')
      }
    )
  }


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Great ideas deserve great conversations. Let’s collaborate and turn
            your vision into an inspiring reality!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="I'd love to hear from you!"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
        </div>
          </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default Contact;
