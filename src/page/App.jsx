import headsetHeading from '/img/razer/headset/razer-blackshark-v3-line-homepage-large-2x.webp';
import BgDots from '../component/BgDots';
import razer from '/icon/razer.svg';
import razerText from '/icon/razer-text-1.svg';
// import redragon from '/icon/redragon.png';
// import logitech from '/icon/logitech.svg';
import razerZZZ from '/img/razer/razer-zzz.webp';
import { useCountDown } from '../hook/useCountdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  let { countDown } = useCountDown("2025-08-22T06:00:00");

  return (
    <>
    <div className='z-4 w-full h-full relative flex flex-col items-center customScroll'>
      <header className='w-[calc(100%-2rem)] max-w-300 h-15 p-2 flex items-center justify-between border border-solid border-razer fixed top-0 z-10 bg-black/50 my-2 mx-4 backdrop-blur-sm rounded-lg'>
        <h1 className='text-2xl font-bold pl-2'>Tech Shop</h1>
        <nav className='h-full flex items-center gap-2 select-none'>
          <img src={razerText} alt="" className='h-5 cursor-pointer'/>
          {/* <img src={redragon} alt="" className='h-full rounded-sm cursor-pointer'/>
          <img src={logitech} alt="" className='h-full rounded-sm cursor-pointer p-1'/> */}
        </nav>
        <div className='h-full w-60 flex items-center gap-2 border border-solid border-gray-800 focus:border-gray-700 rounded-md px-3'>
          <FontAwesomeIcon icon={faSearch}/>
          <input type="search" name="search" id="searchArticle" className='h-full outline-0' />
        </div>
      </header>
      <main className='w-full relative h-screen select-none'>
        <section  className='w-full h-full bg-hex relative flex items-center justify-center gap-6'>
          <img src={razer} alt="" className='relative h-25'/>
          <div className='w-0.5 h-15 bg-razer'></div>
          <h2 className='text-3xl max-w-80'>Where the future of gaming is forged.</h2>
        </section>
        <section className={`relative w-full h-full p-6 flex flex-col items-center gap-4 bg-[url('${razerZZZ}')] bg-cover bg-center bg-no-repeat`}>
          <h2 className='text-5xl mt-20'>RAZER | ZENLESS ZONE ZERO</h2>
          <h3>CUT THROUGH THE CHAOS</h3>
          <div className='absolute flex flex-col items-center gap-1 bg-black right-6 bottom-6 p-4 rounded-lg min-w-85'>
            <p>DROPPING August 22, 2025, 6AM PDT</p>
            <h3>{countDown}</h3>
          </div>
        </section>
        <section className={`w-full h-full p-6 flex flex-col items-center gap-10 bg-[url('${headsetHeading}')] bg-cover bg-center bg-no-repeat`}>
          <h2 className='text-5xl mt-20'>RAZER BLACKSHARK V3 LINE</h2>
          <h3>Fot the Pro</h3>
        </section>
      </main>
    </div>
    <BgDots/>
    </>
  )
}

export default App