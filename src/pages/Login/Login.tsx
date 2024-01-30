import React from "react";
import "./Login.css";
import { Button, Col, Image, Row } from "react-bootstrap";
export default function Login() {
  return (
    <>
        <Row className="p-5 mb-5">
        <Col lg={3} md={6} sm={12}></Col>
        
        <Col lg={3} md={6} sm={12}>
        <div className="login-main">
        <div className="login card-login-animation">
          <div className="form">
            <form noValidate>
              <Image
                src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                width={"120px"}
                className="mb-3"
              ></Image>
              <input
                type="email"
                name="email"
                placeholder="Enter email id / username"
                className="form-control inp_text"
                id="email"
              />

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="form-control"
              />

              <button className="btn btn-primary w-100 mt-6">Login</button>
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
              <br/>
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