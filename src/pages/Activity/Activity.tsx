import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons"; // tıklanmamış için
import { faBookmark as fasBookmark } from "@fortawesome/free-solid-svg-icons"; // tıklanmış için
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"; //tamamladın ikonu
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import {
  faClock,
  faCalendarAlt,
  faList,
  faBook,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons"; //Hakkında kısmı ikonları

import "./Activity.css";
import Accordion from "./ListAccordion/ListAccordion";
import OffCanvas from "./OffCanvas/OffCanvas";
import { Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { VideoDetails } from "../../components/Activity/VideoDetails";

export default function Activity() {
  const [liked, setLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("icerik");

  const { fetchData, setFetchData }: any = useState("");
  let { courseID } = useParams();
  console.log(courseID);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Apı request to fetch related content
        const response = await axios.get(
          `https://localhost:44340/api/AsyncCourseContents/GetByAsyncCourseId?id=f539c27e-a7a2-4c62-7526-08dc27f49c0a`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    };
    fetchData().then((data) => {
      // Log the fetched data
      console.log(data);
    });
  }, [courseID]);

  // Like butonunun toggle fonksiyonu
  const toggleLike = () => {
    setLiked(!liked);
  };

  // Bookmark butonunun toggle fonksiyonu
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  // İlerleme çubuğunun simülasyonu için useEffect hook'u
  /* useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress(prevProgress => prevProgress + 10);
      }, 1000);

      // Cleanup fonksiyonu
      return () => clearInterval(interval);
    }
  }, [progress]);*/

  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const [showButton, setShowButton] = useState(true);

  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
    setShowButton(!isOffCanvasOpen); // OffCanvas açıldığında butonu gizle
  };

  return (
    <div className="content-activity">
      <div className="row header-row ">
        <div className="col-md-1 col-sm-0 ">
          <img
            src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"
            className="edu-img"
            alt=""
          ></img>
        </div>
        <div className="col-lg-11 col-md-10 col-sm-9 col-12 ">
          <div className="edu-header">
            <div className="row">
              <div className="col-sm-12 col-xs-12 col-md-8 edu-title ">
                <div className="edu-title-row">
                  .NET & React Fullstack | Öğrenme Yolculuğu <br></br>
                  id
                  {/*<span className="tag-blue">GELİŞİM YOLCULUĞU</span>*/}
                </div>
              </div>
              <div className="col-sm-12 col-xs-12 col-md-4 title-icon ">
                <span className="score-badge">77.6 PUAN</span>
                <button
                  className={`like-button ${liked ? "liked" : ""}`}
                  onClick={toggleLike}
                >
                  <span className="heart-icon">{liked ? "❤️" : "🤍"}</span>
                  <span className="like-count">{liked ? 51 : 50}</span>
                </button>
                <button
                  className={`bookmark-icon ${isBookmarked ? "active" : ""}`}
                  onClick={toggleBookmark}
                  aria-label={
                    isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"
                  }
                >
                  <FontAwesomeIcon
                    icon={isBookmarked ? fasBookmark : farBookmark}
                  />
                </button>
              </div>
            </div>
            <div className="row">
              <div className="edu-progress-text">İyi gidiyorsun</div>
            </div>
            <div className="progress-row">
              <div className="row">
                <div className="col-11">
                  <div className="progress-bar-container">
                    <div className="progress-bar">
                      {progress === 10 && (
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="progress-bar-icon"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-1">
                  <span className="ptg">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row content-row">
        <div className="row">
          <div>
            <ul className="tab-list">
              <li
                className={`tab-list-item ${
                  activeTab === "icerik" ? "active" : ""
                }`}
                onClick={() => handleTabClick("icerik")}
              >
                İçerik
              </li>
              <li
                className={`tab-list-item ${
                  activeTab === "hakkinda" ? "active" : ""
                }`}
                onClick={() => handleTabClick("hakkinda")}
              >
                Hakkında
              </li>
              {/*} <li
                className={`tab-list-item ${activeTab === "soru" ? "active" : ""
                  }`}
                onClick={() => handleTabClick("soru")}
              >
                Soru Sor & Paylaş
                </li>*/}
            </ul>
            <div className="tab-content">
              {activeTab === "icerik" && (
                <div>
                  <div className="icerik-detail">
                    <Row className="justify-content-end flex-row-reverse">



                      <VideoDetails /> 
                      {/* Buraya aşağıda listeleyeceğimiz kurslardan hangisine tıklarsak onun id sini göndereceğiz 
                          VideoDetails içinde o id yi yakalayıp getbyid olan apiye istek atacağız
                          gelen verideki bilgileri o kısıma yazdıracağız
                      */}
                      <Col className="custom-left">
                        <div className="scrollable-div">
                          <Accordion title="ASPNET Core MVC Basic">
                            {/*bu kısım için normalde ek tablo açılması lazım ilerde bakacağız */}
                            <Link to={"#"}>
                              <div className="accordion-subtitle">
                                name
                                <p className="subtitle-detail">
                                  title
                                </p>{" "}
                                {/*bu kısımda title alanını kullanmıyoruz şimdilik süreyi orada tutalım  */}
                              </div>
                            </Link>
                          </Accordion>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}
              {activeTab === "hakkinda" && (
                <div className="tab-hakkında">
                  <div className="info-item row">
                    <div className="col-6">
                      <table>
                        <tr className="table-row">
                          <td>
                            <FontAwesomeIcon
                              icon={faCalendarAlt}
                              className="icon"
                            />
                          </td>
                          <td className="column-width">Başlangıç</td>
                          <td className="table-desc">01.01.2024</td>
                        </tr>

                        <tr className="table-row">
                          <td>
                            <FontAwesomeIcon
                              icon={faCalendarAlt}
                              className="icon"
                            />
                          </td>
                          <td className="column-width">Bitiş</td>
                          <td className="table-desc">01.02.2024</td>
                        </tr>

                        <tr className="table-row">
                          <td>
                            <FontAwesomeIcon icon={faClock} className="icon" />
                          </td>
                          <td>Geçirdiğin Süre</td>
                          <td className="table-desc">28 sa 28 dk</td>
                        </tr>
                        <tr>
                          <td>
                            <FontAwesomeIcon icon={faClock} className="icon" />
                          </td>
                          <td>Tahmini Süre</td>
                          <td className="table-desc">65 g 36 sa 30 dk</td>
                        </tr>

                        <tr>
                          <td>
                            <FontAwesomeIcon icon={faList} className="icon" />
                          </td>
                          <td>Kategori</td>
                          <td className="table-desc">Genel</td>
                        </tr>

                        <tr>
                          <td>
                            <FontAwesomeIcon icon={faBook} className="icon" />
                          </td>
                          <td>İçerik</td>
                          <td className="table-desc">290</td>
                        </tr>

                        <tr>
                          <td>
                            <FontAwesomeIcon icon={faTasks} className="icon" />
                          </td>
                          <td>Görev</td>
                          <td className="table-desc">65</td>
                        </tr>

                        <tr>
                          <td>
                            <FontAwesomeIcon icon={faVideo} className="icon" />
                          </td>
                          <td>Video</td>
                          <td className="table-desc">225</td>
                        </tr>

                        <tr>
                          <td>
                            <FontAwesomeIcon
                              icon={faIndustry}
                              className="icon"
                            />
                          </td>
                          <td>Üretici Firma</td>
                          <td className="table-desc">Enocta</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              )}
              {} {activeTab === "soru" && <div>Soru Sor & Paylaş Bölümü</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
