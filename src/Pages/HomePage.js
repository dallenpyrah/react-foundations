import React from 'react'
import LogoComponent from '../Components/LogoComponent'
import NumberComponent from '../Components/NumberComponent'

class HomePage extends React.Component{
    render(){
        return <div className="container-fluid">
            <div className="row">
                <div className="ml-4 mt-3">
                    <LogoComponent />
                    <NumberComponent name="Dallen Pyrah" />
                </div>
            </div>
            <div className="row mt-5 justify-content-around">
            <div className="col-3 mt-5">
                <div className="card bg-danger text-light shadow-lg">
                    <h2>Our services</h2>
                    <p>On time calender notifications in order to make sure you're always on time.</p>
                </div>
            </div>
            <div className="col-3">
            <div className="card bg-secondary text-light shadow-lg">
                    <h2>About Us</h2>
                </div>
            </div>
            <div className="col-3 mt-5 ">
                <div className="card bg-danger text-light shadow-lg">
                    <h2>Price Options</h2>
                </div>
            </div>
            </div>
        </div>
    }
}

export default HomePage