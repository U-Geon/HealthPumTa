import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import * as L from "./HeaderTextStyle";


const NickName = "OOO";
const Text = "님,";
const Text2 = "오늘도 힘차게 시작해 볼까요?";


function HeaderText () {
    return(
        <L.Wrapper>
            <L.NickNameText>
                {NickName}{Text}
            </L.NickNameText>
            <L.MainText>
                {Text2}
            </L.MainText>
        </L.Wrapper>
    );
    
}


export default HeaderText;