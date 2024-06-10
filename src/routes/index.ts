// src/index.ts
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

interface RouteConfig {
  path: string;
  component: React.ComponentType;
}

const routes: RouteConfig[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
];

export default routes;
