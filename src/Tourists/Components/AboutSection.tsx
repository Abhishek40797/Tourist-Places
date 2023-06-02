import React from "react";
import { AboutTextSection } from "../StyledComponents/Styling";

interface IProps {
    text : string,
    listtype : boolean
}

export const AboutContent = ({text,listtype}:IProps)=>{
    return (
        <>
            <AboutTextSection>
                <h1>{text}</h1>
                {
                    listtype                    
                    ? 
                        <>
                            <div className="text-contents flex justify-between">
                                <i className="fa-solid fa-circle"></i>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus</p>
                            </div>
                            <div className="text-contents flex justify-between">
                                <i className="fa-solid fa-circle"></i>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus</p>
                            </div>
                            <div className="text-contents flex justify-between">
                                <i className="fa-solid fa-circle"></i>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus</p>
                            </div>
                            <div className="text-contents flex justify-between">
                                <i className="fa-solid fa-circle"></i>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus</p>
                            </div>
                            <div className="text-contents flex justify-between">
                                <i className="fa-solid fa-circle"></i>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus</p>
                            </div>
                            <div className="text-contents flex justify-between">
                                <i className="fa-solid fa-circle"></i>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus</p>
                            </div>
                        </>                        
                    :
                    <>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro voluptates quam libero cum voluptatem sint ducimus, animi qui mollitia inventore, doloribus animi qui mollitia animi qui mollitia</p>
                    </>
                }
            </AboutTextSection>
        </>
    )
}