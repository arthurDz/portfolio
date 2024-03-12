import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../utilits";
import { logCustomEvent } from "../config/LogGaEvents";

const Header = ({ blog }) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  useEffect(() => {
    if (!blog) {
      activeSection();
    }
  }, []);
  const logFooterClick = (socMediaName) => logCustomEvent(`footer_social_media_menu_clicked_${socMediaName}`)
  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link href="/">
              <a className="logo-text">Shashank Gupta</a>
            </Link>
          </div>
          <button
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* End Header */}
      {/* nav bar */}
      <header
        className={`header-left ${sideBarToggle ? "menu-open menu-open-desk" : ""
          }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <img src="static/img/me.jpeg" width="100%" height="100%" title="" alt="" />
              </div>
              <h5>Shashank</h5>
            </div>
          </div>
          {blog ? <MenuWithBlog /> : <MenuWithOutBlog />}
          {/* <MenuWithOutBlog /> */}
        </div>
        <div className="nav justify-content-center social-icons">
          {/* <a href="https://www.facebook.com/kushal.verma.313" target="_blank" rel="noreferrer" onClick={() => logFooterClick("facebook")}>
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://twitter.com/Vermakushal28" onClick={() => logFooterClick("twitter")}>
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.instagram.com/kush2896" target="_blank" rel="noreferrer" onClick={() => logFooterClick("instagram")}>
            <i className="fab fa-instagram" />
          </a> */}
          <a href="https://www.linkedin.com/in/shashank-reactnative-dev/" target="_blank" rel="noreferrer" onClick={() => logFooterClick("linkedin")}>
            <i className="fab fa-linkedin" />
          </a>
          {/* <a href="https://stackoverflow.com/users/8290251/kushal-verma" target="_blank" rel="noreferrer" onClick={() => logFooterClick("stackoverflow")}>
            <i className="fab fa-stack-overflow" />
          </a> */}
          <a href="https://medium.com/@shashankgupta199904" target="_blank" rel="noreferrer" onClick={() => logFooterClick("github")}>
            <i className="fab fa-medium" />
          </a>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;

const MenuWithOutBlog = () => {
  const logMenuClick = (menuName) => logCustomEvent(`menu_clicked_${menuName}`)
  return (
    <Fragment>
      <ul className="nav nav-menu" id="pp-menu">
        <li data-menuanchor="home" className="active">
          <a className="nav-link" href="#home" onClick={() => logMenuClick("home")}>
            <i className="ti-home" />
            <span>Home</span>
          </a>
        </li>
        <li data-menuanchor="about">
          <a className="nav-link" href="#about" onClick={() => logMenuClick("about")}>
            <i className="ti-id-badge" />
            <span>About Me</span>
          </a>
        </li>
        <li data-menuanchor="projects">
          <a className="nav-link" href="#projects" onClick={() => logMenuClick("projects")}>
            <i className="ti-panel" />
            <span>Projects</span>
          </a>
        </li>
        {/* <li data-menuanchor="work">
        <a className="nav-link" href="#work">
          <i className="ti-bookmark-alt" />
          <span>Portfolio</span>
        </a>
      </li>
      */}
      <li data-menuanchor="blog" className="blog">
        <a className="nav-link" href="#blog">
          <i className="ti-layout-media-overlay-alt-2" />
          <span>Blogs</span>
        </a>
      </li> 
        <li data-menuanchor="contactus">
          <a className="nav-link" href="#contactus" onClick={() => logMenuClick("contactMe")}>
            <i className="ti-map-alt" />
            <span>Contact Me</span>
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

const MenuWithBlog = () => {
  useEffect(() => {
    window.addEventListener("scroll", () =>
      document.querySelector(".blog").classList.add("active")
    );
  });

  return (
    <Fragment>
      <ul className="nav nav-menu" id="pp-menu">
        <li data-menuanchor="home">
          <Link href="/#home">
            <a className="nav-link">
              <i className="ti-home" />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="about">
          <Link href="/#about">
            <a className="nav-link">
              <i className="ti-id-badge" />
              <span>About Me</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="projects">
          <a className="nav-link" href="#projects" onClick={() => logMenuClick("projects")}>
            <i className="ti-panel" />
            <span>Projects</span>
          </a>
        </li>
        {/* <li data-menuanchor="services">
          <Link href="/#services">
            <a className="nav-link">
              <i className="ti-panel" />
              <span>Services</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="work">
          <Link href="/#work">
            <a className="nav-link">
              <i className="ti-bookmark-alt" />
              <span>Portfolio</span>
            </a>
          </Link>
        </li> */}
        <li data-menuanchor="blog" className="blog active">
          <Link href="/#blog">
            <a className="nav-link">
              <i className="ti-layout-media-overlay-alt-2" />
              <span>Blogs</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="contactus">
          <Link href="/#contactus">
            <a className="nav-link">
              <i className="ti-map-alt" />
              <span>Contact Me</span>
            </a>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};
