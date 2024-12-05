import React from "react";
import { Link } from "react-router-dom";
import "./BoardPage.css";

function BoardPage({ posts }) {
    return (
        <div className="board-page">
            <div className="inner-container">
                <h1>인증 게시판</h1>
                <div className="board-header">
                    <p>전체글</p>
                    <Link to="/board/write" className="write-button">
                        🖉
                    </Link>
                </div>
                <table className="board-table">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <Link to={`/board/${post.id}`}>{post.title}</Link>
                                </td>
                                <td>{post.author || "익명"}</td>
                                <td>{post.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
                    <button>&lt; 이전</button>
                    <button className="active">1</button>
                    <button>2</button>
                    <button>다음 &gt;</button>
                </div>
            </div>
        </div>
    );
}

export default BoardPage;
