import React, { Component } from 'react';
import Header from '../component/Header'
import Footer from '../component/Footer'

class About extends Component{
    render(){
        return(
            <div>
                <Header/>
                    <div className='container col-md-5'>
                        <h3>Hello</h3>
                            <p className='title text-justify mt-4 mb-4'>This restaurant web app is for react practice only</p>
                        <h4 classNmae='text-success'> By Noppawat </h4>

                    </div>
                <Footer Email='noppawatchotiwan@gmail.com'/>
            </div>
        );
    }
}
export default About;

