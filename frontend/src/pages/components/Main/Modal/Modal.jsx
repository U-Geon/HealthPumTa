import React from 'react';
import axios from "axios";
import * as Md from "./Modal.js";

export default function ModalBasic({setModalOpen,time}) {
    const closeModal = () => {
        setModalOpen(false);
    };


    const TimeData = () => {
    // 서버로 보낼 데이터
    const timeData = {
        time: time,
    };
     // axios를 사용하여 서버에 POST 요청 전송
    axios
        .post("/api/login", timeData) // /api/login은 백엔드의 로그인 엔드포인트 주소입니다.
        .then((response) => {
        // 서버 응답 처리
        console.log("시간 보내기 성공");
        closeModal();
        })
        .catch((error) => {
        console.error("시간 보내기 실패:", error);
    });
};

    return (
        <Md.ModalDiv>
            <Md.ModalTitle>
                OOO님, 오늘도 수고하셨어요!
            </Md.ModalTitle>

            <Md.ModalButtonDiv>
                <Md.ModalButton onClick={TimeData}>운동 끝내기</Md.ModalButton>
                <Md.ModalButton onClick={closeModal}>계속하기</Md.ModalButton>
            </Md.ModalButtonDiv>
        </Md.ModalDiv>
    );
}
