import { useState } from 'react';
import React, {Component} from 'react';
import * as L from "./GoalEditModalStyle";


function GoalEditModal() {

    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        // isOpen의 상태를 변경하는 메소드를 구현
        // !false -> !true -> !false
        setIsOpen(!isOpen) 
    };
    
    const [isDropdownView, setDropdownView] = useState(false)
    const handleClickContainer = () => {
        setDropdownView(!isDropdownView);
        }
        const handleBlurContainer = () => {
        setTimeout(() => {
            setDropdownView(false)
        }, 200);
    }
    


    

    
    return (
        <>
        <L.ModalContainer>
            <L.ModalBtn onClick={openModalHandler}
            // 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다. 
            >수정
            {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 ModalBtn의 내부 텍스트가 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현 */}
            </L.ModalBtn>
            {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현 */}
            {isOpen ? 
            <L.ModalBackdrop onClick={openModalHandler}>
                <L.ModalView onClick={(e) => e.stopPropagation()}>
                <div className='desc'>수정할 운동을 선택해 주세요.</div>
                <div className="container" >
                    <label onClick={handleClickContainer}>
                    <button style={{
                    textDecoration : 'none',    
                    border : 'none',
                    backgroundColor : '#D9D9D9',
                    display : 'flex',
                    width : '25vh',
                    height : '5vh',
                    fontSize : '2vh',
                    alignItems : 'center',
                    display : 'flex',
                    justifyContent : 'center'
                    }}>운동을 선택해 주세요. {isDropdownView ? '▲' : '▼'}</button>
                    </label>
                    {isDropdownView && 
                        <ol style={{
                            listStyleType : 'none',
                            padding : '0',
                        }}>
                            {
                                Array(3).fill('').map((li, i) => (
                                <li onClick={() => console.log(`Dropdown${i + 1}`)}>Dropdown{i + 1}</li>
                                ))
                            }
                        </ol>    
                    }
                </div>
                <L.ButtonContainer>
                    <L.ExitBtn onClick={openModalHandler}>이전</L.ExitBtn>
                    <L.EditBtn onClick={openModalHandler}>수정</L.EditBtn>
                </L.ButtonContainer>
                </L.ModalView>
            </L.ModalBackdrop>
            : null
            }
        </L.ModalContainer>
        </>
    );
};

export default GoalEditModal;