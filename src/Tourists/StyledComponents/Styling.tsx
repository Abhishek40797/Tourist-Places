import styled from "styled-components";

const colors = {
    primaryColor : "#00BFFF",
    secondaryColor : "#FFF"
}

export const Wrapper = styled.div`
    width : 1200px;
    margin : auto;
    @media (max-width : 1250px) { 
        width : 1100px;
        margin : auto;
    }
    @media (max-width : 1200px) {
        width : 1000px;
        margin : auto;
    }
    @media (max-width : 1050px) {
        width : 900px;
        margin : auto;
    }
    @media (max-width : 950px) {
        width : 90%;
        margin : auto;
    }
    @media (max-width : 850px) {
        width : 90%;
        margin : auto;
    }
    @media (max-width : 768px) {
        width : 90%;
        margin : auto;
    }
    @media (max-width : 550px) {
        width : 90%;
        margin : auto;
    }
`

export const Headers = styled.header`
    width : 100%;
    position: fixed;
    top: 0;
    z-index: 99;
    left: 0%;
    padding : 10px 0;
    background-color : #eeeeee;
    .menu-btns {
        gap : 20px;
    }
    #menu-icon {
        font-size : 20px;
        cursor : pointer;
        display : none;
    }
    @media (max-width : 1250px) {
        #menu-icon {
            display : block;
            z-index : 100;
        }
        .nav-links {
            position: absolute;
            top: 0%;
            right: -100%;
            width: 400px;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding-top: 100px;
            transition: all .55s ease;
            background-color: #eee;
        }
        .nav-links .nav-item {
            display: block;
            margin: 20px;
            align-self : flex-start;
            padding: 0px 25px;
            transition: all .50s ease;
        }
        .nav-links.open {
            right : 0%;
        }
    }
    @media (max-width:580px) {
        .nav-links {
            width: 300px;
        }
    }
`

export const Logo = styled.img<{width:string}>`
    width : ${({width})=>width};
    @media (max-width:480px) {
        width : 15%;
    }
`

export const Button = styled.button<{bg:string,text:string}> `
    padding: 8px 30px;
    border-radius: 4px;
    border: 1px solid #00BFFF;
    color: ${({text})=>text};
    background-color : ${({bg})=>bg};
    i {
        color : ${colors.primaryColor};
        font-size : 20px;
    }
    @media (max-width : 850px) {
        padding: 8px 20px;
    }
    @media (max-width : 768px) {
        padding: 8px 10px;
    }
`

export const H3 = styled.h3`
    color : ${colors.primaryColor};
    text-align : center;
`

export const H4 = styled.div`
    font-size: 20px;
    cursor: pointer;
    color : ${colors.primaryColor}
`;

export const H5 = styled.h5`
    font-size: 15px;
`

export const I = styled.i<{color:string}>`
    color : ${({color})=> color}
`


export const BigTextSection = styled.div`
    width : 50%;
    p {
        padding : 30px 0 50px 0;
    }
    @media (max-width : 700px) {
        order : 2;
        width : 100%;
        text-align : center;
        p {
            display : none;
        }
    }
`

export const H1 = styled.h1`
    border-left: 4px solid ${colors.primaryColor};
    font-size: 50px;
    font-weight: 700;
    color: ${colors.primaryColor};
    padding : 0 10px;
    line-height : 70px;
    @media (max-width : 1050px) {
        font-size: 40px;
        line-height : 60px;
    }
    @media (max-width : 950px) {
        font-size: 35px;
        line-height : 50px;
    }
    @media (max-width : 850px) {
        font-size: 30px;
        line-height : 40px;
    }
    @media (max-width : 700px)  {
        border : none;
    }
`;

export const Para = styled.p`
    font-weight : 400;
    font-size : 15px;
    @media (max-width : 950px) {
        font-size : 12px;
    }
    @media (max-width : 850px) {
        font-size : 10px;
    }
`

export const BigImages = styled.img`
    width: 500px;
    object-fit: cover;
    border-radius: 5px;
    @media (max-width : 1200px) {
        width : 470px;
    }
    @media (max-width : 950px) {
        width : 400px;
    }
    @media (max-width : 850px) {
        width : 350px;
        margin-top : -50px;
    }    
    @media (max-width : 700px)  {
        width : 300px;
        margin : auto;
    } 
`

