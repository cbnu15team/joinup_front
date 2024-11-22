import React, { useState } from 'react';
import Header from './Header.js';
import './RegisterPage.css';
import {useNavigate} from "react-router-dom";

function RegisterPage() {
    const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate
    const [formData, setFormData] = useState({
        name: '',
        birthdate: '',
        phone: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false); // 회원가입 성공 여부

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 간단한 유효성 검사
        if (!formData.name || !formData.birthdate || !formData.phone) {
            setError('모든 필드를 입력해주세요.');
        } else {
            setError('');
            setSuccess(true); // 성공 상태로 변경

            // 2초 후 메인 페이지로 이동
            setTimeout(() => {
                navigate('/'); // 메인 페이지로 이동
            }, 2000);
        }
    };

    return (
        <div className="register-page">
            <Header />
            <main>
                <h2>회원 가입</h2>
                {!success ? ( // 성공 여부에 따라 화면 분기
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="name">이름</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="홍길동"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="birthdate">생년월일</label>
                            <input
                                type="date"
                                id="birthdate"
                                name="birthdate"
                                value={formData.birthdate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">전화번호</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="010-1234-5678"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit">회원 가입</button>
                    </form>
                ) : (
                    <div className="success-message">
                        <h3>회원가입이 완료되었습니다!</h3>
                        <p>잠시 후 메인 페이지로 이동합니다.</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default RegisterPage;