import React from "react";
import "./Login.css";
import { Button, Col, Image, Row } from "react-bootstrap";
export default function Login() {
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
              />

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="form-control"
              />
<br/>
              <button className="btn btn-primary w-100 mt-2">Login</button>
            </form>
          </div>
        </div>
        </div>
        </Col>
        <Col lg={4} md={12} sm={12}>
          
        <div className="login card-right">
          
          <div className="form">
          <Row>
            <Col lg={"1"}><Image src="https://tobeto.com/_next/static/media/dotv.9454a9b6.svg"  width={"28px"}height={"28px"}></Image> </Col>
            <Col lg={"10"}><Image src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg" width={"200px"}height={"100px"}></Image></Col>
            <Col lg={"12"}>
            
            <div className="text-center">
              <hr />
              <div className="right-card-bottom-logo">
              <span className="rigth-card-job">Aradığın "İş" Burada!</span>
              <br></br>
              <Button className="btn-sm">Başvur</Button>
              </div>
            </div>
            
            
            </Col>
          </Row>
          
          
          </div>

        </div>
        </Col>
        <Col lg={2} md={12} sm={12}></Col>
        </Row>
    </>
  );
}