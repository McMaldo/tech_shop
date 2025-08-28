import BgDots from '../component/BgDots';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';

export default function LandingLayout() {
	return (
		<>
		<div className='z-4 size-full relative flex flex-col items-center text-blue-100'>
			<Header/>
			<main className='w-full max-w-400 min-h-screen px-4 grid grid-cols-1'>
				<Outlet/>
			</main>
			<Footer/>
		</div>
		<BgDots/>
		</>
	)
}