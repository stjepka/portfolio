import React from 'react';

export default class Student extends React.Component{
    
    render()
    {
        console.warn(this.props.name);
       return(
        <div>
            <h1>Hello {this.props.name}{" "}{this.props.lastname}</h1>
        </div>
       )
    }
}