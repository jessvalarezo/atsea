import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { isActive } from '../../reducers'
import LoginForm from '../LoginForm'
import CreateUserForm from '../CreateUserForm'
import FlatButton from 'material-ui/FlatButton'
import './styles.css'


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
        /*<LoginForm handleSubmit={this.loginUser()}/>
        <CreateUserForm handleSubmit={this.createUser()}/>*/
        return (
            <div className='navContainer'>
            <div className='buttonSection'>
                <FlatButton label="Create User" />
                <FlatButton label="Login" />
            </div>
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
