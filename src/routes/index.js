import React from "react";
import About from "../pages/about";
import People from "../pages/people";
import Research from "../pages/research";
import Publication from "../pages/publication";
import JoinUs from "../pages/joinUs";
import Crab from "../pages/research/Crab";
import Magpie from "../pages/research/Magpie";

const routes = [
  {
    name: 'about',
    displayName: 'About',
    path: '/',
    component: <About />
  },
  {
    name: 'people',
    displayName: 'People',
    path: '/people',
    component: <People />
  },
  {
    name: 'research',
    displayName: 'Research',
    path: '/research',
    component: <Research />
  },
  {
    name: 'research/crab',
    displayName: 'Research-Fidder Crab',
    path: '/research/crab',
    component: <Crab />
  },
  {
    name: 'research/magpie',
    displayName: 'Research-Taiwan Blue Magpie',
    path: '/research/magpie',
    component: <Magpie />
  },
  {
    name: 'publication',
    displayName: 'Publication',
    path: '/',
    component: <Publication />
  },
  {
    name: 'join-us',
    displayName: 'Join Us',
    path: '/',
    component: <JoinUs />
  },
];

export default routes;