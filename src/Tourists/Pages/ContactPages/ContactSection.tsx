import React from "react";
import { Button, FormContainer, FormControl, FormInput, SeeMoreSection } from "../../StyledComponents/Styling";

export const ContactSection = ()=>{
    return (
        <>
           <FormContainer className="justify-between">
                <img src="assets/asset 39.png" alt="" />
                <div className="contact-section">
                    <FormInput pad="10px">
                        <label>Full Name</label>
                        <FormControl placeholder="Input Your Name" />
                    </FormInput>
                    <FormInput pad="10px">
                        <label>Email</label>
                        <FormControl placeholder="Input Email Here" />
                    </FormInput>
                    <FormInput pad="10px">
                        <label>Message</label>
                        <textarea placeholder="Write a Message Here" rows={5} />
                    </FormInput>
                    <SeeMoreSection>
                        <Button bg="#00BFFF" text="#FFF">Send</Button>
                    </SeeMoreSection>
                </div>
           </FormContainer>
        </>
    )
}