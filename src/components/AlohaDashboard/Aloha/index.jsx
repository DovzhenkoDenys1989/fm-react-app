import React, { useState } from "react";

function Aloha(props) {
  const [isGreeting, setIsGreeting] = useState(true);
  const switchState = () => setIsGreeting(!isGreeting);
  const deleteGreetingUser = () => {
    const { users, id, setUsers } = props;
    setUsers(users.filter((user) => user.id !== id));
  };
  const { name = "React" } = props;
  return (
    <>
      <h1 className="heading">
        {isGreeting ? "Hello" : "Goodbye"}, {name}
      </h1>
      <button onClick={switchState}>Switch</button>
      <button onClick={deleteGreetingUser}>Delete</button>
    </>
  );
}

export default Aloha;
