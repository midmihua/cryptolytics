const BASE = '/api';

module.exports.AUTH = {
  ROUTES: {
    SIGNUP: `${BASE}/signup`,
    LOGIN: `${BASE}/login`,
    ME: `${BASE}/me`,
  }
};

module.exports.GENERIC = {
  ROUTES: {
    EXCHANGE: `${BASE}/exchanges`,
    PORTFOLIO: `${BASE}/portfolios`,
  }
};
