import styled from "styled-components";

export const SearchArea = styled.div`
    padding: 40px 0;
    text-align: center;
`;

export const Input = styled.input `
    border: 2px solid #2D2013;
    outline: none;
    padding: 10px;
    width: 40%;
    border-radius: 5px;
    margin-right : 10px;
`

export const Button = styled.button `
    border : none;
    padding : 10px 20px;
    background : #3F00FF;
    color : #FFF;
    border-radius: 5px;
`

export const H2 = styled.h2`
    text-align : center;
    color : #000;
    margin-top : 20px;
`
export const CardSection = styled.div`
    margin: 20px 0;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 40px 29px;
`;

export const FoodCard = styled.div<{width:string,height:string}>`
    width : ${({width})=>width};
    img {
        width: 100%;
        object-fit:  cover;
        height : ${({height})=>height}
    }
`

export const RecipeName = styled.div`
    width: 80%;
    margin: auto;
    color: #000;
    background-color: #FFF;
    padding: 15px;
    position: relative;
    margin-top: -30px;
`

export const H4 = styled.h4`
    font-size: 15px;
    font-weight: 700;
    line-height: 30px;
`

export const H3 = styled.h3`
    margin-block : 10px;
    color: #000;
`

export const CircleCard = styled.div`
    margin: 50px 20px;
    width: 170px;
    height: 170px;
    text-align: center;
    text-decoration: none;
    color: #000;
    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 30px;
    }
`
