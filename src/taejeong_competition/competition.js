import React, { useState, useEffect } from "react";
import "./CompetitionPage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CompetitionPage() {
    const [competitions, setCompetitions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const competitionsPerPage = 10;
    const [selectedCategory, setSelectedCategory] = useState("전체");
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (id) => {
        setActiveDropdown((prev) => (prev === id ? null : id));
    };

    useEffect(() => {
        // 백엔드에서 공모전 데이터를 가져오기
        axios.get("/api/competitions")
            .then((response) => {
                setCompetitions(response.data); // API에서 데이터를 가져와 상태에 설정
            })
            .catch((err) => {
                console.error("Error fetching competitions:", err);
            });
    }, []);

    const filteredCompetitions = competitions.filter(
        (comp) => selectedCategory === "전체" || comp.category === selectedCategory
    );

    const indexOfLastCompetition = currentPage * competitionsPerPage;
    const indexOfFirstCompetition = indexOfLastCompetition - competitionsPerPage;
    const currentCompetitions = filteredCompetitions.slice(
        indexOfFirstCompetition,
        indexOfLastCompetition
    );

    const totalPages = Math.ceil(filteredCompetitions.length / competitionsPerPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleDelete = (id) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            axios.delete(`/api/competitions/${id}`)
                .then(() => {
                    setCompetitions(competitions.filter((comp) => comp.boardId !== id));
                })
                .catch((err) => {
                    console.error("Error deleting competition:", err);
                });
        }
    };

    return (
        <div className="competition-page">
            <div className="competition-header">
                <h1>공모전 리스트</h1>
                <Link to="/competition/write" className="write-button">
                    공모전 등록
                </Link>
            </div>
            <div className="competition-filters">
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="전체">전체</option>
                    <option value="디자인">디자인</option>
                    <option value="기술">기술</option>
                    <option value="문학">문학</option>
                </select>
            </div>
            <div className="competition-cards">
                {currentCompetitions.map((competition) => (
                    <div key={competition.boardId} className="competition-card">
                        <div className="card-header">
                            <h2>{competition.title}</h2>
                            <button className="dropdown-button" onClick={() => toggleDropdown(competition.boardId)}>
                                &#8942; {/* 세로 점 3개로 표시 */}
                            </button>
                        </div>
                        <div className="card-body">
                            <p><strong>카테고리:</strong> {competition.category || "카테고리 없음"}</p>
                            <p><strong>작성자:</strong> {competition.nickname || "익명"}</p>
                            <p><strong>등록일:</strong> {new Date(competition.createdAt).toLocaleDateString()}</p>
                            <p><strong>조회수:</strong> {competition.views}</p>
                            <Link to={`/competition/${competition.boardId}`} className="details-link">
                                자세히 보기
                            </Link>
                            <div className="card-actions">
                                {activeDropdown === competition.boardId && (
                                    <div className="dropdown-menu">
                                        <Link to={`/competition/edit/${competition.boardId}`} className="edit-button">
                                            수정
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(competition.boardId)}
                                            className="delete-button"
                                        >
                                            삭제
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => paginate(page)}
                        className={page === currentPage ? "active" : ""}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CompetitionPage;
