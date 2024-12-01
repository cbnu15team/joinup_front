import React, { useState } from "react";
import "./MyPage.css";

function MyPage() {
    const [competitions, setCompetitions] = useState([
        { id: 1, title: "공모전 1", status: "진행 중" },
        { id: 2, title: "챌린지 2", status: "완료" },
        { id: 3, title: "게시판 글 3", status: "작성 완료" },
    ]);

    return (
        <div className="mypage-container">
            <header className="profile-icon">
            </header>
            <div className="profile-info">
                <h1>ID</h1>
                <p>컴퓨터공학</p>
            </div>
            <main className="mypage-main">
                <div className="profile-section">
                    <div className="profile-details">
                        <h2>내 활동</h2>
                        <ul className="activity-list">
                            {competitions.map((item) => (
                                <li key={item.id} className="activity-item">
                                    <span>{item.title}</span>
                                    <span
                                        className={`status-dot ${
                                            item.status === "진행 중"
                                                ? "in-progress"
                                                : item.status === "완료"
                                                ? "completed"
                                                : "written"
                                        }`}
                                    >
                                        {item.status === "진행 중" && "🔵"}
                                        {item.status === "완료" && "🔴"}
                                        {item.status === "작성 완료" && "✅"}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* <div className="content-section">
                    <h2>나의 포트폴리오</h2>
                    <div className="portfolio-placeholder">
                        <p>아직 포트폴리오가 없어요!</p>
                        <button className="portfolio-button">포트폴리오 만들기</button>
                    </div>
                </div> */}
            </main>
        </div>
    );
}

export default MyPage;
