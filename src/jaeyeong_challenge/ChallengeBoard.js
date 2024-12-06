import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from './Header.js'; 
import axios from 'axios'; // axios를 사용한 API 요청
import "./ChallengeBoard.css";

function ChallengeBoard() {
    const [challenges, setChallenges] = useState([]);

    // 데이터 로딩
    useEffect(() => {
        axios.get('/api/challenges') // 실제 백엔드 API URL로 변경
            .then((response) => {
                setChallenges(response.data); // 받아온 데이터를 challenges에 저장
            })
            .catch((error) => {
                console.error("Error fetching challenges:", error);
            });
    }, []);

    const handleDelete = (index) => {
        const confirmed = window.confirm("정말 삭제하시겠습니까?");
        if (confirmed) {
            // 삭제 처리 로직
        }
    };

    return (
        <div className="challenge-board">
            <Header />
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
                            <h3>{challenge.title}</h3>
                            <p>{challenge.content}</p>
                            <p>작성일: {new Date(challenge.createdAt).toLocaleDateString()}</p>
                            <p>조회수: {challenge.views}</p>
                            <p>작성자: {challenge.user ? challenge.user.username : "알 수 없음"}</p>
                            <Link to={`/challenges/${index}`}>
                                <button>참여</button>
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

