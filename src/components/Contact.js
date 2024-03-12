import emailjs from "emailjs-com";
import { useState } from "react";
import { projectFirestore } from "../config/firebaseConfig"
import { addDoc, collection } from "firebase/firestore";
import { logCustomEvent } from "../config/LogGaEvents";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, message, subject } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const [isEmailSendLoading, setisEmailSendLoading] = useState(false);
  // const userAgent = navigator.userAgent;
  const onSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
      clearError();
    } else {
      setisEmailSendLoading(true);
      logCustomEvent("ContactUs-form-clicked-for-submitted");
      await addDoc(collection(projectFirestore, "contactMe"), {
        name: name,
        email: email,
        message: message,
        subject: subject,
        submittedAt: new Date(),
        // userAgent: userAgent
      })
        .then(() => {
          setError(false);
          clearError();
          setMailData({ name: "", email: "", message: "", subject: "" });
          logCustomEvent(`ContactUs-form-submitted-${name}-${email}`);
          setisEmailSendLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setisEmailSendLoading(false);
          logCustomEvent(`ContactUs-form-submit-failed-${name}-${email}-${err}`);
        }).finally(err => {
          setisEmailSendLoading(false);
        })
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <section
      id="contactus"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Get in touch.</h3>
        </div>
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
              <h4>Want to collaborate in projects?</h4>
              <p>
                Always available for new projects and new challenges if the right project comes
                along, Feel free to contact me.
              </p>
              <ul>
                <li className="media">
                  <i className="ti-map" />
                  <span className="media-body">
                    Jodhpur, Rajasthan - 342003, India
                  </span>
                </li>
                <li className="media">
                  <i className="ti-email" />
                  <span className="media-body">shashank007.sg@gmail.com</span>
                </li>
                <li className="media">
                  <i className="ti-mobile" />
                  <span className="media-body">+91 8003670370</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-form">
              <h4>Hit me up</h4>
              <form id="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="name"
                        onChange={(e) => onChange(e)}
                        value={name}
                        id="name"
                        placeholder="Name *"
                        className={`form-control ${error ? (!name ? "invalid" : "") : ""
                          }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        onChange={(e) => onChange(e)}
                        value={email}
                        id="email"
                        placeholder="Email *"
                        className={`form-control ${error ? (!email ? "invalid" : "") : ""
                          }`}
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        onChange={(e) => onChange(e)}
                        value={subject}
                        id="subject"
                        placeholder="Subject *"
                        className={`form-control ${error ? (!subject ? "invalid" : "") : ""
                          }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        onChange={(e) => onChange(e)}
                        value={message}
                        id="message"
                        placeholder="Your message *"
                        rows={5}
                        className={`form-control ${error ? (!message ? "invalid" : "") : ""
                          }`}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button
                        onClick={(e) => onSubmit(e)}
                        className="px-btn px-btn-theme"
                        type="button"
                        value="Send"
                        disabled={isEmailSendLoading}
                      >
                        {isEmailSendLoading && <><i class="fas fa-spinner fa-spin"></i>&nbsp;</>}
                        send message
                      </button>
                    </div>
                    <span
                      id="suce_message"
                      className="text-success"
                      style={{
                        display:
                          error !== null ? (!error ? "block" : "none") : "none",
                      }}
                    >
                      Message Sent Successfully
                    </span>
                    <span
                      id="err_message"
                      className="text-danger"
                      style={{ display: "none" }}
                    >
                      Message Sending Failed
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12">
            <div className="google-map">
              <div className="embed-responsive embed-responsive-21by9">
                {/* <iframe
                  className="embed-responsive-item"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883"
                  allowFullScreen=""
                /> */}
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?q=Jodhpur,+Rajasthan,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  // width="600"
                  // height="450"
                  // style="border:0;"
                  allowFullScreen=""
                  loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
