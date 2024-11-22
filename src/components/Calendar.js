import React, { useState } from 'react';
import './Calendar.css';

function Calendar({ selectedDate, onSelectDate }) {
    const [dates] = useState(Array.from({ length: 30 }, (_, i) => i + 1)); // 1~30 날짜

    return (
        <div className="calendar">
            <h3>내 일정</h3>
            <div className="calendar-grid">
                {dates.map((date) => (
                    <div
                        key={date}
                        className={`calendar-cell ${
                            selectedDate === date ? 'selected' : ''
                        }`}
                        onClick={() => onSelectDate(date)}
                    >
                        {date}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calendar;
