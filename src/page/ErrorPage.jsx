import { Link } from 'react-router-dom';

export default function ErrorPage() {
	return (
		<div className="min-h-screen size-full flex items-center justify-center text-center">
			<div className="flex flex-col text-2xl text-gray-300">
				<span>Error <span className="text-razer">404</span></span>
				<span>URL no Encontrada</span>
				<Link to="/" className='text-xl bg-razer text-black p-1 mt-2 transition-all duration-200 select-none'>
					Volver al Inicio
				</Link>
			</div>
		</div>
	)
}