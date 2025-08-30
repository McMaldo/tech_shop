import razer from '/icon/razer.svg';
import Card from '../component/Card';
import { useArticles } from '../context/ArticlesContext';

export default function LandingPage() {
	const {articles} = useArticles();

	return (
		<>
		<section className='w-full grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] pt-20'>
			<article className='aspect-2/1 col-span-2 flex items-center justify-center gap-6 select-none'>
				<img src={razer} alt="" className='h-25 drop-shadow-lg'/>
				<div className='w-0.5 h-15 bg-razer'></div>
				<h2 className='text-3xl max-w-80 text-shadow-lg'>Where the future of gaming is forged.</h2>
			</article>
			{articles.last.map((item, index) => (
				<Card key={index} item={item}/>
			))}
		</section>
		<h2 className='text-5xl mt-10'>Last Collabs</h2>
		<section className='w-full grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] py-4'>
			{articles.collab.map((item, index) => (
				<Card key={index} item={item}/>
			))}
		</section>
		</>
	)
}