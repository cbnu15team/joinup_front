import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CompetitionDetail.css';

function CompetitionDetail({ competitions }) {
    const { id } = useParams(); // URL에서 ID를 가져옴
    const navigate = useNavigate(); // 페이지 이동을 위한 Hook

    const competition = competitions.find((comp) => comp.id === parseInt(id));

    if (!competition) {
        return <p>해당 공모전을 찾을 수 없습니다.</p>;
    }

    return (
        <div className="competition-detail">
            <button onClick={() => navigate('/competition')} className="back-button">
                &lt; 이전
            </button>
            <h1>{competition.title}</h1>
            <div className="competition-info">
                <p><strong>작성자:</strong> {competition.author}</p>
                <p><strong>등록일:</strong> {competition.date}</p>
                <p><strong>내용:</strong></p>
                <p>{competition.description}</p>
            </div>
            <div className="competition-comments">
                <h2>댓글</h2>
                <ul>
                    {competition.comments.map((comment, index) => (
                        <li key={index} className="comment-item">
                            <strong>{comment.author}</strong> ({comment.date}): {comment.text}
                        </li>
                    ))}
                </ul>
                <textarea placeholder="댓글을 입력하세요..." className="comment-input"></textarea>
                <button className="submit-comment-button">댓글 등록</button>
            </div>
        </div>
    );
}

export default CompetitionDetail;
