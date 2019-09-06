import React, { Component } from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'

class NotFound extends Component{
    render(){
        return(
            <div>
                <Header/>
                    <div className='container col-md-8 text-center'>
                         <h1 className='mt-5' style={{fontSize:120}}>404</h1>
                         <h2 className='mb-5'>Not Found</h2>
                         <p className='title mb-5'>Sorry , the page you're request is not found</p>

                    </div>
                <Footer Email='noppawatchotiwan@gmail.com'/>
            </div>
        );
    }
}
export default NotFound;