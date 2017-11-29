import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsersList } from "../../redux/Thunk";
import UserCard from "../dumb/UserCard/UserCard.jsx";
class UsersList extends Component {
  componentWillMount() {
    this.props.fetchUsersList(0);
  }
  handlePagination = () => {
    this.props.fetchUsersList(this.props.next);
  };
  render() {
    return (
      <div>
        {this.props.users.map(user => (
          <UserCard key={user.id} login={user.login} av={user.avatar_url} />
        ))}
        <button onClick={() => this.handlePagination()}>View more</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    next: state.users.next.since
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersList: since => dispatch(fetchUsersList(since))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
