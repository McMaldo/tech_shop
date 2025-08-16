import { useCountDown } from '../hook/useCountDown';

export default function CountDownBox ({time}) {
	let { countDown } = useCountDown(time.init);
	
	return (
		<div className='absolute flex flex-col items-center gap-1 bg-black right-0 bottom-0 p-2 min-w-80'>
			<p>{time.end}</p>
			<h3 className='text-2xl'>{countDown}</h3>
		</div>
	)
}