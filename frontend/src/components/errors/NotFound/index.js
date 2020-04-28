import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { resetNotFound } from 'redux/common/actions';

import { withRouter } from 'react-router-dom';

import Button from 'components/elements/buttons/Button';

import './NotFound.css';

const NotFound = ({ resetNotFound, history }) => {
  useEffect(() => {
    return () => {
      resetNotFound();
    };
  }, []);

  const buttonHandler = () => {
    resetNotFound()
    history.push('/');
  };

  return (
    <div className="not-found__component">
      <div className="wrapper">
        <div className="title">404</div>
        <div className="sub-text">
          We can&prime;t find the page that
          you&prime;re looking for :(
        </div>
        <div className="buttons-block">
          <Button onClick={buttonHandler}>
              &#8592;&nbsp;&nbsp;HOME
          </Button>
        </div>
      </div>
    </div>
  );
};

NotFound.propTypes = {
  resetNotFound: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(null, { resetNotFound })(withRouter(NotFound));
