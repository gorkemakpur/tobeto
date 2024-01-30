import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Platform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight,faCalendar} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { Welcome } from "../../components/Platform/Welcome";
import { ApplicationTab } from "../../components/Platform/ApplicationTab";
import { EducationTab } from "../../components/Platform/EducationTab";
import { AnnouncementTab } from "../../components/Platform/AnnouncementTab";
import { SurveyTab } from "../../components/Platform/SurveyTab";
import Exam from "../../components/Platform/Exam";
import BottomThreeComponent from "../../components/Platform/BottomThreeComponent";

export default function Platform() {
  const [activeTab, setActiveTab] = useState("basvurularim");
  const handleTabClick = (tab :any) => {
    setActiveTab(tab);
  };
  return (
    <>
      <Container className="container">
{/*Platform merhaba hoşgeldiniz*/}
        <Welcome/>
{/*Platform merhaba hoşgeldiniz bitiş*/}
        <Row>
          <div className="platform-main ">
            <Col className="platform-main-shadow">
              {/*Platform logo ve altındaki açıklama*/}
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
               {/*Platform logo ve altındaki açıklama bitiş*/}


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
                        <ApplicationTab/>
                      </div>
                    )}
                    
                    {activeTab === "my-edu" && (
                      <div className="tab-my-edu">
                       <EducationTab/>
                      </div>
                    )}

                    {activeTab === "announcement" && (
                      <div className="tab-announcement">
                        <AnnouncementTab/>
                      </div>
                    )}
                    {activeTab === "survey" && (
                      <div className="tab-survey">
                          <SurveyTab/>
                      </div>
                    )}
                  </div>
                </div>
              </Row>
            </Col>
          </div>
          <Exam/> 
          
          <BottomThreeComponent/>
        </Row>
      </Container>
    </>
  );
}