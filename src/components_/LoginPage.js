import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.js';
import './LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ id: '', pw: '' });
    const [error, setError] = useState('');

    // 입력 값 변경 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // 폼 제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();

        // 입력 값 유효성 검사
        if (!formData.id || !formData.pw) {
            setError('ID와 PW를 모두 입력해주세요.');
            return;
        }

        if (formData.id !== 'testUser' || formData.pw !== '1234') {
            setError('잘못된 ID 또는 PW입니다.');
            return;
        }

        setError('');
        alert('로그인 성공!');
        navigate('/'); // 메인 페이지로 이동
    };

    return (
        <div className="login-page">
            <Header />
            <main className="login-main">
                <h2>로그인</h2>
                {/* 입력 박스와 버튼 그룹화 */}
                <div className="input-container">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="id">ID</label>
                            <input
                                type="text"
                                id="id"
                                name="id"
                                placeholder="아이디를 입력하세요"
                                value={formData.id}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="pw">PW</label>
                            <input
                                type="password"
                                id="pw"
                                name="pw"
                                placeholder="비밀번호를 입력하세요"
                                value={formData.pw}
                                onChange={handleChange}
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="login-button">로그인</button>
                    </form>
                </div>
                {/* 회원가입하기 버튼 */}
                <button
                    className="register-link"
                    onClick={() => navigate('/register')}
                >
                    회원가입하기
                </button>
            </main>
        </div>
    );
}

export default LoginPage;
