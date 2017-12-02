import React, { Component } from "react";
import { connect } from "react-redux";
import UserCard from "../dumb/UserCard.jsx";
import FaSpinner from "react-icons/lib/fa/spinner";
import PropTypes from "prop-types";
class SearchResults extends Component {
  render() {
    const { total_count, results, loading, loaded, error } = this.props;
    return (
      <div className="container">
        <article className="users-list-page">
          {loading ? (
            <div className="informer">
              <FaSpinner size={30} color="#393939" />
              <h3>Loading</h3>
            </div>
          ) : loaded ? (
            total_count > 0 ? (
              results.map(item => (
                <UserCard
                  key={item.id}
                  login={item.login}
                  av={item.avatar_url}
                  type={item.type}
                  gitUrl={item.html_url}
                />
              ))
            ) : (
              <div className="informer">
                <h3>We couldn't find anything</h3>
              </div>
            )
          ) : (
            <div className="informer">
              <h3>Nothing to show</h3>
            </div>
          )}
          {error ? (
            <div className="informer">
              <h3>{this.props.error_msg ? this.props.error_msg : "Error"}</h3>
            </div>
          ) : null}
        </article>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.search.loading,
    loaded: state.search.loaded,
    error: state.search.error,
    error_msg: state.search.err_message,
    results: state.search.results.items,
    total_count: state.search.results.total_count
  };
};
export default connect(mapStateToProps)(SearchResults);

SearchResults.propTypes = {
  total_count: PropTypes.number,
  results: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  err_message: PropTypes.string
};
