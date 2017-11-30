import React, { Component } from "react";
import { connect } from "react-redux";
import { searchUser } from "../../redux/thunk";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      q: ""
    };
  }
  runSearch = () => {
    this.props.searchUser(this.state.q);
    this.props.redirect();
  };
  handleQuery = query => {
    this.setState({
      q: query
    });
  };
  render() {
    return (
      <span>
        <input
          type="text"
          onChange={event => this.handleQuery(event.target.value)}
        />
        <button
          onClick={() => {
            this.runSearch();
          }}
        >
          search
        </button>
      </span>
    );
  }
}
const mapStateToProps = state => {
  return {
    state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    searchUser: query => dispatch(searchUser(query))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
