import { useEffect, useState } from "react";
import "./aboveNav.css";
import anime from "animejs/lib/anime.es.js";
import HeaderAnimation from "./NavItemsComp/animathionAbove";
const AboveNav = () => {
  const textHead = document.querySelectorAll(".AnimationTextHeader");
  const tl = anime.timeline({
    duration: 20000,
    loop: true,
  });
  tl.add({
    targets: textHead,
    translateX: ["-100%", "290%"],
    easing: "linear",
  });
  const [time, setTime] = useState();
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  useEffect(() => {
    const update = () => {
      setTime(currentDateTime);
    };
    const timerID = setInterval(() => update(), 1000);
    return () => clearInterval(timerID);
  }, [currentDateTime]);
  return (
    <>
      <div
        className={`aboveNavContainer p-3 p-lg-0 pb-lg-2  ${
          window.location.pathname.length > 1 ? "d-none" : " "
        }`}
      >
        <div className="container-fluid p-0">
          <HeaderAnimation />
          <div className="container p-0 d-flex justify-content-between">
            <div className="socialIcons1">
              <div className="socialIcons">
                <span className="socialItem">
                  <a href="https://www.facebook.com/SAMii.MOHAMEdd">
                    <i
                      className="fa-brands fa-facebook fa-lg"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </a>
                </span>
                <span className="socialItem mx-2">
                  <a href="https://github.com/Samiix10">
                    <i
                      className="fa-brands fa-github fa-lg"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </a>
                </span>
                <span className="socialItem">
                  <a href="https://www.linkedin.com/in/sami-mohamed-161114281/">
                    <i
                      className="fa-brands fa-linkedin fa-lg"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="DataTime ">
              <span>{time}</span>
            </div>
            <div className="socialIcons2  d-none d-lg-block">
              <div className="socialIcons">
                <span className="PhoneContact">
                  {" "}
                  <span className="socialItem ">
                    <i
                      className="fa-brands fa-whatsapp fa-lg me-1"
                      style={{ color: "#ffffff" }}
                    ></i>
                    for Contact :
                  </span>{" "}
                  +20 1151687078
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboveNav;
