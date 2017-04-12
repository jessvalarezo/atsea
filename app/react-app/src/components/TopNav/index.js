import React, { Component, PropTypes } from 'react'
import { isActive } from '../reducers'
import LoginForm from '../LoginForm'
import CreateUserForm from '../CreateUserForm'

class TopNav extends Component {
    loginUser() {

    }
    
    createUser() {

    }

    renderActive() {
        return (
        <div>
            Logged in :) 
        </div>
        )
    }

    renderInactive() {
        return (
            <div>
                <LoginForm handleSubmit={this.loginUser()}/>
                <CreatUserForm handleSubmit={this.createUser()}/>
            </div>
        )
    }
    render() {
        const { isActive } = this.props;
        return isActive? this.renderActive() : this.renderInactive();
    }
}

const mapStateToProps = state => ({
    isActive: isActive(state)
})

export default connect(
  mapStateToProps,
)(TopNav)