export const Button2 = styled.button`
    text-align : center;
    padding: 8px 90px;
    border-radius: 4px;
    background-color : #00BFFF;
    border : none;
    color : #FFF;
    @media (max-width : 550px ) {
        padding: 8px 40px;
    }
`

export const FlightInformation = styled.div`
    justify-content: space-between;
    margin-block : 50px;
    flex-wrap : wrap;
    gap : 10px;
    h3 {
        padding-block : 12px;
        font-size : 22px;
    }
    @media (max-width : 550px) {
        flex-direction : column;
    }
`;

export const FlightInfoCard = styled.div`
    padding: 15px;
    padding-bottom: 0px;
    width: 23%; 
    background-color: ${colors.secondaryColor};
    border: none;
    @media (max-width : 1050px) {
        width : 45%;
    }
    @media (max-width : 550px) {
        width : 100%
    }
`;

export const FlightInfoTopSection = styled.div`
    color : ${colors.primaryColor};
    justify-content: space-between;
`;

export const Cards = styled.div`
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    margin-block : 30px;
    @media (max-width : 1250px) {
        justify-content: flex-start;
        gap : 100px;
    }
    @media (max-width : 1200px) {
        gap : 60px;
    }
    @media (max-width : 1050px) {
        gap : 40px;
    }
    @media (max-width : 1050px) {
        justify-content: space-between;
    }
    @media (max-width : 1050px) {
        gap : 20px;
    }
    @media (max-width : 550px) {
        flex-direction : column;
    }
`;

export const Card = styled.div`
    width: 23%;
    background-color: #FFF;
    transition: 0.2s all;
    font-size: 12px;
    span {
        color : ${colors.primaryColor};
    }
    @media (max-width : 1250px) {
        width: 27%;
    }
    @media (max-width : 1200px) {
        width: 29%;
    }
    @media (max-width : 1050px) {
        width: 30%;
    }
    @media (max-width : 950px) {
        width: 40%;
    }
    @media (max-width : 850px) {
        width : 45%;
    }
    @media (max-width : 630px) {
        width : 47%;
    }
    @media (max-width : 550px) {
        width : 70%;
    }
    @media (max-width : 480px) {
        width : 90%;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    border-radius: 3px;
    object-fit: cover;
    height: 200px;
`;

export const CardBody = styled.div`
    padding : 10px 20px;
    div p {
        padding-top : 10px;
        font-size : 12px;
    }
`;

export const CardFooter = styled.div`
    margin-block : 5px;
    .card-footer-left > img {
        width : 50px;
        height: 50px;
        border-radius: 50%;
    }
    .card-footer-left .footer-text {
        margin-top: 10px;
        align-self: center;
        padding: 0 10px;
    }
    .card-footer-left .footer-text  h6 {
        font-size: 13px;
    }
    .card-footer-left .footer-text p{
        margin-top: -10px;
        font-size: 10px;
        opacity: 0.7;
    }
    .card-footer-right {
        display: flex;
    }
    .card-footer-right i {
        color: #00BFFF;
        margin: 0 3px;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, 0.1);
        font-size: 15px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ServicesCards = styled.div`
    justify-content: space-between;
    flex-wrap: wrap;
    gap : 5px;
    margin-block : 20px;
    @media (max-width : 480px) {
        flex-direction : column;
    }
`

export const ServiceCard = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    i {
        color: #FFF;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        align-self: center;
        background-color: ${colors.primaryColor};
    }
    .service-text-section {
        padding-inline: 20px;
        border-radius: 5px;
        text-align : center;
        background-color: #dddddd;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, 0.1);
        p {
            font-size : 14px;
        }
    }
    @media (max-width : 1200px) {
        width : 23%;
    }
    @media (max-width : 950px) {
        width : 45%;
        margin-bottom : 20px;
    }
    @media (max-width : 480px) {
        width : 100%;
    }
`

export const SeeMoreSection = styled.div`
    margin-block : 20px;
    text-align : center;
`

