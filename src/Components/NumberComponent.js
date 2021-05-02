import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { AppSate } from '../AppState'
import '../App.css';
class NumberComponent extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)
        
        this.state = {
            count: AppSate.count,
            brandName: AppSate.brandName
        }
    }
    
    updateCount = () => {
        this.setState({ count: this.state.count + 10})
    }
    
    updateCountTwo = () => {
        this.setState({ count: this.state.count + 15})
    }
    
    render() {
        const count = this.state.count;
        return (
            <div>
                <h3 onClick={this.updateCount}>{this.state.brandName}{count}</h3>
                <h3 onClick={this.updateCountTwo}>{this.state.brandName}{this.props.boards}{count}</h3>
            </div>
        )
    }
}

export default NumberComponent