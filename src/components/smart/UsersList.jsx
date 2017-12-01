import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsersList } from "../../redux/thunk";
import UserCard from "../dumb/UserCard.jsx";
import UserListPreloader from "../dumb/UsersListPreloaders.jsx";
import PropTypes from "prop-types";
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
        <article className="users-list-page">
          {users_loading && users.length === 0 ? (
            <UserListPreloader />
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
        </article>
        {users_loaded ? (
          <button
            className="button button-view-more"
            onClick={() => this.handlePagination()}
          >
            View more
          </button>
        ) : null}
        {users_error ? (
          <div className="informer">
            <h3>{users_err_msg || "Error"}</h3>{" "}
          </div>
        ) : null}
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
UsersList.UsersList = {
  fetchUsersList: PropTypes.func.isRequired,
  next: PropTypes.string,
  users_loading: PropTypes.bool.isRequired,
  users_loaded: PropTypes.bool.isRequired,
  users_error: PropTypes.bool.isRequired,
  users: PropTypes.array,
  users_err_msg: PropTypes.string
};
