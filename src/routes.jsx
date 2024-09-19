import { Home } from '@/pages';
import React from 'react';
export const routes = [
  {
    name: 'home',
    path: '/home',
    element: <Home />
  },
  {
    name: 'Docs',
    href: 'https://www.material-tailwind.com/docs/react/installation',
    target: '_blank',
    element: ''
  }
];

export default routes;
