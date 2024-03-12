import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import { useEffect } from "react";
import { logCustomEvent } from "../src/config/LogGaEvents";
import { addDoc, collection } from "firebase/firestore";
import { projectFirestore } from "../src/config/firebaseConfig";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const Index = () => {
  // const userAgent = navigator.userAgent;

  // useEffect(() => {
  //   if (navigator && "geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         addDoc(collection(projectFirestore, "userLocation"), {
  //           Latitude: latitude,
  //           Longitude: longitude,
  //           loadedAt: new Date(),
  //           userAgent: userAgent
  //         })
  //       },
  //       (error) => {
  //         // console.error("Error getting location:", error);
  //       }
  //     );
  //   }
  // }, [])
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Shashank Gupta</h1>
                  <p className="lead">
                    I am a Passionate <TypingAnimation />
                  </p>
                  <p className="desc">
                    {/* I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web
                    services and online stores. */}
                    I&apos;m an Enthusiastic and results-driven Senior Software Engineer
                    with 3.5 years of experience in crafting and managing top-tier cross-platform mobile applications leveraging React Native.
                    Proven track record in delivering high-impact projects for clients,
                    strong expertise in React Native, ReactJS, and a passion for solving complex challenges.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="/assets/Shashank_Gupta_Resume.pdf" download onClickCapture={() => logCustomEvent("download-resume-btn-clicked")}>
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/home-banner.jpg" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Portfolio */}
      {/* <Portfolio /> */}
      {/* End Portfolio */}
      {/* Blog */}
      {/* <Blog /> */}
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default Index;
