import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/auth";
import GoogleLogin from "../components/GoogleLogin";
import logo from "../assets/logo.png";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };

    dispatch(login(data, navigate));
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-7 col-lg-6 col-xl-5">
            <img src={logo} className="img-fluid" alt="Logo" loading="lazy" />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={onSubmit}>
              <h3 className="text-center" style={{ fontWeight: "bold" }}>
                Login
              </h3>
              {/* Email input  */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg mt-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
              </div>

              {/* Password input  */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
              </div>

              {/* Submit button  */}
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block w-100"
              >
                Sign in
              </button>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <GoogleLogin buttonText={"Login with Google"} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
