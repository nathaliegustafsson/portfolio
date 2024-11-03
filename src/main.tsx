import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import './index.css';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CvPage from './pages/CvPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectPage from './pages/ProjectPage';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route index element={<HomePage />} />
			<Route path="about" element={<AboutPage />} />
			<Route path="portfolio" element={<PortfolioPage />} />
			<Route path="portfolio/:projectId" element={<ProjectPage />} />
			<Route path="cv" element={<CvPage />} />
			<Route path="contact" element={<ContactPage />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
