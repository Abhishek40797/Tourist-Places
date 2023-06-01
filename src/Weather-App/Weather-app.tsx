import React,{useState} from "react";
import { Header } from "./StyledComponents";
import { WeatherDetails } from "./WeatherDetails";

const WeatherApp = ()=>{

    const [data, setData] = useState({})
    const [location,setLocation] = useState("Delhi")
    
    const searchLocation = async ()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=22508e186dd6a620281fa37f59122cfb`
        const res =  await (await fetch(url)).json();
        setData(res)   
        setLocation("")
    }

    return (
        <>
            <h4 style={{textAlign:"center"}}>Weather App</h4>
            <Header>
                <div className="container">
                    <input type="text" value={location} placeholder="Search city" onChange={(e)=>setLocation(e.target.value)} />
                    <button onClick={searchLocation}>Search</button>
                </div>
            </Header>
            <WeatherDetails data={data}/>
        </>
    )
}
export default WeatherApp;