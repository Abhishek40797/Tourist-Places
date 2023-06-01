import React from "react";
import { ExporeFood } from "./ExporeToFindCard";

export const ExportToFInd = ()=>{

    return (
        <>
            <h3 style={{marginTop:"50px"}}>Explore To Find</h3>
            <div className="food-categories flex">
                <ExporeFood/>
            </div>
        </>
    )
}