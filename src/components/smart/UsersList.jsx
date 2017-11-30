import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsersList } from "../../redux/Thunk";
import UserCard from "../dumb/UserCard.jsx";

class UsersList extends Component {
  componentWillMount() {
    {
      this.props.users.length === 0 ? this.props.fetchUsersList(0) : null;
    }
  }
  handlePagination = () => {
    this.props.fetchUsersList(this.props.next);
  };
  render() {
    return (
      <div className="container">
        <section className="users-list-page">
          {this.props.users.map(user => (
            <UserCard
              key={user.id}
              login={user.login}
              av={user.avatar_url}
              type={user.type}
              gitUrl={user.html_url}
            />
          ))}
        </section>
        <button className="button" onClick={() => this.handlePagination()}>
          View more
        </button>
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
