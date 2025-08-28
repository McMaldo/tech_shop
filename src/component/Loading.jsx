import razer from '/icon/razer-text.svg';

const Loading = () => {
	return(
		<div className="relative size-full flex items-center justify-center p-2">
			<img src={razer} alt="" className='absolute size-22'/>
			<svg viewBox="0 0 80 80" className="loading size-35 rounded-full">
				<defs>
					<linearGradient id="razer-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
						<stop offset="0%" stopColor="#0000" />
						<stop offset="50%" stopColor="#00ff00" />
						<stop offset="100%" stopColor="#0000" />
					</linearGradient>
				</defs>
				<circle
					r="32" cx="40" cy="40"
					pathLength="100"
					stroke="url(#razer-gradient)"
					className="size-full"
				/>
			</svg>
		</div>
	)
}
export default Loading;