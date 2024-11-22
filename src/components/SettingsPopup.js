import React from 'react';
import './SettingsPopup.css';

function SettingsPopup({ onClose }) {
    return (
        <div className="settings-popup">
            <div className="popup-content">
                <h3>프로필 수정</h3>
                <form>
                    <label>
                        이름:
                        <input type="text" defaultValue="Red God" />
                    </label>
                    <label>
                        비밀번호:
                        <input type="password" />
                    </label>
                    <label>
                        생년월일:
                        <input type="date" />
                    </label>
                    <button type="submit">저장</button>
                </form>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    );
}

export default SettingsPopup;
