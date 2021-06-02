import React from 'react';
import PropTypes from 'prop-types';

function ArticleWrapper({tittle, children}) {
  return (
    <article>
      <h2>{tittle}</h2>
      <div>
        {children}
      </div>
    </article>
  )
}

ArticleWrapper.propTypes = {
  tittle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
}

export default ArticleWrapper;