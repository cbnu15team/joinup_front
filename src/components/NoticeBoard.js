import React from 'react';
import './NoticeBoard.css';
import { Link } from 'react-router-dom';

function NoticeBoard({ notices }) {
    return (
        <div className="notice-board">
            <h1>공지사항</h1>
            <table className="notice-table">
                <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>날짜</th>
                </tr>
                </thead>
                <tbody>
                {notices.map((notice, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            <Link to={`/notice/${notice.id}`}>
                                {notice.title}
                            </Link>
                        </td>
                        <td>{notice.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="pagination">
                <button>&lt; 이전</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>다음 &gt;</button>
            </div>
        </div>
    );
}

export default NoticeBoard;
