import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Loading from './component/Loading.jsx';
// layouts
import LandingLayout from './layout/LandingLayout.jsx';

// pages
const LandingPage = lazy(() => import('./page/LandingPage.jsx'));
const LearnMorePage = lazy(() => import('./page/LearnMorePage.jsx'));
const BuyPage = lazy(() => import('./page/BuyPage.jsx'));
import ErrorPage from './page/ErrorPage.jsx';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<StrictMode>
			<Routes>
				<Route path="/" element={<LandingLayout/>}>
					<Route path="/" element={
						<Suspense fallback={<Loading/>}>
							<LandingPage/>
						</Suspense>
					}/>
					<Route path="/buy/:articleId" element={<BuyPage/>}/>
					<Route path="/learnmore/:articleId" element={<LearnMorePage/>}/>
					<Route path='*' element={<ErrorPage/>}/>
				</Route>
			</Routes>
		</StrictMode>
	</BrowserRouter>,
)
