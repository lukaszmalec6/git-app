import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsersList } from "../../redux/Thunk";

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
        <h1>User list</h1>
        {this.props.users.map(item => (
          <div key={item.id}>
            <Link to={"/" + item.login}>{item.login}</Link>
          </div>
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
