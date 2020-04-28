import React from 'react';
import PropTypes from 'prop-types';

import './ActionBarItem.css';


const ActionBarItem = ({ type, size, onClick }) => {
  const calculateClassName = () => {
    let className = 'action-bar-item__component';
    if (size) { className += ` ${size}`; }
    if (type) { className += ` ${type}`; }
    return className;
  };

  return (
    <div
      className={calculateClassName()}
      onClick={onClick}
      role="button"
      tabIndex={-1}
    />
  );
};

ActionBarItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
};

ActionBarItem.defaultProps = {
  type: null,
  size: null,
};

export default ActionBarItem;
