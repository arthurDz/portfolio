import dynamic from "next/dynamic";
import { logCustomEvent } from "../config/LogGaEvents";
import ProjectTile from "./ProjectTile";
import ProjectCard from "./ProjectCard";
import { Fragment } from "react";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {

  const whatIDo = [
    {
      name: "Agribazaar",
      image: "/static/projects/agribazaar.png",
      blurImage: "/projects/blur/agribazaar.jpeg",
      description: "Agribazaar, Staragri Pvt. Ltd. main application",
      url: "https://play.google.com/store/apps/details?id=com.agribazaarapp&hl=en_IN&gl=US",
      tech: ["rn", "maps", "javascript", "firebase", "sqlite", "aws", "redux"],
    },
    {
      name: "Agribazaar - Field Connect",
      image: "/static/projects/agribazaar_2.png",
      blurImage: "/projects/blur/agribazaarDynamicForm.jpg",
      description: "Agribazaar - Field Connect, RM application",
      url: "https://play.google.com/store/apps/details?id=com.rmapp&hl=en_US",
      tech: ["rn", "maps", "javascript", "firebase", "sqlite", "typescript", "nodejs", "redux"],
    },
    {
      name: "Soul 33",
      image: "/static/projects/soul_33.png",
      blurImage: "/projects/blur/epoultry-blur.jpg",
      description: "The app features a collection of guided meditations, updated weekly, curated by Gaia",
      url: "https://play.google.com/store/apps/details?id=com.ecinfosolutions.soul33&hl=en_US",
      tech: ["rn", "reanimated", "javascript", "chat", "mongodb", "nodejs", "redux"],
    },
    {
      name: "ToDo Tracker",
      image: "/static/projects/todo.png",
      blurImage: "/projects/blur/photoGallery-blur.jpg",
      description: "Tracker App to track all tasks of users with cool animations",
      url: "https://github.com/arthurDz/ToDoTracker",
      tech: ["rn", "reanimated", "firebase"],
    },
    {
      name: "Hackathon 2020",
      image: "/static/projects/eventReg.jpg",
      blurImage: "/projects/blur/eventReg-blur.jpg",
      description: "Event registration system",
      url: "https://eventregistration-stackhack.firebaseapp.com/",
      tech: ["react", "material-ui", "firebase", "spring"],
    },
    {
      name: "React Native + S3",
      image: "/static/projects/rn_aws.png",
      blurImage: "/projects/blur/market-blur.jpg",
      description: "Integration of AWS S3 with React Native without backend",
      url: "https://medium.com/@shashankgupta199904/select-files-and-upload-the-on-aws-s3-bucket-in-react-native-0-60-ec74d00bbe56",
      tech: ["rn", "amazon_s3", "medium"],
    },

  ]
  return (
    <section
      id="projects"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Projects I&apos;ve worked on so far</h3>
        </div>
        <div className="row">
          {
            whatIDo.map((val, index) => (
              <Fragment key={index}>
                {/* <div className="col-sm-6 m-15px-tb" key={index}>
                <div className="feature-box-01 media">
                  <i className={`icon theme-bg ${val.icon}`} />
                  <div className="feature-content media-body">
                    <h5>{val.title}</h5>
                    <p>
                      {val.description}
                    </p>
                  </div>
                </div>
              </div>
                <div key={index} >
                  <ProjectTile 
                    project={val} 
                    classes={index === whatIDo.length - 1 ? "" : "mr-16"}
                  />
                </div> */}
                <ProjectCard val={val}/>
              </Fragment>
            ))
          }
        </div>
        {/* <div className="separated" /> */}
        {/* <Testimonials /> */}
      </div>
    </section >
  );
};
export default Services;
