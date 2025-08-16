import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import CountDownBox from './CountDownBox';

export default function Card({item}) {
	const {img, size, tag, title, subtitle, btn, content, countDown} = item;

	return (
		<article className={'relative flex h-100 xl:h-110 border border-solid border-[#111] rounded-xl overflow-hidden '+(size && size)}>
			<div className='z-1 size-full flex flex-col items-center text-gray-300 text-center p-6 pt-10'>
				{tag && <span className='absolute top-0 text-sm px-1 bg-razer text-black'>{tag}</span>}
				{title && <h4 className='text-2xl'>{title}</h4>}
				{subtitle && <h6 className='text-sm'>{subtitle}</h6>}
				{btn && <div className='flex mt-2'>
					{btn.map((btn, btnIndex)=>(
						<a key={btnIndex} href={btn.url} className='group text-sm py-1 px-2 cursor-pointer flex items-center hover:bg-black/50 border border-transparent hover:border-[#111] transition-colors rounded-md'>
							{btn.name} <FontAwesomeIcon icon={faAngleRight} className='text-razer group-hover:translate-x-1 transition-all'/>
						</a>
					))}
				</div>}
				{countDown && <CountDownBox time={countDown}/>}
			</div>
			<img src={`/img/${img}`} alt="" className='size-full absolute top-0 object-cover'/>
		</article>
	);
}