import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import "./ChallengeDetail.css";

function ChallengeDetail({ posts }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
        return <p>해당 챌린지를 찾을 수 없습니다.</p>;
    }

    return (
        <div className="challenge-detail">
            <h1>{post.title}</h1>
            <p><strong>작성자:</strong> {post.author || "익명"}</p>
            <p><strong>작성일:</strong> {post.date}</p>
            <p><strong>내용:</strong></p>
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt="게시글 이미지" className="post-image"/>}
            <button onClick={() => navigate("/board")}>목록으로 돌아가기</button>
        </div>
    );
}

export default ChallengeDetail;
