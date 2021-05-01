import React from 'react'
import { AppSate } from '../AppState'
import LogoComponent from '../Components/LogoComponent'
import NumberComponent from '../Components/NumberComponent'
import { Link } from 'react-router-dom'
import 'react-router-dom'

class HomePage extends React.Component{

    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            boards: AppSate.boards
        }
    }
    render(){
        // const boards = this.state.boards;
        return <div className="container-fluid">
            <div className="row">
                <div className="ml-4 mt-3">
                    <LogoComponent />
                    <NumberComponent boards={this.state.boards.title}/>
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
                <Link to="/logo">
            <div className="card bg-secondary text-light shadow-lg">
                    <h2>About Us</h2>
                </div>
                </Link>
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