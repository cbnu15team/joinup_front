import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WritePostPage.css";

function WritePostPage({ addPost, challenges }) {
    const [title, setTitle] = useState("");
    const [selectedChallenge, setSelectedChallenge] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl); // 이미지 미리보기 URL 저장
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            title,
            challenge: selectedChallenge,
            content,
            image,
            date: new Date().toISOString().split("T")[0],
        };

        addPost(newPost); // 부모 컴포넌트에서 전달받은 게시글 추가 함수 호출
        navigate("/board"); // 게시판 페이지로 이동
    };
    return (
        <div className="write-post-page">
            <h1>인증 글 등록</h1>
            <form onSubmit={handleSubmit}>
                {/* 제목 입력 */}
                <div className="form-group">
                    <label>제목: </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="제목을 입력하세요"
                        required
                    />
                </div>

                {/* 참여중인 챌린지 선택 */}
                <div className="form-group">
                    <label>참여중인 챌린지: </label>
                    <select
                        value={selectedChallenge}
                        onChange={(e) => setSelectedChallenge(e.target.value)}
                        required
                    >
                        <option value="">선택</option>
                        {challenges.map((challenge, index) => (
                            <option key={index} value={challenge.title}>
                                {challenge.title}
                            </option>
                        ))}
                    </select>
                </div>

                {/* 글 작성 */}
                <div className="form-group">
                    <label>내용: </label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="내용을 작성하세요"
                        required
                    ></textarea>
                </div>

                {/* 사진 첨부 */}
                <div className="form-group">
                    <label>사진 첨부: </label>
                    <input type="file" onChange={handleImageChange} />
                    {image && <img src={image} alt="미리보기" className="preview" />}
                </div>

                {/* 등록 버튼 */}
                <div className="form-group">
                    <button type="submit">등록하기</button>
                </div>
            </form>
        </div>
    );
}

export default WritePostPage;
