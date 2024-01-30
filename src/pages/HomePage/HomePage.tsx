import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface AnnouncementType {
  id: string;
  type: string;
}

export default function HomePage() {
  const [announcementTypes, setAnnouncementTypes] = useState<AnnouncementType[]>([]);

  useEffect(() => {
    const apiUrl = 'https://localhost:44340/api/AnnouncementTypes/GetList';

    axios.get<any>(apiUrl)
      .then(response => {
        console.log('API response:', response);
        if (Array.isArray(response.data.items)) {
          setAnnouncementTypes(response.data.items);
        } else {
          console.error('API response is not an array:', response.data);
        }
      })
      .catch(error => {
        console.error('API request failed:', error.message);
      });
  }, []);

  console.log('announcementTypes:', announcementTypes);

  return (
    <div>
      <h1>Burası HomePage</h1>
      <ul>
        {announcementTypes.map((announcementType, index) => (
          <li key={index}>{announcementType.type}</li>
        ))}
      </ul>
    </div>
  );
}