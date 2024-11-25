import React from 'react';
import { Link } from 'react-router-dom'; // React Router의 Link 컴포넌트 사용
import './Header.css';  // 스타일 파일 연결

function Header() {
    return (
        <header>
            <h1>
                <span className="join-text">JOIN</span>
                <span className="up-text">UP!</span>
            </h1>
            <nav>
                <Link to="/">Home</Link>  {/* Link 컴포넌트를 사용하여 페이지 이동 */}
                <Link to="/competitions">공모전</Link>
                <Link to="/challenges">챌린지</Link>
                <Link to="/board">게시판</Link>
                <Link to="/notices">공지사항</Link>
                <Link to="/mypage">마이페이지</Link>
            </nav>
            <div className="auth-links">
                <Link to="/login">Sign/Login</Link> {/* 로그인 링크 추가 */}
            </div>
        </header>
    );
}

export default Header;
