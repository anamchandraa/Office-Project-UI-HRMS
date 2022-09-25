import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

const Login = ({ setUser }) => {
  const [showPassword, setShowPassword] = useState("password");
  const [eye, seteye] = useState(true);
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumberOrEmail, setPhoneNumberOrEmail] = useState("");
  const [type, setType] = useState("EmailId");
  const [loginTypeText, setLoginTypeText] = useState("Email");
  const [showMobile, setShowMobile] = React.useState(false)
  const onClickShowMobile = () => {
    setType('PhoneNumber');
    setShowMobile(true);
    setLoginTypeText("Mobile No.");
  }

  const [showEmail, setShowEmail] = React.useState(false)
  const onClickShowEmail = () => {
    setType('EmailId');
    setShowEmail(true);
    setLoginTypeText("Email");
  }

  const navigate = useNavigate();

  const handleSubmit = async e => {
    
    e.preventDefault();
    if (!phoneNumberOrEmail || !password) {
      setMessage("Please enter valid credentials.");
      return;
    }


    const token = await loginUser(phoneNumberOrEmail, password, type);
    if (token != undefined) {
      setUser({ password: password, phoneNumber: phoneNumberOrEmail });
      localStorage.setItem("token", JSON.stringify(token));
      navigate("/dashboard");

    }
    else {
      setMessage("Please enter valid credentials.");
    }

  };

  async function loginUser(phoneNumberOrEmail, password, type) {
    try {
      const resp = await axios.post("http://localhost:8080/Api/Login", {
        Type: type,
        User: phoneNumberOrEmail,
        Password: password
      });

      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };

  function GetPhoneNumberOrEmail(e) {
    
    if (type === "PhoneNumber") {
      const re = /^[0-9\b]+$/;

      if (e.target.value === '' || re.test(e.target.value)) {
        setPhoneNumberOrEmail(e.target.value)
      }
      else {
        setMessage("Enter only numbers");
      }

    }
    else {
      setPhoneNumberOrEmail(e.target.value)
    }

  }


  const Eye = () => {

    if (showPassword == "password") {
      setShowPassword("text");
      seteye(false);
    } else {
      setShowPassword("password");
      seteye(true);
    }
  };

  return (

    <div>
      <main>
        <div class="container">

          <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                  <div class="d-flex justify-content-center py-4">
                    <a href="index.html" class="logo d-flex align-items-center w-auto">
                      {/* <img src="assets/img/logo.png" alt="" /> */}
                      <span class="d-none d-lg-block">Unifier HRMS</span>
                    </a>
                  </div>

                  <div class="card mb-3">

                    <div class="card-body">




                      <div class="pt-4 pb-2">
                        <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                        <p class="text-center small">Enter your {loginTypeText} and password to login</p>
                        <p class="text-center text-danger">{message}</p>
                      </div>

                      <div class="slide-controls">
                        <input type="radio" name="slide" id="login" checked onClick={onClickShowEmail} />
                        <input type="radio" name="slide" id="signup" onClick={onClickShowMobile} />
                        <label for="login" class="slide login">Email</label>
                        <label for="signup" class="slide signup">Mobile</label>
                        <div class="slider-tab"></div>
                       </div>

                       <form class="row g-3 needs-validation" onSubmit={handleSubmit}>
                        <div class="col-12">
                          <label for="yourUsername" class="form-label">{loginTypeText}</label>
                          <div class="input-group has-validation">
                            {/* <span class="input-group-text" id="inputGroupPrepend">@</span> */}

                            <input
                              type="text"
                              class="form-control"
                              id="phonenumber"
                              value={phoneNumberOrEmail}
                              onChange={e => GetPhoneNumberOrEmail(e)}
                              required />
                            <div class="invalid-feedback">Please enter your Email.</div>
                          </div>
                        </div>

                        <div class="col-12">
                          <label for="yourPassword" class="form-label">Password</label>
                          <input
                            type={showPassword}
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}

                          />
                          {/* <div class="invalid-feedback">Please enter your password!</div> */}

                          <span onClick={Eye} class="fa fa-info-circle errspan"></span>

                          <i
                            onClick={Eye}
                            className={`bi ${eye ? "bi-eye-slash" : "bi-eye"} eye-icon`}
                          />
                        </div>
                        <div class="col-12" style={{alignmentitem:'right'}}>
                          <p class="small mb-0"><a href="pages-register.html">Forgot password?</a></p>


                        </div>
                        {/* <div className="input-group mb-3">
                    <input type={password}
                      className={` ${warnpassword ? "form-control warning" : "form-control"}`}
                      placeholder="Password"
                      value={inputtext.password}
                      onChange={inputEvent}
                      name="password" />
                    <div className="input-group-append">
                      <div className="input-group-text">
                         <span className="fas fa-lock"></span>
                   
                       <i
                          onClick={Eye}
                          className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
                        />
                      </div>
                    </div>
                  </div>  */}


                        <div class="col-12">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                            <label class="form-check-label" for="rememberMe">Remember me</label>
                          </div>
                        </div>
                      <div class="col-12">
                          <button class="btn btn-primary w-100" type="submit">Login</button>

                        </div>
                        <div class="col-12">
                          <p class="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                        </div>
                      </form>

                    </div>
                  </div>

                  <div class="credits">

                    {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
                  </div>

                </div>
              </div>
            </div>

          </section>

        </div>
      </main>

      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    </div>
  );
};
export default Login;
