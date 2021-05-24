const UserCard = (props) => {
  const {
    user: { id, firstname, lastname },
  } = props;

  return (
    <article>
      <p>ID: {id}</p>
      <h1>
        User Name: {firstname} {lastname}
      </h1>
    </article>
  );
};

export default UserCard;
