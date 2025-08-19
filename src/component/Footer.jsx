import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsNc, faCreativeCommonsSa, faDev, faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import razerText from '/icon/razer-text.svg';

export default function Footer() {

	const accounts = [
		{name: "Github", icon:faGithub, link:"https://github.com/McMaldo"},
		{name: "Gitlab", icon:faGitlab, link:"https://gitlab.com/maldonado.ignacio.pablo"},
		{name: "LinkedIn", icon:faLinkedin, link:"https://www.linkedin.com/in/pablo-ignacio-maldonado"},
		{name: "DevTo", icon:faDev, link:"https://dev.to/mcmaldo"}
	];
	const credits = [
		{url:"https://www.1001freefonts.com/es/prototype.font",name:"Prototype (body font)"},
		{url:"https://www.1001freefonts.com/es/orbitron.font",name:"Orbitron (heading font)"},
		{url:"https://usehooks.com/",name:"useHooks (React library)"},
		{url:"https://fontawesome.com/",name:"FontAwesome (icons)"}
	]
	const license = [
		faCreativeCommons,
		faCreativeCommonsBy,
		faCreativeCommonsNc,
		faCreativeCommonsSa
	];

	return(
		<footer className='relative flex flex-col items-center justify-center w-full bg-black px-8 overflow-hidden'>
			<section className='w-full p-2 flex items-center justify-between'>
				<img src={razerText} alt="" className='pl-4 h-5 select-none'/>
				<h2 className='text-razer text-2xl'>For Gamers by Gamers</h2>
			</section>
			<hr className='w-full h-[1px] text-razer'/>
			<section className='w-full p-2 text-[#888] grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] grid-rows-1 max-w-400'>
				<div className='flex flex-col'>
					<h3 className='text-gray-100'>Author</h3>
					<p>@McMaldo</p>
					<div className='flex gap-1'>
						{accounts.map((a, index) => (
							<a href={a.link} key={index} className='text-3xl' title={a.name}>
								<FontAwesomeIcon icon={a.icon}/>
							</a>
						))}
					</div>
				</div>
				<div className='flex flex-col'>
					<h3 className='text-gray-100'>Credits</h3>
					{credits.map((link, index)=>(
						<a href={link.url} key={index} className='w-fit hover:text-gray-400'>{link.name}</a>
					))}
				</div>
				<div className='flex flex-col'>
					<h3 className='text-gray-100'>Tech Stack</h3>
					<p>React.JS</p>
					<p>Tailwind CSS</p>
					<p>Vercel</p>
				</div>
			</section>
			<hr className='w-full h-[1px] text-razer'/>
			<section className='w-full p-2 flex justify-between'>
				<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" className="flex gap-1 relative">
					{license.map((icon, index) => (
						<FontAwesomeIcon icon={icon} key={index} className={'z-2 text-2xl pb-2 ' + (index==0 && 'aspect-square rounded-full bg-black text-4xl shadow-[0_0_0_2px_black]')}/>
					))}
					<div className='text-black flex items-end justify-end px-2 w-[calc(100%+1rem)] h-5 absolute -left-2 -bottom-2 bg-razer rounded-t-lg'>
						License
					</div>
				</a>
				<div className="flex h-fit">
					<span className='pr-2 border-r border-r-solid border-r-[#888]'>Arg.</span>
					<span className='pl-2'>Bs. As.</span>
				</div>
			</section>
		</footer>
	);
}