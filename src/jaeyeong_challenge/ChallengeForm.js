import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header.js';  // Header import 추가
import axios from "axios";  // axios를 사용하여 API 요청
import "./ChallengeForm.css";

function ChallengeForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); // content 대신 description을 content로 수정
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // 챌린지 데이터 준비
        const newChallenge = {
            title,
            content, // content 추가
            user_id: 1, // 예시: 실제 유저 ID는 로그인 정보에서 가져와야 할 수 있습니다
        };

        // 백엔드 API 호출
        axios.post('/api/challenges', newChallenge) // 실제 API URL을 사용해야 합니다.
            .then((response) => {
                navigate("/challenges");  // 챌린지 목록으로 이동
            })
            .catch((error) => {
                console.error("챌린지 등록 중 오류 발생:", error);
            });
    };

    return (
        <div className="challenge-form-wrapper">
            <Header />
            <div className="challenge-form">
                <h1>새로운 챌린지 등록</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>제목:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>내용:</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">등록</button>
                </form>
            </div>
        </div>
    );
}

export default ChallengeForm;

