import React from "react";

class CounterApp extends React.Component {
    state:{count:number} = {
        count : 1
    }
    
    increment = (num : number)=>{
        this.setState({
            count : this.state.count + num
        })
    }
    render(): React.ReactNode {
        return (
            <>
                <h3>Counter App</h3>
                <h5>Count : {this.state.count}</h5>
                <button onClick={()=> this.increment(1) }>Increment</button>
            </>
        )
    }
}
export default CounterApp;