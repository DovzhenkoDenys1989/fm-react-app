import React, { useEffect, useReducer } from 'react';
import Spinner from '../Spinner';

const initialState = {
  isFetching: false,
  data: {
    messages: [],
    users: [],
  },
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'DATA_RESPONSE_REQUEST':
      return { ...initialState, isFetching: true };
    case 'DATA_RESPONSE_SUCCESS': {
      const {
        data: { users, messages },
      } = action;
      const usersMap = new Map();
      users.forEach(user => usersMap.set(user.id, user));

      const messagesWithAuthors = messages.map(msg => {
        return {
          ...msg,
          author: usersMap.get(msg.authorId),
        };
      });

      return {
        ...state,
        data: {
          users,
          messages: messagesWithAuthors,
        },
        isFetching: false,
      };
    }
    case 'DATA_RESPONSE_ERROR':
      return { ...state, isFetching: false, error: action.error };
  }
};

function Chat (props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({
      type: 'DATA_RESPONSE_REQUEST',
    });
    fetch('/chat.json')
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'DATA_RESPONSE_SUCCESS',
          data,
        });
      })
      .catch(error => dispatch({ type: 'DATA_RESPONSE_ERROR', error }));
  }, []);

  if (state.isFetching) {
    return <Spinner />;
  } else if (state.error) {
    return <div>ERROR</div>;
  } else {
    return (
      <div>
        {state.data.messages.map(msg => (
          <div key={msg.id}>
            <h3>{msg.author.name}</h3>
            <p>{msg.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Chat;
