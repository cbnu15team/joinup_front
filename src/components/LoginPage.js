import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ id: '', pw: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.id || !formData.pw) {
            setError('ID와 PW를 모두 입력해주세요.');
        } else {
            setError('');
            alert('로그인 성공!');
            navigate('/main'); // 메인 페이지로 이동
        }
    };

    return (
        <div className="login-page">
            <main>
                <h2>로그인</h2>
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
                    <button type="submit">로그인</button>
                </form>
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
