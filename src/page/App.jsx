import BgDots from '../component/BgDots';
import { useCountDown } from '../hook/useCountDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import razerText from '/icon/razer-text.svg';
import razer from '/icon/razer.svg';

function App() {
	let { countDown: countDown_zzz } = useCountDown("2025-08-22T06:00:00");
	let { countDown: countDown_gengar } = useCountDown("2025-08-19T12:00:00");
	let lastArticles = [
		{
			img:"mouse/lefthanders-day.webp",
			title:"HAPPY LEFT HANDERS DAY",
			subtitle:"MADE FOR THE LEFT. BUILT TO FEEL RIGHT",
			btn:[{name:"Shop Now",url:""}],
			tag:""
		},{
			img:"pc/blade-14.webp",
			title:"NEW RAZER BLADE 16",
			subtitle:"SLIMMER. SMARTER. SHARPER.",
			btn:[{name:"Learn More",url:""},{name:"Buy",url:""}],
			tag:"Only at Razer"
		},{
			img:"headset/blackshark-v3-line.webp",
			title:"RAZER BLACKSHARK V3 LINE",
			subtitle:"For the Pro",
			btn:[{name:"Learn More",url:""},{name:"Buy",url:""}],
			tag:"",
			size:"col-span-2"
		},{
			img:"pc/core-x-v2.webp",
			title:"RAZER CORE X V2",
			subtitle:"MOBILITY MEETS DESKTOP PERFORMANCE",
			btn:[{name:"Learn More",url:""},{name:"Buy",url:""}],
			tag:""
		},{
			img:"mouse/deathadder-v4-pro.webp",
			title:"RAZER DEATHADDER V4 PRO",
			subtitle:"For the Pro",
			btn:[{name:"Learn More",url:""},{name:"Buy",url:""}],
			tag:""
		}
	];
	let collabArticles = [
		{img:"razer-zzz.webp", class:"col-span-2 relative", content: <>
			<h3 className='text-3xl mt-20'>RAZER | ZENLESS ZONE ZERO</h3>
			<h4 className='text-xl'>CUT THROUGH THE CHAOS</h4>
			<div className='absolute flex flex-col items-center gap-1 bg-black right-0 bottom-0 p-2 min-w-80'>
				<p>DROPPING August 22, 2025, 6AM PDT</p>
				<h3 className='text-2xl'>{countDown_zzz}</h3>
			</div>
		</>},
		{img:"headset/pikachu.webp", class:""},
		{img:"mouse/cyberpunk.jpg", class:""},
		{img:"razer-gengar.webp", class:"col-span-2 relative", content: <>
			<h3 className='text-3xl mt-20'>RAZER | GENGAR</h3>
			<h4 className='text-xl'>IT’S MISCHIEF TIME!</h4>
			<div className='absolute flex flex-col items-center gap-1 bg-black right-0 bottom-0 p-2 min-w-80'>
				<p>DROPPING August 19, 2025, 8AM PDT</p>
				<h3 className='text-2xl'>{countDown_gengar}</h3>
			</div>
		</>},
		{img:"headset/gengar.jpg", class:""},
		{img:"headset/kuromi.jpg", class:""},
		{img:"headset/hellokitty.jpg", class:""},
		{img:"keyboard/hellokitty.webp", class:""},
	];
	let cardClass = "h-100 border border-solid border-[#111] rounded-xl";

	return (
		<>
		<div className='z-4 w-full h-full relative flex flex-col items-center customScroll'>
			<header className='w-[calc(100%-2rem)] max-w-300 h-15 p-2 flex items-center justify-between border border-solid border-razer fixed top-0 z-10 bg-black/60 my-2 mx-4 backdrop-blur-sm rounded-full'>
				<img src={razerText} alt="" className='pl-4 h-5 select-none'/>
				<div className='h-full w-60 flex items-center gap-2 border border-solid border-gray-800 focus:border-gray-700 rounded-full px-3'>
					<FontAwesomeIcon icon={faSearch}/>
					<input type="search" name="search" id="searchArticle" className='h-full outline-0' />
				</div>
			</header>
			<main className='w-full max-w-400 relative h-screen px-4'>
				<section className='w-full grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-4 pt-20'>
					<article className='h-100 col-span-2 flex items-center justify-center gap-6 select-none'>
						<img src={razer} alt="" className='h-25'/>
						<div className='w-0.5 h-15 bg-razer'></div>
						<h2 className='text-3xl max-w-80'>Where the future of gaming is forged.</h2>
					</article>
					{lastArticles.map((item, index) => (
						<article key={index} className={`${cardClass} bg-[url("/img/razer/${item.img}")] bg-cover bg-center ${item.size? item.size : ""}`}>
							<div className={'z-1 relative w-full flex flex-col items-center text-gray-300 text-center p-6 pt-10 ' + (item.class ? item.class : "")}>
								{item.tag && <span className='absolute top-0 text-sm px-1 bg-razer text-black'>{item.tag}</span>}
								<h4 className='text-2xl'>{item.title}</h4>
								<h6 className='text-sm'>{item.subtitle}</h6>
								<div className='flex mt-2'>
									{item.btn.map((btn, btnIndex)=>(
										<a key={btnIndex} href={btn.url} className='text-sm py-1 px-2 cursor-pointer flex items-center hover:bg-black/50'>
											{btn.name} <FontAwesomeIcon icon={faAngleRight} className='text-razer'/>
										</a>
									))}
								</div>
							</div>
						</article>
					))}
				</section>
				{/*<h2 className='text-5xl mt-20'>RAZER BLACKSHARK V3 LINE</h2>
				<h3 className='text-2xl'>For the Pro</h3>*/}
				<h2 className='text-5xl mt-10'>Last Collabs</h2>
				<section className='w-full grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-4 py-4'>
					{collabArticles.map((item, index) => (
						<article key={index} className={`${cardClass} bg-[url(/img/razer/${item.img})] bg-cover bg-center flex flex-col items-center gap-4 overflow-hidden ${item.class}`}>
							{item.content}
						</article>
					))}
				</section>
			</main>
		</div>
		<BgDots/>
		</>
	)
}

export default App