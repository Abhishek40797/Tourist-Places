import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Loginpage';
import { Dashboard } from './Dashboard';

const Q43 = ()=>{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>} />
                    <Route path='/Dashboard' element={<Dashboard/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Q43;