import React, { useEffect, useState } from "react";
import Calendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";
import axios from "axios";
import { Container } from "react-bootstrap";
import "./Date.css";

const Date: React.FC = () => {
  const [events, setEvents] = useState<{ title: string; start: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:44340/api/AsyncCourses/GetList"
        );
        const data: { items: { name: string; createdDate: string }[] } = response.data;

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

            dayHeaderContent={(args) => (
              <span className="custom-day-header">{args.day}</span>
            )}
          />
        </div>
      </div>
    </Container>
  );
};

export default Date;
