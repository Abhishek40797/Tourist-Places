import React, { useState } from 'react'
import { Button, H2, Input, SearchArea } from '../Styled-components/StyleComponents'
import { PopularRecipes } from './PopularRecipes'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NewRecipes } from './NewRecipes';
import { useNavigate } from 'react-router-dom';

export const Hero = ()=>{
    const [item,setItem] = useState("")
    const navigate = useNavigate()
    return (
        <>
            <H2>Authentic Indian Recipes For The Modern Kitchen</H2>
            <SearchArea className='container' >
                <Input type='text' value={item} placeholder='search expore-to-find food here' onChange={(e)=>setItem(e.target.value)} />
                <Button onClick={()=>navigate(`/${item}`)}>Search</Button>
            </SearchArea>

            <PopularRecipes/>
            <NewRecipes />

        </>
    )
}