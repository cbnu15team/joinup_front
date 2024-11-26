// UserListPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserListPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://192.168.56.1:8080/api/users") // 백엔드 API 호출
            .then((response) => {
                setUsers(response.data); // 서버에서 받은 사용자 데이터를 상태로 저장
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, []);

    return (
        <div>
            <h1>사용자 목록</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserListPage;
