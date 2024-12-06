import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./ChallengeDetail.css";

function ChallengeDetail() {
    const { id } = useParams(); // URL에서 challenge ID를 가져옵니다.
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // 서버에서 해당 챌린지 데이터 가져오기
        axios.get(`/api/challenges/${id}`)  // 실제 API URL로 변경해야 합니다.
            .then((response) => {
                setPost(response.data); // 받아온 데이터로 post 상태 설정
            })
            .catch((error) => {
                console.error("챌린지 데이터를 불러오는 데 실패했습니다:", error);
            });
    }, [id]);

    if (!post) {
        return <p>해당 챌린지를 찾을 수 없습니다.</p>;
    }

    return (
        <div className="challenge-detail">
            <h1>{post.title}</h1>
            <p><strong>작성자:</strong> {post.user ? post.user.username : "익명"}</p> {/* user 객체에서 username을 가져옵니다. */}
            <p><strong>작성일:</strong> {new Date(post.createdAt).toLocaleDateString()}</p> {/* createdAt을 포맷하여 출력 */}
            <p><strong>내용:</strong></p>
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt="게시글 이미지" className="post-image" />} {/* image가 있다면 표시 */}
            <button onClick={() => navigate("/board")}>목록으로 돌아가기</button>
        </div>
    );
}

export default ChallengeDetail;
