import React, { Component } from 'react';
import Spinner from '../Spinner';
import {getUsers} from '../../api';


export default class UserLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      error: null,
    };
  }

  componentDidMount () {
    // https://randomuser.me/api/?page=3&results=10&seed=fm2021-1
    getUsers()
      .then(data => {
        this.setState({
          users: data.results,
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isFetching: false }));
  }

  render () {
    const { users, isFetching, error } = this.state;

    if(isFetching) return <Spinner />
    if(error) return <div>ERROR!</div>

    return (
    <div>
      <h1>USER LIST</h1>
      <ul>
        {users.map(user => (
          <li key={user.login.uuid}>{JSON.stringify(user)}</li>
        ))}
      </ul>
    </div>
    );
  }
}
