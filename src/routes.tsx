import DevelopmentPage from "./pages/DevelopmentPage";
import HomePage from "./pages/HomePage";
// import MentoringPage from "./pages/MentoringPage";
// import PortfolioPage from "./pages/PortfolioPage";

export const routes = [
  { path: '/', label: 'navigation.about', element: <HomePage /> },
  // { path: '/mentoring', label: 'navigation.mentoring', element: <MentoringPage /> },
  { path: '/development', label: 'navigation.development', element: <DevelopmentPage /> },
  // { path: '/portfolio', label: 'navigation.portfolio', element: <PortfolioPage /> },
];
