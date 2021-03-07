import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Navitem extends Component{
  

  
    render(){
        return(
            <li style={{color:"#000000"}} id={this.props.item}>
                <Link to={this.props.tolink}
                onClick={this.props.activec.bind(this, this.props.item)}>
                    {this.props.item}
                </Link>

            </li>
        )
    }
}export default Navitem