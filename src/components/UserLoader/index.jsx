import React from 'react';
import DataProvider from '../DataProvider';
import Spinner from '../Spinner';

function UserLoader () {
  return (
    <DataProvider dataLink='/users.json'>
      {({ data, isFetching, error }) => {
        if (!isFetching && data) {
          return (
            <div>
              {data.map(({ id, name }) => (
                <div key={id}>
                  ID: {id}, NAME: {name}
                </div>
              ))}
            </div>
          );
        }
        if (error) return <div>ERROR</div>;
        return <Spinner />;
      }}
    </DataProvider>
  );
}

export default UserLoader;
