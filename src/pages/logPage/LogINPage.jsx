import toast from "react-hot-toast";
import "./LoginPage.css";
import { useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import User, { UserStatus } from "../../componants/RecoilAtoms/User.Atom";
import CartItems from "../../componants/RecoilAtoms/cart.Atom";
import LikedItems from "../../componants/RecoilAtoms/liked.Atom";

const Register = () => {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("Users")) {
      setUsers(JSON.parse(localStorage.getItem("Users")));
    }
  }, []);
  function HandlingUsers() {
    const emails = Users.map((e) => e.email);
    const phones = Users.map((e) => e.phone);
    const users = Users.map((e) => e.username);
    if (!document.getElementById("readterms").checked) { 
      toast.error("Please agree to the terms and conditions");
      return;
    }else if (
      !UserInfo.password ||
      !UserInfo.email ||
      !UserInfo.firstName ||
      !UserInfo.lastName ||
      !UserInfo.username ||
      !UserInfo.phone
    ) {
      toast.error("please complet the fields!");
    } else if (emails.includes(UserInfo.email)) {
      toast.error("Email already exists!");
    } else if (users.includes(UserInfo.username)) {
      toast.error("Username already exists!");
    } else if (phones.includes(UserInfo.phone)) {
      toast.error("Phone number already exists!");
    } else {
      setUsers((prevUsers) => [...prevUsers, { ...UserInfo }]);
      localStorage.setItem(
        "Users",
        JSON.stringify([...Users, { ...UserInfo }])
      );
      toast.success("User added successfully!");
      setTimeout(() => {
        window.location.href = "/Login-Page";
      }, 1000);
    }
  }
  const [userFirstname, setUserFisrtname] = useState("");
  const [userLastname, setUserLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  // const passwordstrong = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
  const UserInfo = {
    firstName: userFirstname,
    lastName: userLastname,
    username: username,
    email: email,
    password: password,
    phone: phone,
  };
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
                onChange={(e) => setUserFisrtname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                maxLength={15}
                required
                onChange={(e) => setUserLastname(e.target.value)}
              />
            </div>
            <div className="userMailInfo">
              <input
                type="text"
                placeholder="Username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="password">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor="password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={
                      showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye"
                    }
                  ></i>
                </label>
              </div>
              <div className="confirm">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="confirm your Password"
                  id="confirm"
                  required
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
                <label
                  htmlFor="confirm"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  <i
                    className={
                      showConfirm ? "fa-solid fa-eye" : "fa-solid fa-eye"
                    }
                  ></i>
                </label>
              </div>
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
              <button
                className="btn btn-info fs-5 fw-light"
                onClick={() => {
                  password === confirmPassword
                    ? HandlingUsers()
                    : toast.error("password didn't match");
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  let users = [];
  if (localStorage.getItem("Users")) {
    users = JSON.parse(localStorage.getItem("Users"));
  }
  const [showPassword, setShowPassword] = useState(false);
  const [showeye, setShoweye] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useRecoilState(User);
  const [userstate, setUserstate] = useRecoilState(UserStatus);
  const userCart = useRecoilValue(CartItems);
  const userLiked = useRecoilValue(LikedItems);
  function editeuser(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  function login(username, password) {
    const userExists = users.some(
      (e) => e.username === username && e.password === password
    );
    if (userExists) {
      const User = users.find(
        (e) => e.username === username && e.password === password
      );
      // setUser(
      //   editeuser(users, users.indexOf(User), {
      //     ...User,
      //     UserCart: [...userCart],
      //     userLiked: [...userLiked],
      //   })
      // );
      localStorage.setItem(
        "Users",
        JSON.stringify(
          editeuser(users, users.indexOf(User), {
            ...User
          })
        )
      );
      toast.success("Login successful!");
      localStorage.setItem("loginstate", "true");
      localStorage.setItem(
        "loggedUser",
        JSON.stringify({
          ...User,
        })
      );
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      toast.error("Incorrect username or password!");
    }
  }

  return (
    <div className="login-section py-5">
      <div className="login-container-main pt-5">
        <div className="container">
          <div className="log-in-content">
            <h2>Login</h2>
            <div className="userMailInfo">
              <input
                type="text"
                placeholder="User Name"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="password">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  id="password"
                  onFocus={() => setShoweye(true)}
                  onBlur={() => setShoweye(false)}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  className={`${!showeye ? " d-none" : "d-inline-block"}`}
                  htmlFor="password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={
                      showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye"
                    }
                  ></i>
                </label>
              </div>
            </div>
            <div className="log-in-btn">
              <button
                className="btn btn-success fs-5 fw-light"
                onClick={() => login(username, password)}
              >
                Login
              </button>
            </div>
            <div className="forgot-pass text-center">
              <Link href="/">Forgot Password?</Link>
              <p>Don't have an account?</p>
              <Link className="btn btn-info" to="/Register-Page">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

export { Login };
