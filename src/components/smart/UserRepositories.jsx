import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserRepositiories } from "../../redux/Thunk";

class UserRepositiories extends Component {
  componentWillMount() {
    this.props.fetchUserRepositiories(this.props.location.pathname);
  }
  render() {
    return (
      <div>
        <h1>sd</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    repositories: state.repositories.repositories,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserRepositiories: login => dispatch(fetchUserRepositiories(login))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserRepositiories);
