import razer from '/icon/razer.svg';

export default function BuyPage() {
    return (
        <>
        <h2 className='text-5xl mt-10'>Buy Page</h2>
        <section className='w-full grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] pt-20'>
            <article className='aspect-2/1 col-span-2 flex items-center justify-center gap-6 select-none'>
                <img src={razer} alt="" className='h-25 drop-shadow-lg'/>
                <div className='w-0.5 h-15 bg-razer'></div>
                <h2 className='text-3xl max-w-80 text-shadow-lg'>Where the future of gaming is forged.</h2>
            </article>
        </section>
        </>
    )
}