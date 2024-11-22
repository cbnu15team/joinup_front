import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage.js';
import LoginPage from './components/LoginPage.js';
import RegisterPage from './components/RegisterPage.js';
import MyPage from './components/MyPage.js';
import ChallengeBoard from './components/ChallengeBoard.js';
import ChallengeForm from './components/ChallengeForm.js';
import OpenScreen from './components/OpenScreen.js';

function App() {
    const [challenges, setChallenges] = useState([]); // 챌린지 데이터 저장

    const addChallenge = (challenge) => {
        setChallenges((prevChallenges) => [...prevChallenges, challenge]);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<OpenScreen />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route
                    path="/challenges"
                    element={<ChallengeBoard challenges={challenges} />}
                />
                <Route
                    path="/challenges/new"
                    element={<ChallengeForm addChallenge={addChallenge} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
