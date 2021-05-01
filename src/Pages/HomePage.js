import React from 'react'
import LogoComponent from '../Components/LogoComponent'

class HomePage extends React.Component{
    render(){
        return <div className="container-fluid">
            <div className="row">
                <div className="ml-4 mt-3">
                    <LogoComponent />
                </div>
            </div>
        </div>
    }
}

export default HomePage