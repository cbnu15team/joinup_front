import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
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
            <div className="inner-container">
                <h1>{post.title}</h1>
                <div className="post_info">
                    <h2>
                        <Link to={`/challenge?selected=${post.selectedChallenge}`}>
                            {post.selectedChallenge}
                        </Link>
                    </h2>
                    <p className="p1"><strong>글쓴이:</strong> {post.author || "익명"}</p>
                    <p className="p2"><strong>날짜:</strong> {post.date}</p>
                </div>
                {post.image && <img src={post.image} alt="게시글 이미지" className="post-image" />}
                <p>{post.content}</p>
                <button onClick={() => navigate("/board")}>목록으로 돌아가기</button>
            </div>
        </div>
    );
}

export default ChallengeDetail;
