import styled from 'styled-components';




export const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display : flex;
  justify-content : center;
  align-items : center;
  height : 100%;
`;

export const ModalBackdrop = styled.div`
  z-index: 1;
  position: fixed;
  display : flex;
  justify-content : center;
  align-items : center;
  background-color: rgba(0,0,0,0.4);
  border-radius: 10px;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
`;

export const ModalBtn = styled.div`
  background-color: #D9D9D9;
  width : 50px;
  height : 50px;
  border-radius: 50px;
  display : flex;
  align-items : center;
  justify-content : center;
`;

export const ExitBtn = styled(ModalBtn) `
    background-color : #D9D9D9;
    border-radius: 50px;
    margin: 10px;
    width: 50px;
    height: 50px;
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const EditBtn = styled(ModalBtn) `
    background-color : #D9D9D9;
    border-radius: 50px;
    margin: 10px;
    width: 50px;
    height: 50px;
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
  role: 'dialog',
}))`
  // Modal창 CSS를 구현합니다.
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  width: 80%;
  background-color: #ffffff;
    >div.desc {
      margin: 3vh 1vh 3vh 1vh;
      font-size: 20px;
      color: var(--coz-purple-600);
    }
`;

export const ButtonContainer = styled.div`
    display : flex;
    justify-content : center;
`;