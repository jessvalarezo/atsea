import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
    createCustomer,
    loginCustomer,
} from '../../actions'
import {
    isActive,
    getContainerId,
} from '../../reducers'
import LoginForm from '../LoginForm'
import CreateUserForm from '../CreateUserForm'
import FlatButton from 'material-ui/FlatButton'
import Modal from 'react-modal'
import Logo from '../Logo'
import './styles.css'
import '../globalStyles.css'

class TopNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCreateModalOpen: false,
            isLoginModalOpen: false,
            authenticated: false,
            user: {},
        }
    }

    handleSuccess = () => {
        console.log('success!')
    }

    handleCreateUser = (values) => {
        const {
            username,
            password,
        } = values;
        const { createCustomer } = this.props;
        createCustomer(username, password)
          .then(this.handleSuccess)
          .catch((err) => {
            console.log('error creating the customer')
          })
    }

    handleLogin = (values) => {
        const {
            username,
            password,
        } = values;
        const { loginCustomer } = this.props;
        console.log('logging in')
        loginCustomer(username, password)
          .then(this.handleSuccess)
          .catch((err) => {
            console.log('error loggging in the customer')
          })
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

    makeCreateButton() {
        return (
            <FlatButton
                onClick={this.toggleCreateModal}
                label="Create User"
            />
        )
    }

    makeLoginButton() {
        return (
            <FlatButton
                onClick={this.toggleLoginModal}
                label="Login"
            />
        )
    }

    toggleCreateModal = () => {
        this.setState({
            isCreateModalOpen: !this.state.isCreateModalOpen,
        })
    }

    toggleLoginModal = () => {
        this.setState({
            isLoginModalOpen: !this.state.isLoginModalOpen,
        })
    }
    
    renderCreateModal = () => {
        return (
            <Modal
                isOpen={this.state.isCreateModalOpen}
                onRequestClose={this.toggleCreateModal}
            >
            <div className='formContainer'>
            <CreateUserForm onSubmit={this.handleCreateUser} />
            </div>
            </Modal>
        )
    }

    renderLoginModal = () => {
        return (
            <Modal
                isOpen={this.state.isLoginModalOpen}
                onRequestClose={this.toggleLoginModal}
            >
            <div className='formContainer'>
            <LoginForm onSubmit={this.handleLogin} />
            </div>
            </Modal>

        )
    }

    renderUnauthenticated() {
        return (
            // <div className='inauthenticated'>
            <div>
                {this.makeLoginButton()}
                {this.makeCreateButton()}
                {this.renderCreateModal()}
                {this.renderLoginModal()}
            </div>
        )
    }

    renderAuthenticated() {
        return (
            <div className='authenticated'>

            </div>
        )
    }

    render() {
        return (
            <div className='globalContainer'>
                <div className='navHeader'>
                    <div className='navLogo'>
                        <Logo />
                    </div>
                    <div className='navUser'>
                    { this.renderContainerId()}
                    { this.state.authenticated ? this.renderAuthenticated() : this.renderUnauthenticated()}
                    </div>
                </div>
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
  { createCustomer, loginCustomer }
)(TopNav)
