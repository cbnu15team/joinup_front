import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './NoticeDetail.css';

function NoticeDetail({ notices }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const notice = notices.find((n) => n.id === parseInt(id));

    if (!notice) {
        return <p>해당 공지사항을 찾을 수 없습니다.</p>;
    }

    return (
        <div className="notice-detail">
            <h1>{notice.title}</h1>
            <p><strong>작성일:</strong> {notice.date}</p>
            <p><strong>내용:</strong></p>
            <p>{notice.content}</p>
            <button onClick={() => navigate('/notices')}>목록으로 돌아가기</button>
        </div>
    );
}

export default NoticeDetail;

