import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Platform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight,faCalendar} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function Platform() {
  const [activeTab, setActiveTab] = useState("basvurularim");
  const handleTabClick = (tab :any) => {
    setActiveTab(tab);
  };
  return (
    <>
      <Container className="container">
        <Row className="welcome-row">
          <Col xs={12} className="text-center">
            <h1 className="welcome-header">
              TOBETO
              <span>
                'ya hoş geldin <br></br> FirstName
              </span>
            </h1>
            <p className="welcome-subtext">
              Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin
              yanında!
            </p>
          </Col>
          <Col xs={12} className="text-right dotted-image-container">
            <img
              src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
              alt="Purple Dots"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row>
          <div className="platform-main ">
            <Col className="platform-main-shadow">
              <Row className="platform-main-logo  ">
                <img src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg" alt=""></img>
              </Row>
              <Row className="platform-main-r2">
                Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.
              </Row>
              <Row className="platform-main-r3">
                <Col>
                  Aradığın <span className="platform-main-r3-span"> “ </span> İş{" "}
                  <span className="platform-main-r3-span"> ” </span> Burada!
                </Col>
              </Row>
              <Row className="platfom-tabs">
                <div>
                  <ul className="p-tab-list">
                    <li
                      className={`p-tab-list-item ${
                        activeTab === "basvurularim" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("basvurularim")}
                    >
                      Başvurularım
                    </li>
                    <li
                      className={`p-tab-list-item ${
                        activeTab === "my-edu" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("my-edu")}
                    >
                      Eğitimlerim
                    </li>
                    <li
                      className={`p-tab-list-item ${
                        activeTab === "announcement" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("announcement")}
                    >
                      Duyurularım&nbsp;ve&nbsp;Haberlerim
                    </li>
                    <li
                      className={`p-tab-list-item ${
                        activeTab === "survey" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("survey")}
                    >
                      Anketlerim
                    </li>
                  </ul>
                  <div className="p-tab-content">
                    {activeTab === "basvurularim" && (
                      <div className="tab-basvurularim">
                        <Row>
                          <Col md={5} className="basvuru-card">
                            <Row>
                              <Col>
                                İstanbul Kodluyor<br></br>Bilgilendirme<br></br>
                                <span className="basvuru-card-check">
                                  <span className="p-checkmark">&#10003;</span>{" "}
                                  İstanbul Kodluyor Başvuru
                                  &nbsp;&nbsp;&nbsp;Formu onaylandı.<br></br>
                                  <span className="p-checkmark">
                                    &#10003;
                                  </span>{" "}
                                  İstanbul Kodluyor Belge Yükleme
                                  &nbsp;&nbsp;&nbsp;Formu onaylandı.
                                </span>
                              </Col>
                              <Col className="text-right">
                                <div className="status-indicator">
                                  Kabul
                                  Edildi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    )}
                    {activeTab === "my-edu" && (
                      <div className="tab-my-edu">
                        <Row>
                          <Col>
                            <Row className="edus-row">
                              <Link to="/activity" className="edu-card-link  ">
                                <div className="edu-card">
                                  <div className="edu-card-image">
                                    <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"  alt=""></img>
                                  </div>
                                  <div className="edu-card-body">
                                    <h5 className="edu-card-title">
                                      .NET & React Fullstack | Öğrenme Yolculuğu
                                    </h5>
                                    <p className="edu-card-date">
                                      21 Eylül 2023 15:20
                                    </p>
                                    <button className="edu-card-button">
                                      Eğitime Git
                                    </button>
                                  </div>
                                </div>
                              </Link>
                              <Link to="/activity" className="edu-card-link  ">
                                <div className="edu-card">
                                  <div className="edu-card-image">
                                    <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"  alt=""></img>
                                  </div>
                                  <div className="edu-card-body">
                                    <h5 className="edu-card-title">
                                      .NET & React Fullstack | Öğrenme Yolculuğu
                                    </h5>
                                    <p className="edu-card-date">
                                      21 Eylül 2023 15:20
                                    </p>
                                    <button className="edu-card-button">
                                      Eğitime Git
                                    </button>
                                  </div>
                                </div>
                              </Link>{" "}
                              <Link to="/activity" className="edu-card-link  ">
                                <div className="edu-card">
                                  <div className="edu-card-image">
                                    <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"  alt=""></img>
                                  </div>
                                  <div className="edu-card-body">
                                    <h5 className="edu-card-title">
                                      .NET & React Fullstack | Öğrenme Yolculuğu
                                    </h5>
                                    <p className="edu-card-date">
                                      21 Eylül 2023 15:20
                                    </p>
                                    <button className="edu-card-button">
                                      Eğitime Git
                                    </button>
                                  </div>
                                </div>
                              </Link>{" "}
                              <Link to="/activity" className="edu-card-link  ">
                                <div className="edu-card">
                                  <div className="edu-card-image">
                                    <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"  alt=""></img>
                                  </div>
                                  <div className="edu-card-body">
                                    <h5 className="edu-card-title">
                                      .NET & React Fullstack | Öğrenme Yolculuğu
                                    </h5>
                                    <p className="edu-card-date">
                                      21 Eylül 2023 15:20
                                    </p>
                                    <button className="edu-card-button">
                                      Eğitime Git
                                    </button>
                                  </div>
                                </div>
                              </Link>
                            </Row>
                          </Col>
                        </Row>
                        <Row className="all-edu-btn  ">
                          <div className="p-row-container">
                            <a href="/egitimlerim" className="link-full-row">
                              <button className="load-more-btn">
                                <FontAwesomeIcon
                                  icon={faChevronRight}
                                  className="p-button-icon"
                                />
                                <span>Daha Fazla Göster</span>
                              </button>
                            </a>
                          </div>
                        </Row>
                      </div>
                    )}
                    {activeTab === "announcement" && (
                      <div className="tab-announcement">
                        {" "}
                        <Row>
                          <Col>
                            <Row className="anc-row">
                           
                                <Col className="anc-card">
                                  <Row>
                                    <Col>
                                    <div className="anc-title">
                                      Duyuru{" "}
                                      <span className="anc-ik">
                                        İstanbul Kodluyor
                                      </span></div>
                                      <br></br>
                                      <span className="anc-card-check">
                                        Ocak Ayı Tercih Formu Bilgilendirmesi
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                      </span>
                                      <Row className="anc-date-row">
                                        <Col className="anc-date">
                                        <FontAwesomeIcon icon={faCalendar} /> 12.01.2024{" "}
                                        </Col>
                                        <Col className="anc-link ">
                                          {" "}
                                          <Link
                                            to="/announcement"
                                            className="anc-link "
                                          >
                                            Devamını Oku
                                          </Link>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col className="anc-card">
                                  <Row>
                                    <Col>
                                    <div className="anc-title">
                                      Duyuru{" "}
                                      <span className="anc-ik">
                                        İstanbul Kodluyor
                                      </span></div>
                                      <br></br>
                                      <span className="anc-card-check">
                                        Ocak Ayı Tercih Formu Bilgilendirmesi
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                      </span>
                                      <Row className="anc-date-row">
                                        <Col className="anc-date">
                                        <FontAwesomeIcon icon={faCalendar} /> 12.01.2024{" "}
                                        </Col>
                                        <Col className="anc-link ">
                                          {" "}
                                          <Link
                                            to="/announcement"
                                            className="anc-link "
                                          >
                                            Devamını Oku
                                          </Link>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col className="anc-card">
                                  <Row>
                                    <Col>
                                    <div className="anc-title">
                                      Duyuru{" "}
                                      <span className="anc-ik">
                                        İstanbul Kodluyor
                                      </span></div>
                                      <br></br>
                                      <span className="anc-card-check">
                                        Ocak Ayı Tercih Formu Bilgilendirmesi
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                      </span>
                                      <Row className="anc-date-row">
                                        <Col className="anc-date">
                                        <FontAwesomeIcon icon={faCalendar} /> 12.01.2024{" "}
                                        </Col>
                                        <Col className="anc-link ">
                                          {" "}
                                          <Link
                                            to="/announcement"
                                            className="anc-link "
                                          >
                                            Devamını Oku
                                          </Link>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>

                            </Row>
                          </Col>
                        </Row>
                        <Row className="all-edu-btn  ">
                          <div className="p-row-container">
                            <a href="/egitimlerim" className="link-full-row">
                              <button className="load-more-btn">
                                <FontAwesomeIcon
                                  icon={faChevronRight}
                                  className="p-button-icon"
                                />
                                <span>Daha Fazla Göster</span>
                              </button>
                            </a>
                          </div>
                        </Row>
                      </div>
                    )}
                    {activeTab === "survey" && (
                      <div className="tab-survey">
            <Row>
  <Col className="survey-area">
    <img src="https://tobeto.com/_next/static/media/notFound.4015d44b.svg" alt="Not Found" className="survey-img" />
    <div className="survey-text">
      Atanmış herhangi bir anketiniz bulunmamaktadır
    </div>
  </Col>
</Row>

                      </div>
                    )}
                  </div>
                </div>
              </Row>
            </Col>
          </div>

          <Row>
            <div className="exam-card">
              <div className="exam-title">Sınavlarım</div>
              <div className="exam-content">
                <Row>
                  <div className="exam-name">
                    Herkes için Kodlama 2B Değerlendirme Sınavı
                    <span className="exam-statu">&nbsp;✓&nbsp;</span>
                  </div>
                </Row>
                <div className="exam-subtitle">Herkes için Kodlama - 2B</div>
                <div className="exam-time">
                  <FontAwesomeIcon icon={faClock} />
                  <span>45 Dakika</span>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div className="row margin-platform-card-row centered-row">
              <div className="col-md-3 col-12 margin-platform-card margin-platform-card-background-1 ">
                <div className="card-inside-row1">
                  <br></br>
                  Profilini oluştur
                  <br />
                </div>
                <div className="card-inside-row2 ">
                  <a
                    href="/profilim/profilimi-duzenle/kisisel-bilgilerim"
                    className="button-link-unstyled"
                  >
                    <button className="solid-color-button">Başla</button>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-12 margin-platform-card margin-platform-card-background-2">
                <div className="card-inside-row1">
                  Kendini <br></br> değerlendir
                </div>
                <div className="card-inside-row2">
                  <a href="/degerlendirmeler" className="button-link-unstyled">
                    <button className="solid-color-button">Başla</button>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-12 margin-platform-card margin-platform-card-background-3">
                <div className="card-inside-row1">
                  Öğrenmeye <br /> başla
                </div>
                <div className="card-inside-row2">
                  <a
                    href="/platform-egitimler"
                    className="button-link-unstyled"
                  >
                    <button className="solid-color-button">Başla</button>
                  </a>
                </div>
              </div>
            </div>
          </Row>
        </Row>
      </Container>
    </>
  );
}