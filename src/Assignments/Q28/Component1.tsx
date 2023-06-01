import React from "react";
import Component from "./Componet2";

class Question28 extends React.Component {
    state :{count:number} = {
        count : 0
    }
    increment = (num : number)=>[
        this.setState({
            count : this.state.count + num
        })
    ]
    render(): React.ReactNode {
        return (
            <>
                <Component countValue={this.state.count} />
                <button onClick={()=>this.increment(1)}>INCREMENT</button>
            </>
        )
    }
}
export default Question28;