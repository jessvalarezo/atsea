import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { isActive, getContainerId } from '../../reducers'
import LoginForm from '../LoginForm'
import CreateUserForm from '../CreateUserForm'
import FlatButton from 'material-ui/FlatButton'
import './styles.css'


class TopNav extends Component {
    loginUser() {

    }
    
    createUser() {

    }

    renderContainerId() {
        const { containerId } = this.props
        const version = 12345678
        return (
        <div className='containerSection'>
            { `ID: ${containerId} Version: ${version}` }
        </div>
        )
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
            <div className='buttonSection'>
                <FlatButton label="Create User" />
                <FlatButton label="Login" />
            </div>
        )
    }

    render() {
        const { isActive } = this.props;
        return (
            <div className='navContainer'>
            {this.renderContainerId()}
            {isActive? this.renderActive() : this.renderInactive()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isActive: isActive(state),
    containerId: getContainerId(state),
})

export default connect(
  mapStateToProps,
)(TopNav)
