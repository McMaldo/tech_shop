import { useEffect, useState, useRef } from 'react';

const BgDots = () => {

	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isVisible, setIsVisible] = useState(false);
	const [trail, setTrail] = useState([]);
	const containerRef = useRef(null);
	useEffect(() => {
		const handleMouseMove = (e) => {
			if (!containerRef.current) return;

			const rect = containerRef.current.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			// Check if mouse is inside container
			const isInside = 
				x >= 0 && 
				x <= rect.width && 
				y >= 0 && 
				y <= rect.height;

			setIsVisible(isInside);
			if (isInside) {
				const newPosition = { x, y };
				setPosition(newPosition);
				setTrail(prevTrail => {
					const newTrail = [...prevTrail, newPosition];
					return newTrail.slice(-10); // Keep only last 10 positions
				});
			}
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);
	const mouseFollower = 'z-2 h-30 aspect-square bg-radial from-razer to-transparent absolute pointer-events-none transform-origin-center -translate-1/2 opacity-0';
	return (
		<div className="z-0 fixed top-0 left-0 w-full h-full overflow-hidden bg-radial from-40% from-gray-700 to-black">
			<div className="z-3 relative w-full h-full bg-radial from-black from-90% to-transparent bg-[size:18px_18px]"></div>
			<div ref={containerRef} className={`z-1 absolute top-0 left-0 w-full h-full`}>
			{trail.map((pos, index) => (
				<div
					key={index}
					className={mouseFollower + ' transition-transform ease-out duration-200'}
					style={{
						transform: `translate(${pos.x}px, ${pos.y}px)`,
						opacity: isVisible ? ((index + 1) / trail.length) : 0
					}}
				/>
			))}
			<div
				className={mouseFollower + isVisible ? ' opacity-100' : ''}
				style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
			/>
		</div>
		</div>
	);
};

export default BgDots;