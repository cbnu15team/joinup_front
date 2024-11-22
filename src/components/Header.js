import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="logo">Join UP</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/competition">공모전</Link>
                <Link to="/challenge">챌린지</Link>
                <Link to="/board">게시판</Link>
                <Link to="/notice">공지사항</Link>
                <Link to="/mypage">마이페이지</Link>
            </nav>
            <div className="auth-links">
                <Link to="/login">Sign/Login</Link>
            </div>
        </header>
    );
}

export default Header;
