import "./LoginPage.css";
import { useState } from "react";
import { PhoneInput  } from "react-international-phone";
import "react-international-phone/style.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [phone, setPhone] = useState("");
  return (
    <div className="login-section py-5">
      <div className="login-container-main pt-5">
        <div className="container">
          <div className="log-in-content">
            <h2>Register</h2>
            <div className="userNameInfo">
              <input
                type="text"
                placeholder="First Name"
                maxLength={15}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                maxLength={15}
                required
              />
            </div>
            <div className="userMailInfo">
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <PhoneInput
                defaultCountry="eg"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                forceDialCode={true}
              />
            </div>
            <div className="userPassInfo">
              <div className="agree">
              <input
                type="checkbox"
                id="readterms"
                name="Agree to terms and conditions"
              />
              <label htmlFor="readterms">Agree to terms and conditions</label>
              </div>
            </div>
            <div className="log-in-btn">
              <button className="btn btn-info fs-5 fw-light">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <div className="login-section py-5">
      <div className="login-container-main pt-5">
        <div className="container">
          <div className="log-in-content">
            <h2>Login</h2>
            <div className="userMailInfo">
              <input type="text" placeholder="User Name" required />
              <input type="password" placeholder="Password" required />
            </div>
            <div className="log-in-btn">
              <button className="btn btn-success fs-5 fw-light">Login</button>
            </div>
            <div className="forgot-pass text-center">
              <Link href="/">Forgot Password?</Link>
              <p>Don't have an account?</p>
              <Link className="btn btn-info" to="/Register-Page">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;

export {Login}