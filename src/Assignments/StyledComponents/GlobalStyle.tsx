import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin : 0;
        padding : 0;
        box-sizing : border-box;
    }
    .container {
        width : 1200px;
        margin : 0 auto;
    }
`

export const Center = styled.div<{width:string}>`
    width : ${({ width }) => width };
    margin : auto;
    text-align : center;
    padding : 10px;
    .input-group {
        margin-block : 20px;
    }
`

export const FormInput = styled.input`
    width : 100%;
    padding : 5px;
`

export const Button = styled.button<{bg:string}>`
    width : 100%;
    background-color : ${({bg}) => bg };
    padding : 5px;
    color : #FFF;
    border : none;
    outline : none;
`