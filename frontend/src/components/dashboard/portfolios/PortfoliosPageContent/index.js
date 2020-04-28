import React, { useState } from 'react';

import ActionBar from 'components/elements/actions/ActionBar';
import ActionBarItem from 'components/elements/actions/ActionBarItem';
import PortfolioList from 'components/dashboard/portfolios/PortfolioList';
import AddPortfolioModal
  from 'components/dashboard/portfolios/AddPortfolioModal';

import './PortfoliosPageContent.css';


const PortfoliosPageContent = () => {
  const [addPortfolioModalOpen, setAddPortfolioModalOpen] = useState(false);

  return (
    <div className="portfolios-page-content__component">

      {/* Actions */}
      <ActionBar>
        <ActionBarItem
          type="add"
          onClick={() => setAddPortfolioModalOpen(true)}
        />
      </ActionBar>

      {/* Portfolio List */}
      <PortfolioList />

      {/* Add Portfolio Modal */}
      <AddPortfolioModal
        open={addPortfolioModalOpen}
        onClose={() => setAddPortfolioModalOpen(false)}
      >
        Add Form
      </AddPortfolioModal>
    </div>
  );
};

export default PortfoliosPageContent;
