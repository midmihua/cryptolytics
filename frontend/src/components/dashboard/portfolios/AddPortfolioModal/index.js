import React from 'react';
import PropTypes from 'prop-types';

import CommonModal from 'components/common/CommonModal';
import AddPortfolioForm
  from 'components/dashboard/portfolios/AddPortfolioForm';


const AddPortfolioModal = ({ open, onClose }) => (
  <CommonModal
    open={open}
    onClose={onClose}
  >
    <AddPortfolioForm onClose={onClose} />
  </CommonModal>
);

AddPortfolioModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

AddPortfolioModal.defaultProps = {
  open: null,
};

export default AddPortfolioModal;