export const FeedbackCardsSection = styled.div`
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    .feedback-card {
        width: 30%;
        padding: 20px 10px;
        background-color: #FFF;    
        flex-direction: column;
        text-align: center;
        gap: 15px;    
        box-shadow: -1px -1px 1px 1px rgba(0, 0, 255, 0.1), 1px 1px 1px 1px rgba(0, 0, 255, 0.1);
        .feedback-top-section {
            justify-content : space-between;
            width : 100%;
        }
    }
    .feedback-card p {
        font-size: 13px;
        opacity: 0.8;
        text-align: justify;
        line-height: 20px;
    }
    
    .left-top-section > img {
        width : 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
    }
    .feedback-top-section p {
        font-size: 13px;
    }
    .feedback-text {
        padding: 10px;
        line-height: 5px;
    }
    .left-top-section .feedback-text p {
        font-size: 12px;
    }
    .left-top-section .feedback-text p > i {
        color: yellow;
    }
    @media (max-width : 1050px) {
        gap : 5px;
        .feedback-card {
            width : 32%;
        }
    }
    @media (max-width : 950px) {
        .feedback-card {
            width : 45%;
        }
        .feedback-card:last-child {
            display : none;
        }
    }
    @media (max-width : 700px) {
        .feedback-card {
            width : 48%;
        }
    }
    @media (max-width : 615px) {
        .feedback-card {
            width : 100%;
        }
    }
    @media (max-width : 550px) {
        .feedback-card {
            width : 90%;
            margin : auto;
        }
    }
`

export const BgImages = styled.div<{imagepath:string}>`
    margin-block : 100px;
    background : linear-gradient(rgb(0,0,0,0.1),rgb(0,0,0,0.8)), url('${({imagepath})=>imagepath}');
    background-size: cover;
    height: 80vh;
    background-position: center;
    border-radius: 5px;    
    text-align : center;
    display : flex;
    color : #FFF;
    flex-direction  : column;
    align-items : center;
    justify-content : center;
    position : relative;
    // .image-btn {
    //     position : absolute;
    //     left : 40%;
    //     bottom : 0%;
    // }
    // .text-on-image {
    //     width : 50%;
    //     margin : auto;
    //     h1 {
    //         font-size: 50px;
    //         font-weight: bold;
    //         padding-bottom: 30px;
    //     }
    // }
    .text-on-image {
        width : 50%;
        padding : 20px 0;
    }
    .image-btn {
        position : absolute;
        bottom : 0%;
    }
    @media (max-width : 820px ) {
        height : 40vh;
        h2 {
            font-size : 30px;
        }
    }
    @media (max-width : 550px ) {
        height :30vh;
        h2 {
            font-size : 20px;
        }
    }
    @media (max-width:850px) {
        .text-on-image {
            width : 60%;
            p {
                font-size : 13px;
            }
        }
    }
    @media (max-width:550px) {
        .text-on-image {
            width : 90%;
            p {
                font-size : 10px;
            }
        }
    }
`

export const H2 = styled.h2`
    font-size : 45px;
    color : #FFF;
    position : absolute;
    right : 10%;
    width : 45%;
    top : 20%;
`

export const BlogHeading = styled.div`
    text-align : center;
    width : 40%;
    margin : auto;
    h2 {
        font-size : 40px;
        color : ${colors.primaryColor}
    }
    p {
        font-size : 13px;
    }
    @media (max-width : 1200px) {
        width : 50%;
    }
    @media (max-width : 915px) {
        width : 70%;
    }
    @media (max-width : 550px) {
        width : 100%;
        h2 {
            font-size : 30px;
        }
        p {
            display : none;
        }
    }
`;

export const BlogCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 26%;
    gap: 15px; 
    .date-author {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 20px;
        background-color: #eeeeee;
        border-radius: 10px;
        h6 {
            margin : 10px 0px;
        }
    }
    p {
        margin-top: -20px;
        font-size: 13px;
        opacity: 0.8;
        .link {
            color : orange;
            text-decoration : none;
        }
    }
    @media (max-width : 1200px ) {
        width : 28%;
    }
    @media (max-width : 850px ) {
        width : 45%;
    }
    @media (max-width : 550px ) {
        width : 90%;
    }
