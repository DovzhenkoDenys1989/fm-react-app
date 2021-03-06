import React, { Component } from 'react';
import Spinner from '../Spinner';
import { getUsers } from '../../api';

export default class UserLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      error: null,
      currentPage: 1,
    };
  }

  load = () => {
    const { currentPage } = this.state;
    getUsers({ page: currentPage })
      .then(data => {
        this.setState({
          users: data.results,
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isFetching: false }));
  };

  componentDidMount () {
    this.load();
  }

  componentDidUpdate (prevProps, prevState) {
    const { currentPage } = this.state;
    if (prevState.currentPage !== currentPage) {
      this.load();
    }
  }

  /*
    TASK
    Реализовать функционал кнопки Prev page
  */
  prevPage = () => {
    const { currentPage } = this.state;
    if(currentPage > 1){
    this.setState({ currentPage: this.state.currentPage - 1 });
    }
  };
  nextPage = () => this.setState({ currentPage: this.state.currentPage + 1 });

  render () {
    const { users, isFetching, error } = this.state;

    if (isFetching) return <Spinner />;
    if (error) return <div>ERROR!</div>;

    return (
      <div>
        <h1>USER LIST</h1>
        <button onClick={this.prevPage}>Prev page</button>
        <button onClick={this.nextPage}>Next page</button>
        <ul>
          {users.map(user => (
            <li key={user.login.uuid}>{JSON.stringify(user)}</li>
          ))}
        </ul>
      </div>
    );
  }
}
