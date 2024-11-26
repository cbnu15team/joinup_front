import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CompetitionDetail.css';

function CompetitionDetail({ competitions }) {
    const { id } = useParams(); // URL에서 공모전 ID를 가져옴
    const navigate = useNavigate(); // 페이지 이동을 위한 Hook

    // 현재 ID에 해당하는 공모전 정보를 찾음
    const competition = competitions.find((comp) => comp.id === parseInt(id, 10));

    if (!competition) {
        return <p>해당 공모전을 찾을 수 없습니다.</p>; // 잘못된 ID 처리
    }

    return (
        <div className="competition-detail">
            {/* 제목 섹션 */}
            <h1>{competition.title}</h1>

            {/* 공모전 기본 정보 */}
            <div className="competition-info">
                <div className="info-item">
                    <span>진행 기간:</span>
                    <p>{competition.startDate || '미정'} ~ {competition.endDate || '미정'}</p>
                </div>
                <div className="info-item">
                    <span>모집 현황:</span>
                    <p>{competition.participants || 0}/8명</p>
                </div>
                <div className="info-item">
                    <span>모집 분야:</span>
                    <p>{competition.fields?.join(', ') || '모집 분야 정보 없음'}</p>
                </div>
                <div className="info-item">
                    <span>회의 방식:</span>
                    <p>{competition.meetingType || '정보 없음'}</p>
                </div>
                <div className="info-item">
                    <span>회의 지역:</span>
                    <p>{competition.region || '지역 정보 없음'}</p>
                </div>
                <div className="info-item">
                    <span>공모전 홈페이지:</span>
                    <a href={competition.website || '#'} target="_blank" rel="noopener noreferrer">
                        {competition.website ? '링크 바로가기' : '홈페이지 없음'}
                    </a>
                </div>
                <div className="info-item">
                    <span>기타 문의:</span>
                    <p>{competition.contact || '문의 정보 없음'}</p>
                </div>
            </div>

            {/* 설명 섹션 */}
            <div className="competition-description">
                <h2>설명글</h2>
                <p>{competition.description || '설명글이 없습니다.'}</p>
            </div>

            {/* 버튼 섹션 */}
            <div className="competition-actions">
                <button className="action-button">스크랩하기</button>
                <button className="action-button">지원서 작성하기</button>
            </div>

            {/* 뒤로가기 버튼 */}
            <button onClick={() => navigate('/competition')} className="back-button">
                &lt; 이전
            </button>
        </div>
    );
}

export default CompetitionDetail;
