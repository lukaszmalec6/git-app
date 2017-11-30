import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserRepositiories } from "../../redux/Thunk";
import UserInfo from "../dumb/UserInfo.jsx";
import RepoCard from "../dumb/RepoCard.jsx";
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
    const { login, avatar_url, location, type } = this.props.user;
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
    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const current = repositories.slice(indexOfFirst, indexOfLast);
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
          <h2>Loading...</h2>
        ) : repo_loaded && user_loaded ? (
          <div className="wrapper">
            <UserInfo
              login={login}
              av={avatar_url}
              location={location}
              type={type}
            />

            <section className="repos">
              {current.map(repo => (
                <RepoCard
                  key={repo.id}
                  name={repo.name}
                  description={repo.description}
                  lang={repo.language}
                  url={repo.html_url}
                  stars={repo.stargazers_count}
                  watchers={repo.watchers_count}
                />
              ))}
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
