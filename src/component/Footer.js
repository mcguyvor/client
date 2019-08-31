import React, { Component } from 'react'
class Footer extends Component{
        render(){
            return(
                <div className="container-fluid">
                    <hr/>
                    <div className="text-center text-uppercase">
                       <span className="text-secondary"> <h5>{`Email: ${this.props.email}`}</h5></span>
                    </div>
                </div>
            );
        }      
}
export default Footer;