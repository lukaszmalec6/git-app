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
    const {
      users,
      users_error,
      users_loading,
      users_loaded,
      users_err_msg
    } = this.props;
    return (
      <div className="container">
        <section className="users-list-page">
          {users_loading && users.length === 0 ? (
            <h1>Loading</h1>
          ) : users_loaded || users.length > 0 ? (
            users.map(user => (
              <UserCard
                key={user.id}
                login={user.login}
                av={user.avatar_url}
                type={user.type}
                gitUrl={user.html_url}
              />
            ))
          ) : null}
        </section>
        {users_loaded ? (
          <button className="button" onClick={() => this.handlePagination()}>
            View more
          </button>
        ) : null}
        {users_error ? <h1>{users_err_msg || "Error"}</h1> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    next: state.users.next.since,
    users_error: state.users.error,
    users_loading: state.users.loading,
    users_loaded: state.users.loaded,
    users_err_msg: state.users.err_message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersList: since => dispatch(fetchUsersList(since))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
