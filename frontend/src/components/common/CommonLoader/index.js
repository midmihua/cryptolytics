import React from 'react';
import PropTypes from 'prop-types';

import { Dimmer, Loader } from 'semantic-ui-react';

import './CommonLoader.css';

const CommonLoader = ({ active }) => (
  <Dimmer
    className="common-loader__component"
    active={!!active}
    inverted
    page
  >
    <Loader size='huge'>Loading</Loader>
  </Dimmer>
);

CommonLoader.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default CommonLoader;
