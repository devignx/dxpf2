
const Cards = ({image, title, desc, live, repo})  => {

    return(
        <div>
            <div className='bg-white/50 hover:bg-white/80 transition-all duration-500 ease-in-out relative m-auto drop-shadow-xl cursor-pointer mb-8 rounded-xl p-8 md:p-12 hover:md:p-14 delay-500 overflow-hidden snap-start '>
                {/*<img className="absolute -bottom-4 bottt opacity-60 -right-4 w-[8rem]" src={image} />*/}
                <h2 className='text-black transition-all duration-500 ease-in-out uppercase rale block font-black text-xl'>{title}</h2>
                <p className='mt-2 w-11/12 transition-all duration-500 text-black/60 text-sm'>{desc}</p>
                <abbr title="Open the live version in a new tab"><a target='_blank' href={live} className='bg-black/80 p-8 md:p-9 pt-3 md:pt-4 pr-12 md:pr-16 absolute text-center -right-8 -bottom-6 transition-all duration-300 ease-in-out text-white  hover:bg-black rounded-full '>View ↗</a></abbr>
            </div>
        </div>
    )
}

export default Cards;

        