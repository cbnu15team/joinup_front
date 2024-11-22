import React from 'react';
import './Profile.css';

function Profile({ onSettingsClick }) {
    return (
        <div className="profile-container">
            <div className="profile-avatar">
                <img src="/default-avatar.png" alt="Profile" />
            </div>
            <div className="profile-info">
                <h2>Red God 님</h2>
                <button onClick={onSettingsClick}>프로필 수정</button>
            </div>
        </div>
    );
}

export default Profile;
