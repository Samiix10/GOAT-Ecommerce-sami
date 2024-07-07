import "./thirdHome.css";

const ThirdHome = () => {
  return (
    <div className="third-home">
      <div className="Thied-Container">
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto mx-md-0 col-md-5 col-lg-4 Row-Cols">
              <div className="box-third-content">
                <div className="Box-icon">
                  <i
                    className="fa-solid fa-truck  fa-2xl"
                    style={{ color: " #f7db25" }}
                  ></i>
                </div>
                <div className="Box-content">
                  <p>
                    FREE STANDARD SHIPPING
                  </p>
                  <p>
                    ON ORDERS OVER $60
                  </p>
                </div>
              </div>
            </div>
            <div className="col-8 mx-auto mx-md-0 col-md-5 col-lg-4 Row-Cols">
              <div className="box-third-content">
                <div className="Box-icon">
                  <i
                    className="fa-solid fa-user fa-2xl"
                    style={{ color: " #f7db25" }}
                  ></i>
                </div>
                <div className="Box-content">
                  <p>INTRODUCE YOUR FRIEND</p>
                  <p>AND RECEIVE $20 OFF</p>
                </div>
              </div>
            </div>
            <div className="col-8 mx-auto mx-md-0 col-md-5 col-lg-4 Row-Cols">
              <div className="box-third-content">
                <div className="Box-icon">
                  <i
                    className="fa-solid fa-id-badge  fa-2xl"
                    style={{ color: " #f7db25" }}
                  ></i>
                </div>
                <div className="Box-content">
                  <p>
                    JOIN VIP MEMBER AREA
                  </p>
                  <p>AND GAIN STORE CASH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ThirdHome;