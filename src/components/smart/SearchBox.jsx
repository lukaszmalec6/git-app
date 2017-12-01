import React, { Component } from "react";
import { connect } from "react-redux";
import { searchUser } from "../../redux/thunk";
import FaSearch from "react-icons/lib/fa/search";
import Joi from "joi";
const escapeSpecialChars = /^[a-zA-Z0-9 ]+$/;
const querySchema = Joi.string()
  .regex(escapeSpecialChars)
  .min(3)
  .max(60)
  .required();
class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      q: "",
      validationError: false
    };
  }
  handleQuery = query => {
    this.setState({
      q: query
    });
  };
  runSearch = () => {
    Joi.validate(this.state.q, querySchema, err => {
      if (err) {
        console.log(err);
        this.setState({ validationError: true });
      } else {
        this.props.searchUser(this.state.q);
        this.props.redirect();
        this.setState({
          validationError: false
        });
      }
    });
  };

  render() {
    return (
      <span className="searchBox">
        <input
          placeholder="Search by nickname"
          type="text"
          onChange={event => this.handleQuery(event.target.value)}
        />

        <button
          className="button button-search"
          onClick={() => {
            this.runSearch();
          }}
        >
          <FaSearch size={20} color="#393939" />
        </button>
        {this.state.validationError ? (
          <p className="error-text">Invalid data. Use letters and nubmers.</p>
        ) : null}
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
