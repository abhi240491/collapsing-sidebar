// Export all the public routes

import Home from "pages/public/Home/Home";
import Dashboard from "pages/public/Dashboard/Dashboard";
import Analytics from "pages/public/Analytics/Analytics";

export const PublicRoutes = [
  { path: "/", exact: true, component: Home },
  { path: "/dashboard", exact: true, component: Dashboard },
  { path: "/analytics", exact: true, component: Analytics },
  //{path: "/tasks", exact:true, componenet: Tasks}
];
