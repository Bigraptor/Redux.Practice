import React, { Component } from "react";

class Control extends Component{
    render(){
        return(
            <div>
                <button onClick = {this.props.onPlus}>+</button>
                <button onClick = {this.props.onSubstract}>-</button>
                <button onClick = {this.props.onRandomizeColor}>Random</button>  
            </div>
        );
    }
}

Control.defaultProps = {
    onPlus : () => console.warn("onPlus is not defined"),
    onSubstract : () => console.warn("onSubstract is not defined"),
    onRandomizeColor : () => console.warn("onRandomizeColor is not defined")
}

export default Control;