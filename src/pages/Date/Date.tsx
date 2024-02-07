import React, { useEffect, useState } from "react";
import Calendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";
import axios from "axios";
import { Container, Modal } from "react-bootstrap";
import "./Date.css";

const EventSummary: React.FC<{ event: { title: string; start: string } }> = ({ event }) => {
  return (
    <div className="event-summary">
      <span className="event-title">{event.title}</span>
      <span className="event-date">{moment(event.start).format("DD MMMM YYYY")}</span>
    </div>
  );
};

const EventList: React.FC<{ events: { title: string; start: string }[] }> = ({ events }) => {
  const [expanded, setExpanded] = useState(false);

  const showMore = () => {
    setExpanded(!expanded);
  };

  const eventItems = expanded ? events.map((event, index) => (
    <li key={index}>
      <EventSummary event={event} />
    </li>
  )) : events.slice(0, 3).map((event, index) => (
    <li key={index}>
      <EventSummary event={event} />
    </li>
  ));

  return (
    <div>
      <ul>
        {eventItems}
      </ul>
      {events.length > 3 && (
        <button className="btn btn-primary" onClick={showMore}>
          {expanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

const Date: React.FC = () => {
  const [events, setEvents] = useState<{ title: string; start: string }[]>([]);
  const [selectedDateEvents, setSelectedDateEvents] = useState<
    { title: string; start: string }[]
  >([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:44340/api/AsyncCourses/GetList"
        );
        const data: {
          items: { name: string; createdDate: string }[];
        } = response.data;

        const formattedEvents = data.items.map((event) => ({
          title: event.name,
          start: moment(event.createdDate).format("YYYY-MM-DD"),
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleShowMore = (date: string) => {
    const selectedEvents = events.filter(
      (event) => moment(event.start).format("YYYY-MM-DD") === date
    );
    setSelectedDateEvents(selectedEvents);
    setShowModal(true);
  };

  return (
    <Container>
      <div className="calendar-container">
        <div className="calendar-header">
          Takvim
        </div>
        <div className="calendar-content">
          <Calendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            events={events}
            dayHeaderFormat={{
              weekday: 'long',
              month: 'numeric',
              day: 'numeric',
              year: 'numeric'
            }}
            dayHeaderContent={(args) => {
              const dayEvents = events.filter(
                (event) => moment(event.start).format("YYYY-MM-DD") === moment(args.date).format("YYYY-MM-DD")
                );
      
                return (
                  <div>
                    <span className="custom-day-header">{moment(args.date).format("dddd")}</span>
                    <EventList events={dayEvents} />
                  </div>
                );
              }}
            />
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Selected Date Events</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {selectedDateEvents.length > 0 && (
                  <>
                    <h4>{moment(selectedDateEvents[0].start).format("DD MMMM YYYY")}</h4>
                    <ul>{selectedDateEvents.map((event, index) => (<li key={index}>{event.title}</li>))}</ul>
                  </>
                )}
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </Container>
  );
};

export default Date;