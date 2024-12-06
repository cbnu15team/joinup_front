import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ id: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 입력값 검증
        if (!formData.id && !formData.password) {
            setError('아이디와 비밀번호를 모두 입력해주세요.');
            return;
        } else if (!formData.id) {
            setError('아이디를 입력하세요.');
            return;
        } else if (!formData.password) {
            setError('비밀번호를 입력하세요.');
            return;
        }

        try {
            // 서버로 로그인 요청
            const response = await axios.post('http://localhost:8080/api/users/login', formData);

            if (response.status === 200) {
                alert('로그인 성공!');
                navigate('/main'); // 메인 페이지로 이동
            }
        } catch (error) {
            if (error.response) {
                // 서버에서 반환된 에러 메시지 처리
                setError(error.response.data || '로그인 실패. 다시 시도해주세요.');
            } else {
                setError('서버와의 통신에 실패했습니다.');
            }
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
                        <label htmlFor="password">PW</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="비밀번호를 입력하세요"
                            value={formData.password}
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
