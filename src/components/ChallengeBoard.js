import React from "react";
import { Link } from "react-router-dom";

function ChallengeBoard({ challenges }) {
    return (
        <div>
            <h2>챌린지 게시판</h2>
            <Link to="/challenges/new">
                <button>챌린지 등록하기</button>
            </Link>
            {challenges.length === 0 ? (
                <p>현재 진행 중인 챌린지가 없습니다.</p>
            ) : (
                <div className="challenge-list">
                    {challenges.map((challenge, index) => (
                        <div key={index} className="challenge-card">
                            <h3>{challenge.title}</h3>
                            <p>{challenge.description}</p>
                            <p>
                                기간: {challenge.startDate} ~ {challenge.endDate}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ChallengeBoard;
