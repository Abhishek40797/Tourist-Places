import React from "react"
import { Wrapper, WeatherInfo } from "./StyledComponents"
import { DailyForecast } from "./DailyForecast";

export const WeatherDetails = ({data}:any)=>{

    const title = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55086.67939835389!2d76.79683958203789!3d30.353295540707624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb6482e623f7b%3A0x1814169a97109fae!2sAmbala%20Cantt%2C%20Haryana!5e0!3m2!1sen!2sin!4v1685053308331!5m2!1sen!2sin";
    
    return (
        <>
            {
                data.name !== undefined ? 
                <Wrapper className="container">
                    <WeatherInfo width="40%" height="250px">
                        <h2>{data.name}, {data.sys.country}</h2>
                        <div>
                            <h3><img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt=""/>  {data.main.temp}<sup>o</sup>C</h3>
                            <h6>Feels like {data.main.feels_like}<sup>o</sup>C. {data.weather[0].description.charAt(0).toUpperCase()}{data.weather[0].description.slice(1)}.</h6>
                            <div className="info">
                                <p>Humidity: {data.main.humidity}%</p>
                                <p>Visibility: {data.visibility}km</p><br/>
                                <p>Temp Max: {data.main.temp_max}<sup>o</sup>C</p>
                                <p>Temp Min: {data.main.temp_min}<sup>o</sup>C</p>
                                <p>Wind: {data.wind.speed}km/h</p>
                            </div>
                        </div>
                    </WeatherInfo>
                    <iframe title={title} src={title} width="55%" height="200px" style={{boxShadow:"0px 0px 5px #888"}}></iframe>
                </Wrapper> 
                : <h5 style={{textAlign:"center"}}>{data.message}</h5>
            }
            <DailyForecast />
        </>
    )
}