`

export const AboutTextSection = styled.div`
    display : flex;
    flex-direction : column;
    width : 50%;
    h1 {
        color : ${colors.primaryColor}
    }
    .text-contents {
        font-size : 13px;
        i {
            color : yellow;
            margin-top : -15px;
            padding-right : 20px;
        }
    }
    > p {
        margin-bottom : 0px;
        font-size : 13px;
    }
    @media (max-width:1200px) {
        h1 {
            font-size : 30px;
        }
        .text-contents {
            font-size : 12px;
        }
        > p {
            font-size : 11px;
        }
    }
    @media (max-width:1050px) {
        margin-left : 20px;
        h1 {
            font-size : 30px;
        }
        .text-contents {
            font-size : 10px;
        }
        > p {
            font-size : 10px;
        }
    }
    @media (max-width:900px) {
        margin-left : 20px;
        h1 {
            font-size : 20px;
        }
        .text-contents {
            font-size : 9px;
        }
        > p {
            margin-right : 20px;
            font-size : 9px;
        }
    }
    @media (max-width : 630px)  {
        width : 100%;
        h1 {
            font-size : 30px;
        }
        .text-contents {
            font-size : 13px;
        }
        > p {
            margin-right : 20px;
            font-size : 12px;
        }
    }
    @media (max-width : 550px)  {
        width : 100%;
        h1 {
            font-size : 25px;
        }
        .text-contents {
            font-size : 10px;
        }
        > p {
            margin-right : 20px;
            font-size : 12px;
        }
    }
`

export const FormContainer = styled.div`
    display : flex;
    align-items : center;
    > img {
        width: 40%;
        border-radius:50%;
        height: 35%;
        object-fit : cover;
        border: 3px dashed #00BFFF;
    }
    .contact-section {
        width : 50%;
    }
    @media (max-width:850px) {
        > img {
            display : none;
        }
        .contact-section {
            width : 100%;
        }
    }
`;

export const FormInput = styled.div<{pad:string}>`
    width : 100%;
    padding-block : 10px;
    label {
        padding-block : ${({pad})=>pad};
        font-size : 20px;
        font-weight : 500;
    }
    textArea {
        width: 100%;
        padding: 15px;
        border: none;
        outline: none;
        background-color: #eeeeee;
        border-radius: 5px;
        ::placeholder {
            font-size: 13px;
        }
    }
`

export const FormControl = styled.input `
    width : 100%;
    padding: 15px;
    border: none;
    outline: none;
    background-color: #eeeeee;
    border-radius: 5px;
    ::placeholder {
        font-size: 13px;
    }
`

export const UserFormContainer = styled.div`
    display : flex;
    border-radius: 15px;
    background-color: #FFF;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 255, 0.1), -1px -1px 1px 0px rgba(0, 0, 255, 0.1);
    .form-section {
        width : 50%;
        padding : 0 25px;
        p {
            text-align : center;
        }
        .links-section {            
            padding-top : 20px;
            font-size : 13px;
            text-align : center;
            .nav-links {
                text-decoration : none;
                color : #00BFFF;
            }
            p {
                padding : 10px 0;
            }
        }
    } 
    .image-section {
        width : 50%;
        img {
            width : 100%;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
        }
    }   
    @media (max-width : 950px) {
        .form-section {
            width : 60%;
        }
        .image-section {
            img {
                height : 650px;
            }
            // display : none;
        }
    }
    @media (max-width : 915px) {
        .form-section {
            width : 60%;
        }
        .image-section {
            img {
                height : 680px;
            }
        }
    }
     @media (max-width : 730px) {
        .form-section {
            width : 100%;
            padding-bottom : 50px;
        }
        .image-section {
             display : none;
        }
    }
`;

export const LogoHeading = styled.div`
    padding : 20px 0 0 50px;
    img {
        width : 13%;
    }
    h6 {
        padding-left : 10px;
        font-size : 20px;
    }
`;

export const UserHeadingSection = styled.div<{align:string}>`
    text-align : ${({align})=>align};
    width : 100%;
    p {
        margin-top : -10px;
        text-align : ${({align})=>align} !important;
    }
`

export const UserLoginButtons = styled.div`
    gap : 20px;
    flex-wrap : wrap;
    justify-content : center;
    .buttons {
        width : 30%;
    }
    .logo {
        padding-right : 5px;
        width : 20%;
    }
    @media(max-width : 1200px) {
        .logo {
            display : none;
        }
    }
    @media(max-width : 915px) {
        .buttons {
            width : 29%;
        }
    }
`

export const Body = styled.body`
    background: linear-gradient(rgb(0,0,0,0.1),rgb(0,0,0,0.8)), url("assets/asset\ 40.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    padding-block:50px;
`
