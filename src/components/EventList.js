import React, { useState, useEffect } from 'react';

function EventList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // 예시 데이터 로드
        const mockEvents = [
            { id: 1, title: "Event 1", description: "This is the first event" },
            { id: 2, title: "Event 2", description: "This is the second event" },
        ];
        setEvents(mockEvents);
    }, []);

    return (
        <ul>
            {events.map(event => (
                <li key={event.id}>
                    <h2>{event.title}</h2>
                    <p>{event.description}</p>
                </li>
            ))}
        </ul>
    );
}

export default EventList;
