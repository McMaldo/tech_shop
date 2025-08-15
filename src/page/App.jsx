import BgDots from '../component/BgDots';
import Header from '../component/Header';
import { useCountDown } from '../hook/useCountDown';
import razer from '/icon/razer.svg';
import Card from '../component/Card';

function App() {
	let { countDown: countDown_zzz } = useCountDown("2025-08-22T06:00:00");
	let { countDown: countDown_gengar } = useCountDown("2025-08-19T12:00:00");
	const lastArticles = [
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
	const collabArticles = [
		{
			img:"razer-zzz.webp",
			title:"RAZER | ZENLESS ZONE ZERO",
			subtitle:"CUT THROUGH THE CHAOS",
			btn:[{name:"Learn More",url:""}],
			size:"col-span-2",
			content: <>
				<div className='absolute flex flex-col items-center gap-1 bg-black right-0 bottom-0 p-2 min-w-80'>
					<p>DROPPING August 22, 2025, 6AM PDT</p>
					<h3 className='text-2xl'>{countDown_zzz}</h3>
				</div>
			</>
		},{
			img:"headset/pikachu.webp"
		},{
			img:"mouse/cyberpunk.jpg"
		},{
			img:"razer-gengar.webp",
			title:"RAZER | GENGAR",
			subtitle:"IT’S MISCHIEF TIME!",
			btn:[{name:"Learn More",url:""}],
			size:"col-span-2",
			content: <>
				<div className='absolute flex flex-col items-center gap-1 bg-black right-0 bottom-0 p-2 min-w-80'>
					<p>DROPPING August 19, 2025, 8AM PDT</p>
					<h3 className='text-2xl'>{countDown_gengar}</h3>
				</div>
			</>
		},
		{img:"headset/gengar.jpg", size:""},
		{img:"headset/kuromi.jpg", size:""},
		{img:"headset/hellokitty.jpg", size:""},
		{img:"keyboard/hellokitty.webp", size:""},
	];

	return (
		<>
		<div className='z-4 size-full relative flex flex-col items-center text-blue-100 customScroll'>
			<Header/>
			<main className='w-full max-w-400 relative h-screen px-4'>
				<section className='w-full grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-4 pt-20'>
					<article className='h-100 col-span-2 flex items-center justify-center gap-6 select-none'>
						<img src={razer} alt="" className='h-25'/>
						<div className='w-0.5 h-15 bg-razer'></div>
						<h2 className='text-3xl max-w-80'>Where the future of gaming is forged.</h2>
					</article>
					{lastArticles.map((item, index) => (
						<Card key={index} item={item}/>
					))}
				</section>
				<h2 className='text-5xl mt-10'>Last Collabs</h2>
				<section className='w-full grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-4 py-4'>
					{collabArticles.map((item, index) => (
						<Card key={index} item={item}/>
					))}
				</section>
			</main>
		</div>
		<BgDots/>
		</>
	)
}

export default App