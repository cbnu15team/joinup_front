import React, { useState } from 'react';
import './CompetitionPage.css';
import {Link} from "react-router-dom";

function CompetitionPage({ competitions }) {
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
    const competitionsPerPage = 10; // 페이지당 공모전 개수
    const [selectedCategory, setSelectedCategory] = useState('전체'); // 선택된 카테고리

    // 카테고리 필터링
    const filteredCompetitions = competitions.filter(
        (comp) => selectedCategory === '전체' || comp.category === selectedCategory
    );

    // 페이지네이션 계산
    const indexOfLastCompetition = currentPage * competitionsPerPage;
    const indexOfFirstCompetition = indexOfLastCompetition - competitionsPerPage;
    const currentCompetitions = filteredCompetitions.slice(
        indexOfFirstCompetition,
        indexOfLastCompetition
    );

    const totalPages = Math.ceil(filteredCompetitions.length / competitionsPerPage);

    // 페이지 이동 함수
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="competition-page">
            <div className="category-sidebar">
                <h2>분류</h2>
                <button onClick={() => setSelectedCategory('전체')}>전체</button>
                <button onClick={() => setSelectedCategory('디자인')}>디자인</button>
                <button onClick={() => setSelectedCategory('기술')}>기술</button>
                <button onClick={() => setSelectedCategory('문학')}>문학</button>
                <button onClick={() => setSelectedCategory('기타')}>기타</button>
            </div>
            <div className="competition-content">
                <h1>공모전</h1>
                <table className="competition-table">
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                    </thead>
                    <tbody>
                    {competitions.map((competition, index) => (
                        <tr key={competition.id}>
                            <td>{index + 1}</td>
                            <td>
                                {/* 제목 클릭 시 상세 페이지로 이동 */}
                                <Link to={`/competition/${competition.id}`}>
                                    {competition.title}
                                </Link>
                            </td>
                            <td>{competition.author}</td>
                            <td>{competition.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="pagination">
                    {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => paginate(page)}
                            className={page === currentPage ? 'active' : ''}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CompetitionPage;
