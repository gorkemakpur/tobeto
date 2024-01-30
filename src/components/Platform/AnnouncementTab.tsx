import { faCalendar, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Props = {}

export const AnnouncementTab = (props: Props) => {
  return (
    <>
    <Row>
                          <Col>
                            <Row className="anc-row">
                           
                                <Col className="anc-card">
                                  <Row>
                                    <Col>
                                    <div className="anc-title">
                                      Duyuru
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
    </>
  )
}