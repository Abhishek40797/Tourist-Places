import React from "react";

type countProps = {
    countValue : number
}

class Component extends React.Component<countProps> {
    state = {
        count : this.props.countValue
    }

    static getDerivedStateFromProps(props:countProps,state:{count:number}) {
        if(props.countValue !== state.count) {
            console.log("State changing...")
            return { count : props.countValue }
        }
        return null
    } 

    render() {
        return (
            <h1>Counter : {this.state.count}</h1>
        )
    }
}
export default Component;