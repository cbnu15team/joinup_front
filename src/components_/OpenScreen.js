import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OpenScreen.css';

function OpenScreen() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/main'); // 메인 페이지로 이동
    };

    return (
            <div className="open-screen">
                <h1>
                    <span>JOIN</span>
                    <span>UP!</span>
                </h1>
                <p>공모전과 챌린지를 함께 도전해보세요!</p>
                <button onClick={handleButtonClick}>Let's join us... </button>
            </div>
        );
    }

export default OpenScreen;
