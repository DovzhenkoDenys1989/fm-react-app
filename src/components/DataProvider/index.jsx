import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function DataProvider (props) {
  const { children, dataLink } = props;
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    setIsFetching(true);

    fetch(dataLink)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(err => setError(err))
      .finally(() => setIsFetching(false));
  };

  return children({ data, error, isFetching });
}

DataProvider.propTypes = {
  children: PropTypes.func.isRequired,
  dataLink: PropTypes.string.isRequired,
};

export default DataProvider;
