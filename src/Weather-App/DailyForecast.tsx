import React,{useEffect, useState} from "react";
import { Days, WeatherInfo, Wrapper } from "./StyledComponents";

export const DailyForecast = ()=>{
    const [dforecast,setDForecast] = useState({})

    useEffect(()=>{
        const fetchDailyForecast = async ()=>{
            const res = await fetch(``)
            console.log(res)
        }
        fetchDailyForecast()
    },[])

    return (
        <>
            <div className="container">
                <h4>16-day forecast</h4>
                <Wrapper>
                    <WeatherInfo width="50%" height="270px">
                        <Days>
                            <h6>Thu, May 25</h6>
                            <div>
                                <span><img src="" alt="" />19 / 10<sup>o</sup>C</span>
                                <span>Overcast Clouds</span>
                            </div>
                        </Days>
                    </WeatherInfo>
                </Wrapper>
            </div>
        </>
    )
}