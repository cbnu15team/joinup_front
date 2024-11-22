import React, { useState } from 'react';
import Profile from './Profile.js';
import ActivityLog from './ActivityLog.js';
import Calendar from './Calendar.js';
import SettingsPopup from './SettingsPopup.js';
import './MyPage.css';

function MyPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false); // 팝업 상태
    const [selectedDate, setSelectedDate] = useState(null); // 캘린더에서 선택된 날짜

    const handlePopupOpen = () => {
        setIsPopupOpen(true);
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="mypage-container">
            <main className="mypage-main">
                <Profile onSettingsClick={handlePopupOpen}/>
                <div>
                    <ActivityLog/>
                    <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate}/>
                </div>
            </main>

        </div>
    );
}

export default MyPage;
