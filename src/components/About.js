import { logCustomEvent } from "../config/LogGaEvents";

const About = () => {

  const educationExp = [
    {
      yearSpan: "Feb 2022 - Feb 2024",
      timeDuration: "2 years",
      role: "Senior Software Engineer",
      place: "Agribazaar, Delhi",
      roleType: "Full Time",
      image: "agribazaar.png",
      description: `<ul>
        <li>
          Leading the development of Agribazaar - Field Connect app which is used by Relationship Managers to manage business clients, and do real-time tracking of
          user requirements.
        </li>
        <li>
          Successfully delivered 10+ business-oriented in-house modules (React Native), taking ownership of their technical
          administration and guiding them from inception to completion.
        </li>
        <li>
          Played a pivotal role as a Senior Mobile developer to convert old MVC architecture into Enhanced MVC architecture by restructuring 60% part of code.
        </li>
        <li>
          Gained proficiency in NodeJS for managing backend API requirements for both government and private businesses.
        </li>
        <li>
          Supervised and mentored multiple interns.
        </li>
      </ul>`
    },
    {
      yearSpan: "Dec 2020 - Jan 2022",
      timeDuration: "1 year",
      role: "Software Engineer",
      place: "EC Infosolutions Pune, Maharashtra",
      roleType: "Full Time",
      image: "ec_info.jpeg",
      description: `<ul>
        <li>
        Successfully designed and developed 5 impactful React and React Native applications, with 3 of them
        currently live on both Play Store and App Store.
        </li>
        <li>
        Demonstrated versatile expertise by leading end-to-end development for several projects as the sole
        Frontend developer, while also collaborating effectively with teams on other ventures.
        </li>
        <li>
        Key achievement: Spearheaded the development of 2 critical applications for Ekey, a US-based startup,
        catering to both customers and product owners.
        </li>
      </ul>`
    },
    {
      yearSpan: "Aug 2020 - Present",
      timeDuration: "3 years 5 months",
      role: "Personal Projects",
      place: "Jodhpur",
      roleType: "Part Time",
      image: "personalProjects.jpg",
      description: `<ul>
        <li>
          Experience in end-to-end development of various small-scale personal/freelance projects using React Native and MERN stack.
        </li>
        <li>
          Anime Tracker app based on Anilist using graphQL APIs provided by AniList <a href="https://github.com/arthurDz/AniChan/tree/dev_shaz" target="_blank" rel="noreferrer">Link</a>
        </li>
        <li>
          Participated in the Hackerearth StackHack hackathon and built an event registration page with ReactJS and Material UI.
          <a href="https://eventregistration-stackhack.firebaseapp.com" target="_blank" rel="noreferrer">Link</a>
        </li>
      </ul>`
    },
  ]
  const skills = [
    {
      name: "React Native",
      scale: "80"
    },
    {
      name: "JavaScript",
      scale: "80"
    },
    {
      name: "ReactJS",
      scale: "50"
    },
    {
      name: "NodeJS",
      scale: "40"
    },
    {
      name: "MongoDB",
      scale: "20"
    },
    {
      name: "MERN stack",
      scale: "60"
    },
    {
      name: "Redux",
      scale: "65"
    },
  ]

  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/me.jpg" width="100%" height="100%" title="" alt="" />
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-lg m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a Senior Front-end mobile/web developer with over 3.5 years of
                  experience.{" "}
                </h3>
                <p>
                  {`I'm`} a Senior software sorcerer conjuring up delightful digital experiences with 3.5 years of wizardry in React Native and React JS.
                  <br />
                  Crafting enchanting mobile marvels and web wonders, sprinkled with a dash of innovation and a pinch of pixel-perfection.
                  Embracing the code cauldron to brew magical user journeys, one line of spellbinding code at a time!.
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">20+</span>
                      <div className="media-body">
                        Projects <br />
                        Completed so far.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#contactus" onClick={() => logCustomEvent("contact-me-btn-clicked-from-aboutMe")}>
                    <span>Contact Me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Skills</h3>
        </div>
        <div className="row">
          {/* <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              {
                educationExp.map((val, index) => (
                  <li key={index}>
                    <span>{val.yearSpan}</span>
                    <p>{val.timeDuration}</p>
                    <h6>{val.role}</h6>
                    <p>{val.place}</p>
                  </li>
                ))
              }
            </ul>
          </div> */}
          <div className="col-lg ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              {
                skills.map((val, index) => (
                  <div className="skill-lt" key={index}>
                    <h6>{val.name}</h6>
                    <div className="skill-bar">
                      <div className="skill-bar-in" style={{ width: `${val.scale}%` }}>
                        <span data-toggle="tooltip" title={`${val.scale}%`} />
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          {
            educationExp.map((val, index) => (
              <div className="resume-row" key={index}>
                <div className="row">
                  <div className="col-sm-3 col-md-3 col-xl-2">
                    <div className="">
                      <img src={`static/img/${val.image}`} title="" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-9 col-md-9 col-xl-10">
                    <div className="rb-right">
                      <h6>{val.role}</h6>
                      <label>{val.place} | {val.yearSpan}</label>
                      <div className="rb-time">{val.roleType}</div>
                      {/* <p>
                        {val.description}
                      </p> */}
                      <div dangerouslySetInnerHTML={{ __html: val.description }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};
export default About;
