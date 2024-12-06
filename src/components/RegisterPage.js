import React, { useState } from "react";
import axios from "axios";

function SignUpForm() {
    const [formData, setFormData] = useState({
        id: "",
        password: "",
        realName: "", // 수정
        birth: "",
        phone: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        // 요청 보낼거 console.log로 확인
        console.log(formData);

        e.preventDefault();

        axios.post("http://localhost:8080/api/users/register", formData) 
        .then((response) => {
                // HTTP 상태 코드 확인
                if (response.status === 200) {
                    alert("회원가입 성공!");
                    console.log("Response Data:", response.data);
                } else {
                    alert(`예상치 못한 응답 상태 코드: ${response.status}`);
                }
            })
            .catch((error) => {
                // 에러의 HTTP 상태 코드 확인
                if (error.response) {
                    const statusCode = error.response.status;
                    const errorMessage = error.response.data?.message || "unknown error";

                    if (statusCode === 400) {
                        alert(`회원가입 실패 (잘못된 요청): ${errorMessage}`);
                    } else if (statusCode === 500) {
                        alert("서버 오류 발생! 다시 시도해주세요.");
                    } else {
                        alert(`회원가입 실패! 상태 코드: ${statusCode}`);
                    }
                    console.error("Error Response:", error.response);
                } else if (error.request) {
                    alert("서버와의 통신이 실패했습니다. 네트워크를 확인해주세요.");
                    console.error("Error Request:", error.request);
                } else {
                    alert(`알 수 없는 오류: ${error.message}`);
                    console.error("Error:", error);
                }
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>회원가입</h2>
            <label>
                ID:
                <input
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                비밀번호:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                이름:
                <input
                    type="text"
                    name="realName" // 수정
                    value={formData.realName} // 수정
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                생년월일:
                <input
                    type="text"
                    name="birth"
                    value={formData.birth}
                    placeholder="YYYYMMDD"
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                전화번호:
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    placeholder="010XXXXXXXX"
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <button type="submit">회원가입</button>
        </form>
    );
}

export default SignUpForm;
