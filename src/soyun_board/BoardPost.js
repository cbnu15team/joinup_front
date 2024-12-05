import React from 'react';
import { useParams } from 'react-router-dom';
import './BoardPost.css';

function BoardPost({ posts }) {
    const { id } = useParams(); // URL에서 id 가져오기
    const post = posts.find(post => post.id === parseInt(id)); // id에 해당하는 게시글 찾기

    if (!post) {
        return <div className="board-post">게시글을 찾을 수 없습니다.</div>;
    }

    return (
        <div className="board-post">
            <div className="detail-container">
                <h1 className="post-title">{post.title}</h1>
                <p className="post-meta">
                    작성자: {post.author || '익명'} | 작성일: {post.date}
                </p>
                <div className="post-content">{post.content}</div>
            </div>
        </div>
    );
}

export default BoardPost;
