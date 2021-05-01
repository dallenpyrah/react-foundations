import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class NumberComponent extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    updateCount = () => {
        this.setState({ count: this.state.count + 10})
    }

    render() {
        const count = this.state.count;
        return (
            <div>
                <h3 onClick={this.updateCount}>{this.props.name}{count}</h3>
            </div>
        )
    }
}

export default NumberComponent