import React from 'react';
import DataProvider from '../DataProvider';
import Spinner from '../Spinner';

function UserLoader () {
  const load = () => {
    return fetch('/users.json').then(res => res.json());
  };
  return (
    <DataProvider loadData={load}>
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
