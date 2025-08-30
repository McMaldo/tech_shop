import razer from '/icon/razer.svg';
import { useParams } from 'react-router-dom';

export default function LearnMorePage() {
	const { articleId } = useParams();
	console.log(articleId);

	return (
		<>
		<h2 className='text-5xl pt-20'>Learn More page</h2>
		<section className='w-full grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))]'>
			<article className='aspect-2/1 col-span-2 flex items-center justify-center gap-6 select-none'>
				<img src={razer} alt="" className='h-25 drop-shadow-lg'/>
				<div className='w-0.5 h-15 bg-razer'></div>
				<h2 className='text-3xl max-w-80 text-shadow-lg'>Where the future of gaming is forged.</h2>
			</article>
		</section>
		</>
	)
}