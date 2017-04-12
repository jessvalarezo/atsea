import CustomerContainer from './CustomerContainer';
import LoginContainer from './LoginContainer';

class TopNavContainer extends Component {
  renderLogo() {
    return (
      <div>
        logo
      </div>
    );
  }

  renderActive() {
    const { username } = this.props;
    return <InactiveUser />;
  }

  renderInactive() {
    return <ActiveUser username={username} />;
  }

  render() {
    const {isActive} = this.props;
    return (
      <div>
        {this.renderLogo()}
        {isActive ? this.renderActive() : this.renderInactive()}
      </div>
    );
  }
}

TopNavContainer.propTypes = {
  isActive: PropTypes.bool,
};

const mapStateToProps = state => ({
  isActive: isActive(state),
});

export default connect(mapStateToProps)(CartContainer);
