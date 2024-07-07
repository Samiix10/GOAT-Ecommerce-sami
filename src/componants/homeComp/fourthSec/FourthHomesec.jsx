import "./FourthHomeSec.css";
import FirtsImg from "../../../assits/homeFourthSection/undraw_interior_design_re_7mvn.svg";
import SecImg from "../../../assits/homeFourthSection/undraw_team_collaboration_re_ow29.svg";
import ThirdImg from "../../../assits/homeFourthSection/undraw_instant_analysis_re_mid5.svg";
import { Link } from "react-router-dom";

const FourthHomeSec = () => {
  return (
    <div className="Fourth-Home-Section">
      <div className="Fourth-Home-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 py-1 py-md-0 mx-auto mx-md-0 col-md-6 col-lg-3 RowContentFourth">
              <div className="Box-Fourth-Content">
                <div className="Box-Fourth-img">
                  <img src={FirtsImg} alt="FirtsImg" />
                  <span className="Creativity">
                    creativity comes from trust.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-11 py-1 py-md-0 mx-auto mx-md-0 d-md-none d-lg-block col-lg-6 RowContentFourth">
              <div className="Box-Fourth-Content">
                <div className="Box-Fourth-img">
                  <img src={SecImg} alt="SecImg" />
                  <span className="HaveGood">
                    to have a good idea, have a lot of them .
                  </span>
                </div>
              </div>
            </div>
            <div className="col-11 py-1 py-md-0 mx-auto mx-md-0 col-md-6 col-lg-3 RowContentFourth">
              <div className="Box-Fourth-Content">
                <div className="Box-Fourth-img">
                  <img src={ThirdImg} alt="ThirdImg" />
                  <span className="WorkToFit">we work to fit your needs.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Fourth-Home-footer py-5">
          <span>
            <Link to={"/All-prudacts"}>
            <span>see all prudacts</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FourthHomeSec;
