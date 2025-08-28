import razer from '/icon/razer.svg';
import Card from '../component/Card';
import Loading from '../component/Loading';

export default function LandingPage() {
	const lastArticles = [
		{
			img:"headset/kraken-kitty-line-2025.webp",
			title:"RAZER KRAKEN KITTY V3 LINE",
			subtitle:"THE MEOW FACTOR",
			btn:[{name:"Learn More",url:""},{name:"Buy",url:""}]
		},{
			img:"furniture/gaming-chairs-iskur-v2.webp",
			title:"RAZER ISKUR V2",
			subtitle:"LIMITED-TIME SPECIAL + BONUS PLUSHIE",
			btn:[{name:"Learn More",url:""},{name:"Buy",url:""}],
			tag:"Only at Razer"
		},{
			img:"pc/blade-16.webp",
			title:"NEW RAZER BLADE 16",
			subtitle:"SLIMMER. SMARTER. SHARPER.",
			btn:[{name:"Learn More",url:""},{name:"Buy",url:""}],
			tag:"Only at Razer",
			size:2
		},{
			img:"keyboard/blackwidow-v4-lowprofile.webp",
			title:"RAZER BLACKWIDOW V4",
			subtitle:"LOW-PROFILE HYPERSPEED LINE",
			btn:[{name:"Learn More",url:""},{name:"Buy",url:""}],
			size:2
		},{
			img:"mouse/deathadder-v4-pro.webp",
			title:"RAZER DEATHADDER V4 PRO",
			subtitle:"For the Pro",
			btn:[{name:"Learn More",url:""},{name:"Buy",url:""}]
		},{
			img:"pc/blade-14.webp",
			title:"NEW RAZER BLADE 14",
			subtitle:"OUR SLIMMEST LAPTOPS. OUR BIGGEST DEALS",
			btn:[{name:"Learn More",url:""},{name:"Buy",url:""}],
			tag:"Only at Razer",
		},{
			img:"headset/blackshark-v3-line.webp",
			title:"RAZER BLACKSHARK V3 LINE",
			subtitle:"For the Pro",
			btn:[{name:"Learn More",url:""},{name:"Buy",url:""}],
			size:2
		},{
			img:"console/wolverine-v3-line-b.webp",
			title:"RAZER WOLVERINE V3 8K PC LINE",
			subtitle:"For the Pro",
			btn:[{name:"Learn More",url:""},{name:"Buy",url:""}]
		},{
			img:"mouse/lefthanders-day.webp",
			title:"HAPPY LEFT HANDERS DAY",
			subtitle:"MADE FOR THE LEFT. BUILT TO FEEL RIGHT",
			btn:[{name:"Shop Now",url:""}]
		},{
			img:"pc/core-x-v2.webp",
			title:"RAZER CORE X V2",
			subtitle:"MOBILITY MEETS DESKTOP PERFORMANCE",
			btn:[{name:"Learn More",url:""},{name:"Buy",url:""}]
		}
	];
	const collabArticles = [
		{
			img:"headset/gengar.webp",
			title:"RAZER | GENGAR",
			subtitle:"IT’S MISCHIEF TIME!",
			btn:[{name:"Learn More",url:""},{name:"Buy",url:""}],
			size:4
		},{
			img:"collab/zzz.webp",
			title:"RAZER | ZENLESS ZONE ZERO",
			subtitle:"CUT THROUGH THE CHAOS",
			btn:[{name:"Learn More",url:""},{name:"Buy",url:""}],
			size:2
		},{
			img:"headset/pikachu.webp"
		},{
			img:"mouse/cyberpunk.jpg",
			imgLight: true,
			title:"RAZER VIPER ULTIMATE",
			subtitle:"CYBERPUNK 2077 EDITION",
			btn:[{name:"Learn More",url:""}]
		},{
			img:"collab/marvel-rivals-s3.webp",
			imgLight: true,
			title:"MARVEL RIVALS SEASON 3",
			subtitle:"ENTER A MULTIVERSE OF IMMERSION",
			btn:[{name:"Learn More",url:""}],
			size:2
		},{
			img:"collab/borderlands-4.webp",
			title:"RAMPAGE-WORTHY DEALS AWAIT",
			subtitle:"GET BORDERLANDS 4 WITH SELECT RAZER BLADES",
			btn:[{name:"Learn More",url:""}],
			size:2
		},
		{img:"headset/kuromi.jpg"},
		{img:"headset/hellokitty.jpg"},
		{img:"keyboard/hellokitty.webp"},
	];

	return (
		<>
		<section className='w-full grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] pt-20'>
			<article className='aspect-2/1 col-span-2 flex items-center justify-center gap-6 select-none'>
				<img src={razer} alt="" className='h-25 drop-shadow-lg'/>
				<div className='w-0.5 h-15 bg-razer'></div>
				<h2 className='text-3xl max-w-80 text-shadow-lg'>Where the future of gaming is forged.</h2>
			</article>
			{lastArticles.map((item, index) => (
				<Card key={index} item={item}/>
			))}
		</section>
		<h2 className='text-5xl mt-10'>Last Collabs</h2>
		<section className='w-full grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] py-4'>
			{collabArticles.map((item, index) => (
				<Card key={index} item={item}/>
			))}
		</section>
		</>
	)
}