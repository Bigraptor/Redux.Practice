import React, { Component } from "react";

class Value extends Component{
    render(){
        return(
            <div>
                {this.props.number}
            </div>
        );
    }
}

Value.defaultProps = {
    number : -1
}

export default Value;