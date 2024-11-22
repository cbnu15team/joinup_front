import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.js";
import MainPage from './components/MainPage.js';
import LoginPage from './components/LoginPage.js';
import RegisterPage from './components/RegisterPage.js';
import MyPage from './components/MyPage.js';
import ChallengeBoard from './components/ChallengeBoard.js';
import ChallengeForm from './components/ChallengeForm.js';
import ChallengeDetail from "./components/ChallengeDetail.js";
import OpenScreen from './components/OpenScreen.js';
import BoardPage from "./components/BoardPage.js";
import WritePostPage from "./components/WritePostPage.js";
import NoticeBoard from './components/NoticeBoard.js';
import NoticeDetail from './components/NoticeDetail.js';
import CompetitionPage from './components/CompetitionPage.js';
import CompetitionDetail from './components/CompetitionDetail.js';


function App() {
    const [challenges, setChallenges] = useState([
        { title: "하늘보기 챌린지", description: "매일 하늘 보기" },
        { title: "물마시기 챌린지", description: "매일 2리터 물 마시기" },
        { title: "1일 1웃음 챌린지", description: "웃음을 나누는 즐거움" },
    ]);

    const addChallenge = (challenge) => {
        setChallenges((prevChallenges) => [...prevChallenges, challenge]);
    };

    const [posts, setPosts] = useState([
        { id: 1, title: "1일 1사진 인증", author: "RED GOD", date: "2024-11-22", content: "매일 사진을 찍고 기록합니다.", image: "image1.jpg" },
        { id: 2, title: "1일 1챌린지 인증", author: "NEMO", date: "2024-11-21", content: "하루에 한 번씩 웃는 모습을 기록합니다.", image: "image2.jpg" },
    ]);

    const addPost = (post) => {
        const newPost = { id: posts.length + 1, ...post }; // ID 추가
        setPosts((prevPosts) => [...prevPosts, newPost]);
    };

    const [notices] = useState([
        { id: 1, title: '챌린지 관련 공지', date: '2024-11-11', content: '챌린지 관련된 새로운 규정이 추가되었습니다.' },
        { id: 2, title: '서버 점검 안내', date: '2024-11-10', content: '11월 12일 오전 2시부터 서버 점검이 있습니다.' },
        { id: 3, title: '신규 기능 추가', date: '2024-11-09', content: '공지사항 페이지가 추가되었습니다!' },
    ]);

    const [competitions] = useState([
        { id: 1, title: '디자인 공모전', category: '디자인', author: '관리자' },
        { id: 2, title: '기술 혁신 공모전', category: '기술', author: '홍길동' },
        { id: 3, title: '문학 공모전', category: '문학', author: '이순신' },
        {
            id: 1,
            title: 'Samsung 프로그래밍 챌린지 2024',
            description: '삼성에서 주최하는 2024년 프로그래밍 대회',
            author: 'RED GOD',
            date: '2024-11-22',
            comments: [
                { author: 'User1', date: '2024-11-22', text: '너무 기대돼요!' },
                { author: 'User2', date: '2024-11-21', text: '꼭 참가하고 싶어요!' },
            ],
        },
        {
            id: 2,
            title: 'LG 디자인 공모전',
            description: 'LG에서 주최하는 디자인 공모전',
            author: 'NEMO',
            date: '2024-11-21',
            comments: [],
        },
        // 추가 공모전 데이터
    ]);


    return (
        <Router>
            <Routes>
                <Route path="/" element={<OpenScreen />} />
            </Routes>
            <Header />
            <Routes>
                <Route path="/main" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/challenge" element={<ChallengeBoard challenges={challenges} onDelete={(index) => setChallenges((prev) => prev.filter((_, i) => i !== index))}/>}/>
                <Route path="/challenge/new" element={<ChallengeForm addChallenge={addChallenge} />} />
                <Route path="/board" element={<BoardPage posts={posts} />} />
                <Route path="/board/write" element={<WritePostPage addPost={addPost} challenges={challenges} />} />
                <Route path="/board/:id" element={<ChallengeDetail posts={posts} />} />
                <Route path="/notices" element={<NoticeBoard notices={notices} />} />
                <Route path="/notice/:id" element={<NoticeDetail notices={notices} />} />
                <Route path="/competition" element={<CompetitionPage competitions={competitions} />} />
                <Route path="/competition/:id" element={<CompetitionDetail competitions={competitions} />} />

            </Routes>
        </Router>
    );
}

export default App;
