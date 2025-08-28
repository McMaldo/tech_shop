import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import CountDownBox from './CountDownBox';

export default function Card({item}) {
	const {img, imgLight, size, tag, title, subtitle, btn, countDown, video} = item;
	const coverStyles = 'size-full absolute top-0 object-cover select-none outline-0';

	return (
		<article className={'p-2 ' + (size==2? 'col-span-2 aspect-2/1' : size==4? 'col-span-3 aspect-2/1' : 'aspect-square')}>
			<div className='relative size-full flex border border-solid border-[#111] rounded-xl overflow-hidden '>
				<div className={'z-1 size-full flex flex-col items-center text-center p-6 pt-10 ' + (imgLight? 'text-gray-950' : 'text-gray-300')}>
					{tag && <span className='absolute top-0 text-sm px-1 bg-razer text-black select-none'>{tag}</span>}
					{title && <h4 className={size==4? 'text-4xl pt-12 pb-2' : 'text-2xl'}>{title}</h4>}
					{subtitle && <h6 className={size==4? 'text-xl' : 'text-sm'}>{subtitle}</h6>}
					{btn && <div className='flex mt-2 select-none'>
						{btn.map((btn, btnIndex)=>(
							<a key={btnIndex} href={btn.url} className={'group text-sm py-1 px-2 cursor-pointer flex items-center border border-transparent transition-colors rounded-md ' + (imgLight? ' hover:bg-black/10 hover:border-[#333]' : 'hover:bg-black/50 hover:border-[#111]')}>
								{btn.name} <FontAwesomeIcon icon={faAngleRight} className={'group-hover:translate-x-1 transition-all ' + (imgLight? 'text-gray-950' : 'text-razer')}/>
							</a>
						))}
					</div>}
					{countDown && <CountDownBox time={countDown}/>}
				</div>
				{video ? 
					<video autoPlay muted playsInline loop controls='' className={coverStyles}>
						<source src={video +".webm"} type="video/webm"/>
						<source src={video +".mp4"} type="video/mp4"/>
					</video>
				:
					<img src={`/img/${img}`} alt="" className={coverStyles}/>
				}
			</div>
		</article>
	);
}