import React, { Component } from "react";
import UserCard from "./UserCard";

const usersDB = [
  {
    id: 1,
    firstname: "John",
    lastname: "Smith",
  },
  {
    id: 2,
    firstname: "Bob",
    lastname: "Brown",
  },
  {
    id: 3,
    firstname: "Sara",
    lastname: "Smith",
  },
  {
    id: 4,
    firstname: "Mary",
    lastname: "Black",
  },
];

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersDB.map((user) => ({ 
        ...user, 
        isSelected: false,
      })),
    };
  }

  mapUser = (user) => <UserCard key={user.id} user={user} />;

  render() {
    const { users } = this.state;
    return (
      <section>
        <h1>USER LIST FROM DB</h1>
        {users.map(this.mapUser)}
      </section>
    );
  }
}

export default UserList;
