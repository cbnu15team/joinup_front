import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header.js';  // Header import 추가
import "./ChallengeForm.css";

function ChallengeForm({ addChallenge }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addChallenge({ title, description });
        navigate("/challenges");  // 챌린지 목록으로 이동
    };

    return (
        <div className="challenge-form-wrapper">
            <Header /> {/* Header 컴포넌트 추가 */}
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
                        <label>설명:</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
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
