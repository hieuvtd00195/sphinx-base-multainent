const Endpoints = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    refreshToken: '/auth/refreshToken',
  },
  user: {
    profile: '/user',
  },
  country: {
    search: '/country/list',
  },
} as const;

export default Endpoints;
