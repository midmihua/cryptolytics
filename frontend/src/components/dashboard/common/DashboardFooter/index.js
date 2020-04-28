import React from 'react';

import './DashboardFooter.css';

const DashboardFooter = () => {
  const date = new Date();

  return (
    <div className="dashboard-footer__component">
      &copy; {date.getFullYear()} Cryptolytics
    </div>
  );
};

export default DashboardFooter;
