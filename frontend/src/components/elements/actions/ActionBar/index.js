import React from 'react';
import PropTypes from 'prop-types';

import './ActionBar.css';


const ActionBar = ({ children }) => (
  <div className="action-bar__component">
    {children}
  </div>
);

ActionBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]).isRequired,
};

export default ActionBar;
