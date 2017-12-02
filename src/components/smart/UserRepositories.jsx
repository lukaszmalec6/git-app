import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserRepositiories } from "../../redux/thunk";
import UserInfo from "../dumb/UserInfo.jsx";
import RepoCard from "../dumb/RepoCard.jsx";
import FaSpinner from "react-icons/lib/fa/spinner";
import PropTypes from "prop-types";
class UserRepositories extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      perPage: 6
    };
  }
  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };
  componentWillMount() {
    this.props.fetchUserRepositiories(this.props.location.pathname);
  }
  render() {
    const { currentPage, perPage } = this.state;
    const { login, avatar_url, location, type, name } = this.props.user;
    const {
      repositories,
      repo_loaded,
      repo_loading,
      repo_error,
      user_loaded,
      user_loading,
      user_error,
      repo_err_msg,
      user_err_msg
    } = this.props;

    /* 
    Classic pagination logic. 
    Calculating index, slicing array for render
    Render page numbers
    */
    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentRepos = repositories.slice(indexOfFirst, indexOfLast);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(repositories.length / perPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className={currentPage === number ? "active" : null}
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });
    return (
      <article className="user-repos-page">
        {repo_loading || user_loading ? (
          <div className="informer">
            <FaSpinner size={30} color="#393939" />
            <h3>Loading</h3>
          </div>
        ) : repo_loaded && user_loaded ? (
          <div className="wrapper">
            <UserInfo
              login={login}
              av={avatar_url}
              location={location}
              type={type}
              name={name}
            />

            <section className="repos">
              {currentRepos.length > 0 ? (
                currentRepos.map(repo => (
                  <RepoCard
                    key={repo.id}
                    name={repo.name}
                    description={repo.description}
                    lang={repo.language}
                    url={repo.html_url}
                    stars={repo.stargazers_count}
                    watchers={repo.watchers_count}
                  />
                ))
              ) : (
                <h3 style={{ marginTop: "5em" }}>No repositories</h3>
              )}
              <ul className="page-numbers">{renderPageNumbers}</ul>
            </section>
          </div>
        ) : null}
        {user_error ? (
          <h1>{user_err_msg || "Error"}</h1>
        ) : repo_err_msg ? (
          <h1>{repo_err_msg || "Error"}}</h1>
        ) : null}
      </article>
    );
  }
}
const mapStateToProps = state => {
  return {
    repo_err_msg: state.repositories.err_message,
    repo_loading: state.repositories.loading,
    repo_loaded: state.repositories.loaded,
    repo_error: state.repositories.error,
    repositories: state.repositories.repositories,
    user: state.user.user,
    user_err_msg: state.user.err_message,
    user_loading: state.user.loading,
    user_loaded: state.user.loaded,
    user_error: state.user.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserRepositiories: login => dispatch(fetchUserRepositiories(login))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserRepositories);
UserRepositories.propTypes = {
  fetchUserRepositiories: PropTypes.func.isRequired,
  repo_err_msg: PropTypes.string,
  repo_loading: PropTypes.bool.isRequired,
  repo_loaded: PropTypes.bool.isRequired,
  repo_error: PropTypes.bool.isRequired,
  repositories: PropTypes.array,
  user: PropTypes.object,
  user_err_msg: PropTypes.string,
  user_loading: PropTypes.bool.isRequired,
  user_loaded: PropTypes.bool.isRequired,
  user_error: PropTypes.bool.isRequired
};
