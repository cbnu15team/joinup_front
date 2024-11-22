import React from 'react';
import './ActivityLog.css';

function ActivityLog() {
    return (
        <div className="activity-log">
            <h3>내 활동</h3>
            <ul>
                <li>공모전 1: 진행 중 🔵</li>
                <li>챌린지 2: 완료 🔴</li>
                <li>게시판 글 3: 작성 완료 ✅</li>
            </ul>
        </div>
    );
}

export default ActivityLog;
