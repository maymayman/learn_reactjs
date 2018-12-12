import React from 'react';
import Loadable from 'react-loadable';

function Loading() {
  return <div>Loading...</div>;
};

const Dashboard = Loadable({
  loader: () => import('../views/dashboard/index'),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import('../views/auth/login'),
  loading: Loading,
});

const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/login', name: 'Login', component: Login }
];

export default routes;