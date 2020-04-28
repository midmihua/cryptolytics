import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'semantic-ui-react';

import './CommonModal.css';


const CommonModal = props => {
  const {
    className,
    open,
    onClose,
    children,
    size,
   } = props;

   return (
    <Modal
      className={`common-modal__component${className ? ` ${className}` : ''}`}
      closeIcon={!!onClose || false}
      open={open}
      onClose={onClose}
      size={size || 'small'}
    >
      {children}
    </Modal>
   );
};

CommonModal.propTypes = {
  onClose: PropTypes.func,
  className: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]).isRequired,
  size: PropTypes.string,
};

CommonModal.defaultProps = {
  onClose: null,
  className: null,
  open: null,
  size: null,
};

export default CommonModal;
