import React, { useState, FormEvent } from "react";
import "./Login.css";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, UserCredentials } from "../../store/reducers/userReducer";
import tokenService from "../../core/services/tokenService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redux state
  const { loading, error } = useSelector((state:any) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = (e: FormEvent) => {
    e.preventDefault();

    let userCredentials: UserCredentials = {
      email: email, // Assuming email corresponds to the username
      password,
    };

    dispatch(loginUser(userCredentials) as any).then((result:any) => {
      if (result.type==="user/loginUser/fullfilled") {
        setEmail("");
        setPassword("");
        navigate("/");
      }
    });
  };

  return (
    <>
      <Row className="p-5 mb-5">
        <Col lg={2} md={12} sm={12}></Col>
        <Col lg={4} md={12} sm={12}>
          <div className="login-main">
            <div className="login card-login-animation">
              <div className="form">
                <form noValidate>
                  <Image
                    src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                    width={"130px"}
                    className="mb-4"
                  ></Image>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email id / username"
                    className="form-control inp_text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                  <button
                    className="btn btn-primary w-100 mt-2"
                    onClick={handleLoginEvent}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Col>
        
        <Col lg={3} md={6} sm={12}>
          <div className="login card-right">
            <div className="form">
              <div className="text-center mt-5">
                <Image
                  src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                  width={"100px"}
                ></Image>
                <hr />
                <div className="right-card-bottom-logo">
                  <span className="rigth-card-job">Aradığın "İş" Burada!</span>
                  <br />
                  <Button className="btn-sm">Başvur</Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <div className="col-3"></div>
      </Row>
    </>
  );
}
