import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CompetitionDetail.css';

function CompetitionDetail({ competitions }) {
    const { id } = useParams(); // URL에서 게시글 ID를 가져옴
    const navigate = useNavigate(); // 페이지 이동을 위한 Hook

    // 현재 ID에 해당하는 게시글 정보를 찾음
    const competition = competitions.find((comp) => comp.pageId === parseInt(id, 10));

    if (!competition) {
        return <p>해당 게시글을 찾을 수 없습니다.</p>; // 잘못된 ID 처리
    }

    const handleDelete = () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            // 삭제 로직 추가 필요
            navigate('/competition'); // 삭제 후 목록으로 이동
        }
    };

    return (
        <div className="competition-detail">
            <h1>{competition.title}</h1>
            <div className="competition-info">
                {/* 공모전 정보 */}
                <div className="info-item">
                    <span>작성자 닉네임:</span>
                    <p>{competition.nickname || '익명'}</p>
                </div>
                <div className="info-item">
                    <span>게시글 ID:</span>
                    <p>{competition.pageId}</p>
                </div>
                <div className="info-item">
                    <span>작성일:</span>
                    <p>{new Date(competition.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="info-item">
                    <span>조회수:</span>
                    <p>{competition.views}</p>
                </div>
                <div className="info-item">
                    <span>내용:</span>
                    <p>{competition.content || '내용이 없습니다.'}</p>
                </div>
            </div>
            <div className="button-group">
                <button onClick={() => navigate('/competition')} className="back-button">
                    &lt; 이전
                </button>
                <button onClick={handleDelete} className="delete-button">
                    삭제
                </button>
            </div>
        </div>
    );
}

export default CompetitionDetail;
