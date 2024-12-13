import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from './Header.js';  // .js 확장자 명시적으로 추가
import "./ChallengeBoard.css";

function ChallengeBoard({ challenges, onDelete }) {
    const [selectedChallenge, setSelectedChallenge] = useState(null);
    const [showMenu, setShowMenu] = useState(null);

    const handleMenuClick = (index) => {
        if (showMenu === index) {
            setShowMenu(null);
        } else {
            setShowMenu(index);
        }
    };

    const handleDelete = (index) => {
        const confirmed = window.confirm("정말 삭제하시겠습니까?");
        if (confirmed) {
            onDelete(index);
        }
    };

    return (
        <div className="challenge-board">
            <Header /> {/* Header 컴포넌트를 추가하여 동일한 헤더 사용 */}
            <div className="challenge-banner">
                <div className="challenge-banner-text">
                    <h1>챌린지 게시판</h1>
                </div>
            </div>
            <p className="challenge-start-text">참여 버튼을 눌러 챌린지를 시작하세요!</p>
            <div className="challenge-list">
                {challenges.length === 0 ? (
                    <p>현재 진행 중인 챌린지가 없습니다. 새로운 챌린지를 등록하세요!</p>
                ) : (
                    challenges.map((challenge, index) => (
                        <div key={index} className="challenge-card">
                            <div className="challenge-header">
                                <h3>{challenge.title}</h3>
                                <div className="menu-container">
                                    <button
                                        className="details-button"
                                        onClick={() => handleMenuClick(index)}
                                    >
                                        &#8942;
                                    </button>
                                    {showMenu === index && (
                                        <div className="menu-options">
                                            <button onClick={() => handleDelete(index)}>삭제</button>
                                            <button onClick={() => alert("수정 기능 준비 중입니다.")}>
                                                수정
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <p>{challenge.description}</p>
                            <Link to={`/challenges/${index}`}>
                                <button className="participate-button">참여</button>
                            </Link>
                        </div>
                    ))
                )}
            </div>
            <Link to="/challenges/new">
                <button className="add-challenge-button">챌린지 등록하기</button>
            </Link>
        </div>
    );
}

export default ChallengeBoard;


