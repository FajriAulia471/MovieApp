import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/actions/auth";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password, name };

    if (password !== confirmPassword) {
      toast.error("Confirm password must be same with password");
      return;
    }

    dispatch(register(data, navigate));
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-7 col-lg-6 col-xl-5">
            <img src={logo} className="img-fluid " alt="Logo" loading="lazy" />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={onSubmit}>
              <h3 className="text-center mt-5" style={{ fontWeight: "bold" }}>
                Register
              </h3>
              {/* Name input  */}
              <div className="form-outline mb-4">
                <input
                  type="name"
                  id="form1Example13"
                  className="form-control form-control-lg mt-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="form-label" htmlFor="form1Example13">
                  Username
                </label>
              </div>

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

              {/* Confirm Password input  */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="form1Example23">
                  Confirm Password
                </label>
              </div>

              {/* Submit button  */}
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block w-100 mb-5"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
