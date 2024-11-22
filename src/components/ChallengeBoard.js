import React, { useState } from 'react';
import { Link } from "react-router-dom";
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
            <h1>챌린지 게시판</h1>
            <p>참여 버튼을 눌러 챌린지를 시작하세요!</p>
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
                                        className="menu-button"
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
                            <Link to={`/challenge/${index}`}>
                                <button>참여</button>
                            </Link>
                        </div>
                    ))
                )}
            </div>
            <Link to="/challenge/new">
                <button className="add-challenge-button">챌린지 등록하기</button>
            </Link>
        </div>
    );
}

export default ChallengeBoard;
