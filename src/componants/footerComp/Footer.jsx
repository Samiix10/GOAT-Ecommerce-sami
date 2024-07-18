import "./footerMain.css";
import logo from "../../assits/photosforlogpages/goaat.jpeg";
import { useHref } from "react-router-dom";

const Footer = () => {
  const path = useHref()
  return (
    <footer className={`footer-main  ${path === "/Login-Page" ? "d-none" : path === "/Register-Page" ? "d-none" : " "}`}>
      <div className="container">
        <div className="row w-100 mx-auto">
          <div className="col-11 mx-auto mx-md-0 col-md-6 col-lg-4 Boxfooter  flex-column">
            <h5>About Us</h5>
            <p className="text-uppercase text-center">
              the goat online store you can buy what you want and we can delever
              where you want .
            </p>
          </div>
          <div className="col-11 mx-auto mx-md-0 col-md-6 col-lg-4 Boxfooter">
            <div className="imgcontentainer ">
              <img src={logo} alt="goatlogo" />
            </div>
          </div>
          <div className="col-11 mx-auto mx-lg-0 col-md-6 col-lg-4 Boxfooter ">
            <div className="SocialIcons py-4 py-md-2 ">
              <a href="https://www.facebook.com/SAMii.MOHAMEdd">
                <i className="fa-brands fa-facebook fa-2xl"></i>
              </a>
              <a href="https://github.com/Samiix10">
                {" "}
                <i className="fa-brands fa-github fa-2xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/sami-mohamed-161114281/">
                {" "}
                <i className="fa-brands fa-linkedin fa-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <p className="text-center m-0">
            &copy; 2024 Goat Online Store. All rights reserved. || made by Sami 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
