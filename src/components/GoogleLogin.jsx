import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleLogin } from "../redux/actions/auth";

const GoogleLogin = ({ buttonText }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const data = {
        access_token: tokenResponse.access_token,
      };

      dispatch(googleLogin(data, navigate));
    },
  });

  return (
    <Button
      variant="primary"
      onClick={() => login()}
      className="btn btn-primary btn-lg btn-block w-100 mb-5"
    >
      {buttonText}
    </Button>
  );
};

export default GoogleLogin;
