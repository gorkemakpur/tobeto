import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {};

export const EducationTab = (props: Props) => {
  return (
    <>
      <Row>
        <Col>
          <Row className="edus-row">
            <Link to="/activity" className="edu-card-link  ">
              <div className="edu-card">
                <div className="edu-card-image">
                  <img
                    src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"
                    alt=""
                  ></img>
                </div>
                <div className="edu-card-body">
                  <h5 className="edu-card-title">
                    .NET & React Fullstack | Öğrenme Yolculuğu
                  </h5>
                  <p className="edu-card-date">21 Eylül 2023 15:20</p>
                  <button className="edu-card-button">Eğitime Git</button>
                </div>
              </div>
            </Link>
            <Link to="/activity" className="edu-card-link  ">
              <div className="edu-card">
                <div className="edu-card-image">
                  <img
                    src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"
                    alt=""
                  ></img>
                </div>
                <div className="edu-card-body">
                  <h5 className="edu-card-title">
                    .NET & React Fullstack | Öğrenme Yolculuğu
                  </h5>
                  <p className="edu-card-date">21 Eylül 2023 15:20</p>
                  <button className="edu-card-button">Eğitime Git</button>
                </div>
              </div>
            </Link>{" "}
            <Link to="/activity" className="edu-card-link  ">
              <div className="edu-card">
                <div className="edu-card-image">
                  <img
                    src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"
                    alt=""
                  ></img>
                </div>
                <div className="edu-card-body">
                  <h5 className="edu-card-title">
                    .NET & React Fullstack | Öğrenme Yolculuğu
                  </h5>
                  <p className="edu-card-date">21 Eylül 2023 15:20</p>
                  <button className="edu-card-button">Eğitime Git</button>
                </div>
              </div>
            </Link>{" "}
            <Link to="/activity" className="edu-card-link  ">
              <div className="edu-card">
                <div className="edu-card-image">
                  <img
                    src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"
                    alt=""
                  ></img>
                </div>
                <div className="edu-card-body">
                  <h5 className="edu-card-title">
                    .NET & React Fullstack | Öğrenme Yolculuğu
                  </h5>
                  <p className="edu-card-date">21 Eylül 2023 15:20</p>
                  <button className="edu-card-button">Eğitime Git</button>
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
    </>
  );
};
