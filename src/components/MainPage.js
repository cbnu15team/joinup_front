import React from 'react';
import Header from './Header.js';
import './MainPage.css'; // 스타일 파일 연결

function MainPage() {
    return (
        <div className="main-page">
            <Header /> {/* 공통 헤더 */}
            <main>
                <section className="banner">
                    <button className="arrow left">〈</button>
                    <div className="banner-text">추천사항</div>
                    <button className="arrow right">〉</button>
                </section>

                <section className="content">
                    <div className="content-box">
                        <h2>Best 공모전</h2>
                        <ul>
                            <li>(5th Sun) 프로젝트</li>
                            <li>공모전 2</li>
                            <li>공모전 3</li>
                        </ul>
                    </div>
                    <div className="content-box">
                        <h2>지금 HOT한 챌린지</h2>
                        <ul>
                            <li>챌린지 1</li>
                            <li>챌린지 2</li>
                            <li>챌린지 3</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default MainPage;
