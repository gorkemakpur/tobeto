import React, { useState } from "react";
import "./Catalog.css";
import { Card, Col, ListGroup, Row, Button} from "react-bootstrap";
import { BsClock, BsPerson, BsPlayCircleFill } from "react-icons/bs";

export default function Catalog() {
  const menuItems = ["Kategori", "Eğitimler", "Seviye", "Konu", "Yazılım Dili", "Eğitmen"];
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (menu : any) => {
    setSelectedMenu(selectedMenu === menu ? null : menu);
  };

  return (
    <Row className="mt-3">
      {/* katalog sol menü */}
      <Col lg={4} md={12} className="mb-4">
      <Row>
        <Col lg={5}></Col>
        <Col lg={7}>
          <Card style={{ width: "15rem" }}>
            <Card.Header
              style={{
                backgroundColor: "#fff",
                color: "#000",
              }}
            >
              <h3>
                Filtrele
                </h3>
            </Card.Header>

            <ListGroup variant="flush">
              {menuItems.map((item, index) => (
                <ListGroup.Item key={index} style={{ cursor: "pointer", color: "#847B8D", borderBottom: "1px solid #847B8D", position: "relative", borderRadius: "15px" }}>
                  <Button
                    variant={selectedMenu === item ? "primary" : "outline-secondary"}
                    onClick={() => handleMenuClick(item)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      borderRadius: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px",
                      backgroundColor: selectedMenu === item ? "#9933FF" : "transparent",
                      color: selectedMenu === item ? "#fff" : "#847B8D",
                    }}
                  >
                    {item}
                    <span style={{ color: "#000", fontSize: "20px" }}>{selectedMenu === item ? "▲" : "ᐯ"}</span>
                  </Button>

                  {selectedMenu === item && (
                    <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                      <input type="text" placeholder="Arama" style={{ marginBottom: "10px" }} />
                      <div>
                        <input type="radio" />
                        <span>Radio 1</span>
                      </div>
                      <div>
                        <input type="radio" />
                        <span>Radio 2</span>
                      </div>
                    </div>
                  )}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Col>
      {/* katalog sol menü bitiş */}

      {/* sağdaki eğitim listesi */}
      <Col lg={8} md={12}>
        <Row>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card
              style={{
                width: "18rem",
                cursor: "pointer",
                borderRadius: "15px",
                position: "relative",
              }}
            >
              <Card.Img
                variant="top"
                src="https://tobeto.s3.cloud.ngn.com.tr/ENK_36573_a8546fa0ff.jpg"
                style={{ borderRadius: "15px" }}
              />
              <BsPlayCircleFill
                color="#8014E4"
                size={30}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
              />

              <Card.Body
                style={{
                  height: "100px",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  backgroundColor: "rgba(65,65,65.5)",
                  backdropFilter: "blur(21.5px)",
                  color: "white",
                  padding: "15px",
                }}
              >
                <Row>
                  <Col
                    lg={12}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Card.Text style={{ marginLeft: "5px", fontWeight:"100",fontSize:"12px"}}>
                      <BsPerson />
                      Gürkan İlişen - <BsClock />
                      4s 14dk
                    </Card.Text>
                  </Col>
                  <Col lg={12}>
                    <Card.Title
                      style={{ marginTop: "10px", fontWeight: "bold" }}
                    >
                      Dinle, Anla, İfade Et: Etkili İletişim Gelişim Yolculuğu
                    </Card.Title>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card
              style={{
                width: "18rem",
                cursor: "pointer",
                borderRadius: "15px",
                position: "relative",
              }}
            >
              <Card.Img
                variant="top"
                src="https://tobeto.s3.cloud.ngn.com.tr/ENK_365670_08eb2bab1a.jpg"
                style={{ borderRadius: "15px" }}
              />
              <BsPlayCircleFill
                color="#8014E4"
                size={30}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
              />

              <Card.Body
                style={{
                  height: "100px",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  backgroundColor: "rgba(65,65,65.5)",
                  backdropFilter: "blur(21.5px)",
                  color: "white",
                  padding: "15px",
                }}
              >
                <Row>
                  <Col
                    lg={12}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Card.Text style={{ marginLeft: "5px", fontWeight:"100",fontSize:"12px"}}>
                      <BsPerson />
                      Gürkan İlişen - <BsClock />
                      1s 14dk
                    </Card.Text>
                  </Col>
                  <Col lg={12}>
                    <Card.Title
                      style={{ marginTop: "10px", fontWeight: "bold" }}
                    >
                      Sürdürülebilir Bir Dünya için Bireysel Farkındalık
                    </Card.Title>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card
              style={{
                width: "18rem",
                cursor: "pointer",
                borderRadius: "15px",
                position: "relative",
              }}
            >
              <Card.Img
                variant="top"
                src="https://tobeto.s3.cloud.ngn.com.tr/ENK_36573_a8546fa0ff.jpg"
                style={{ borderRadius: "15px" }}
              />
              <BsPlayCircleFill
                color="#8014E4"
                size={30}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
              />

              <Card.Body
                style={{
                  height: "100px",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  backgroundColor: "rgba(65,65,65.5)",
                  backdropFilter: "blur(21.5px)",
                  color: "white",
                  padding: "15px",
                }}
              >
                <Row>
                  <Col
                    lg={12}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Card.Text style={{ marginLeft: "5px", fontWeight:"100",fontSize:"12px"}}>
                      <BsPerson />
                      Gürkan İlişen - <BsClock />
                      4s 14dk
                    </Card.Text>
                  </Col>
                  <Col lg={12}>
                    <Card.Title
                      style={{ marginTop: "10px", fontWeight: "bold" }}
                    >
                      Dinle, Anla, İfade Et: Etkili İletişim Gelişim Yolculuğu
                    </Card.Title>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
      {/* sağdaki eğitim listesi bitiş */}
    </Row>
  );
}