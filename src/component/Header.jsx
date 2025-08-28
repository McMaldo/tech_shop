import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import razer from '/icon/razer.svg';

export default function Header () {
	const [btnHover, setBtnHover] = useState({left:0, w:0});
	const navRef = useRef(null);

	const btns = [
		"Store", "PC", "Console", "Mobile", "Furniture & Lifestyle", "Gold & Silver", "Community", "Support"
	];

	return (
		<header className='w-[calc(100%-2rem)] max-w-270 h-15 flex items-center justify-between border border-solid border-razer fixed top-0 z-10 bg-black/70 my-2 mx-4 backdrop-blur-sm rounded-full py-2 px-3'>
			<Link to="/" className='h-full select-none'>
				<img src={razer} alt="" className='h-full'/>
			</Link>
			<nav ref={navRef} className='group relative h-full flex items-center text-gray-300 max-lg:hidden select-none'>
				{btns.map((btn, index) => (
					<Link
						to={"/" + btn.replace(" ","").toLowerCase()}
						key={index} className='z-1 h-full flex items-center px-3 xl:px-4 cursor-pointer hover:text-razer transition-colors duration-200'
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
					</Link>
				))}
				<div className='absolute h-full w-10 group-hover:bg-[#111] rounded-sm transition-all duration-200 ease-in-out' style={{ left: btnHover.left, width: btnHover.w }}></div>
			</nav>
			<div className='h-full flex items-center text-xl text-gray-500'>
				<div className='h-full aspect-square cursor-pointer rounded-full grid place-items-center transition-colors hover:bg-[#111] hover:text-razer'><FontAwesomeIcon icon={faSearch}/></div>
				<div className='h-full aspect-square cursor-pointer rounded-full grid place-items-center transition-colors hover:bg-[#111] hover:text-razer'><FontAwesomeIcon icon={faCartShopping}/></div>
			</div>
		</header>
	)
}