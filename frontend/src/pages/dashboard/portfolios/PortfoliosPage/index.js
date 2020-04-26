import React from 'react';

import DashboardLayout from 'components/dashboard/common/DashboardLayout';
import PortfoliosPageContent from 'components/dashboard/portfolios/PortfoliosPageContent';

const PortfoliosListPage = () => (
  <DashboardLayout
    pageTitle="Portfolios"
    activePage="portfolios"
  >
    <PortfoliosPageContent />
  </DashboardLayout>
);

export default PortfoliosListPage;
