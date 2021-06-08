import React from 'react';
import Spinner from '../Spinner';
import DataProvider from '../DataProvider';

function PhonesLoader () {
  return (
    <DataProvider dataLink='/phones.json'>
      {({ data, isFetching, error }) => {
        if (!isFetching && data) {
          return (
            <div>
              {data.map(({ id, name, price }) => (
                <div key={id}>
                  ID: {id}, NAME: {name}, PRICE: {price}
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

export default PhonesLoader;
