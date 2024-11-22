import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChallengeForm({ addChallenge }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newChallenge = {
            title,
            description,
            startDate,
            endDate,
        };
        addChallenge(newChallenge); // 부모(App) 컴포넌트로 데이터 전달
        navigate("/challenges"); // 게시판으로 이동
    };

    return (
        <div>
            <h2>챌린지 등록</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>챌린지 제목:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>챌린지 설명:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>시작 날짜:</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>종료 날짜:</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">등록하기</button>
            </form>
        </div>
    );
}

export default ChallengeForm;
