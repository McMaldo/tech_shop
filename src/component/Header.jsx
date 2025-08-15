import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import razerText from '/icon/razer-text.svg';

export default function Header () {
	const [btnHover, setBtnHover] = useState({left:0, w:0});
	const navRef = useRef(null);

	const btns = [
		"Store", "PC", "Console", "Mobile", "Furniture & Lifestyle", "Gold & Silver", "Community", "Support"
	];

	return (
		<header className='w-[calc(100%-2rem)] max-w-300 h-15 flex items-center justify-between border border-solid border-razer fixed top-0 z-10 bg-black/70 my-2 mx-4 backdrop-blur-sm rounded-full p-2'>
			<img src={razerText} alt="" className='pl-4 h-5 select-none'/>
			<nav ref={navRef} className='group relative h-full flex items-center text-gray-400 max-lg:hidden'>
				{btns.map((btn, index) => (
					<button
						key={index} className='z-1 h-full px-3 cursor-pointer hover:text-gray-200 transition-colors'
						onClick={() => document.getElementById(btn).scrollIntoView({behavior: 'smooth'})}
						onMouseEnter={e => {
							const navLeft = navRef.current.getBoundingClientRect().left;
							const btn = e.target.getBoundingClientRect();
							setBtnHover({
								left: btn.left-navLeft,
								w: btn.width
							});
						}}
					>
						{btn}
					</button>
				))}
				<div className='absolute h-full w-10 group-hover:bg-[#111] rounded-sm transition-all duration-200 ease-in-out' style={{ left: btnHover.left, width: btnHover.w }}></div>
			</nav>
			<div className='h-full w-60 flex items-center gap-2 border border-solid border-[#222] rounded-full px-3'>
				<FontAwesomeIcon icon={faSearch}/>
				<input type="search" name="search" id="searchArticle" className='h-full outline-0' />
			</div>
		</header>
	)
}