import React from "react";
import { BigImages, BigTextSection, Cards, Wrapper } from "../../StyledComponents/Styling";
import { ExporeC } from "../../Components/ExporeCard";
import { ExporeData } from "../../data/Expore";
import { BigTexts } from "../BigText";

export const Expore = ()=>{
    return (
        <>
            <Wrapper>
                <div className="flex justify-between flex-direction">
                    <BigTextSection>

                        <BigTexts
                            bigtext="Let's Expore Your Destination"
                            para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eius in exercitationem iusto animi, eum dicta eos reprehenderit rem veniam nemo atque, voluptatem adipisci expedita quia porro molestiae quo dolorem numquam modi, explicabo recusandae accusamus?"
                        />

                    </BigTextSection>
                    <BigImages src="assets/asset 4.jpg" alt="" className="big-image" />
                </div>

                <Cards className="flex">
                    {
                        ExporeData.map((data,i)=>{
                            return (
                                <ExporeC data={data} key={i}/>
                            )
                        })
                    }                
                </Cards>
            </Wrapper>
        </>
    )
} 