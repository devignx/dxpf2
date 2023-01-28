import { motion } from 'framer-motion'

const Cards = ({title, desc, live})  => {

    return(
        <div>
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1}}
            className='bg-white/50 hover:bg-white/80 transition-all duration-500 ease-in-out relative m-auto drop-shadow-xl cursor-pointer mb-8 rounded-xl p-8 md:p-12 hover:md:p-14 delay-500 overflow-hidden snap-start '>
                <h2 className='text-black uppercase rale block font-black text-xl'>{title}</h2>
                <p className='mt-2 w-11/12 text-black/60 text-sm'>{desc}</p>
                <abbr title="Click to Open the live version in a new tab"><a target='_blank' rel="noreferrer"  href={live} className='bg-black/80 p-8 md:p-9 pt-3 md:pt-4 pr-12 md:pr-16 absolute text-center -right-8 -bottom-6 transition-all duration-300 ease-in-out text-white  hover:bg-black rounded-full '>View ↗</a></abbr>
            </motion.div>
        </div>
    )
}

export default Cards;

        