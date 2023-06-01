import styled from "styled-components";

export const Header = styled.header `
    background-color : #F2F2F2;
    padding-block : 25px;
    input {
        width : 50%;
        border : none;
        background-color : #FFF;
        border-top-left-radius : 5px;
        border-bottom-left-radius : 5px;
        padding : 5px 10px;
        outline : none;
    }
    button {
        border : none;
        width : 10%;
        background-color : #48484A;
        padding : 5px;
        color : #FFF;
        border-top-right-radius : 5px;
        border-bottom-right-radius : 5px;
    }
`;

export const Wrapper = styled.div`
    margin-block : 20px;
    display : flex;
    align-items : center;
    justify-content : space-between;
    flex-wrap : wrap;
`;

export const WeatherInfo = styled.div<{width:string,height:string}>`
    width : ${({width})=>width};
    display : flex;
    flex-direction : column;
    gap : 20px;
    img {
        width : 15%;
    }
    .info {
        border-left : 1px solid #FF0000;
        display : flex;
        flex-wrap : wrap;
        gap : 0px 20px;
        padding-left : 20px;
        font-size : 14px;
        font-weight : 400;
        p {
            padding-top : 5px;
            line-height : 5px;
        }
    }
    
    height : ${({height})=>height};
    overflow-y : auto;

`

export const Days = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
    align-items : center;
    padding : 10px;
    border-radius : 5px;
    div  span:nth-child(2) {
        padding-inline : 10px;
        font-size : 15px;
    }
    img {
        width : 15%;
    }
`;