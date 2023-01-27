
const Cards = ({image, title, desc, live, repo})  => {

    return(
        <div>
            <div className='bg-white/50 relative m-auto drop-shadow-xl mb-8 rounded-xl p-8 md:p-12  overflow-hidden'>
                {/*<img className="absolute -bottom-4 bottt opacity-60 -right-4 w-[8rem]" src={image} />*/}
                <h2 className='text-black uppercase rale block font-black text-xl md'>{title}</h2>
                <p className='mt-4 text-black/60 text-sm'>{desc}</p>
                <a target='_blank' href={live} className='bg-black/80 p-10 md:p-12 pt-4 md:pt-8 pl-6 md:pl-8 pr-16 absolute text-center -right-8 -bottom-8 transition-all duration-300 ease-in-out text-white  hover:bg-black rounded-full '>View ↗</a>
            </div>
        </div>
    )
}

export default Cards;

        