import avatar from '../assets/hp-ai-clr.gif'
import stik from '../assets/stik.svg'
import bg from '../assets/bg.webp'
import bgmob from '../assets/bg-mob.webp'
import fram from '../assets/frame.svg'
import '../index.css'
import { motion } from 'framer-motion'
import divi from '../assets/divi.svg'


const Home = () => {

    return(

        <div className='text-white overflow-x-hidden'>
            <img className='pc absolute md:mt-0 select-none pointer-events-none h-screen object-contain bottt w-screen m-auto bg-cover' alt='' src={bg} />
            <img className='mob absolute md:mt-0 select-none pointer-events-none h-screen object-contain bottt w-screen m-auto bg-cover' alt='' src={bgmob} />

            <motion.div
                initial={{x:100, y:-100, scale:0.11}}
                whileTap={{x:0, y:0, scale:1}}
                whileHover={{x:0, y:0, scale:1}}
                transition={{ duration: 0.4, type:'spring'}}
                className='fixed toppp flex flex-col dmser tracking-wide py-12 pr-24 pl-16 mt-4 gap-6 top-8 mix-blend-difference right-0 hover:-right-2 rounded-2xl bg-white/[.08] hover:bg-white/[.03] text-slate-400 backdrop-blur-2xl drop-shadow-xl'>
                <a href='#home' className='hover:text-white transition-all duration-500 ease-in-out'><span className='text-3xl font-bold italic text-white'>H</span>ome</a>
                <a href='#about' className='hover:text-white transition-all duration-500 ease-in-out'><span className='text-3xl font-bold italic text-white'>A</span>bout</a>
                <a href='#recent' className='hover:text-white transition-all duration-500 ease-in-out'><span className='text-3xl font-bold italic text-white'>R</span>ecent</a>
                <a href='#info' className='hover:text-white transition-all duration-500 ease-in-out'><span className='text-3xl font-bold italic text-white'>I</span>nfo</a>
            </motion.div>

            <div id='home' className='h-screen relative'>   
                {/*<img className=' absolute rotate-45 w-[15rem] -top-1/5' alt='' src={fram} /> */}
                <div className='absolute flex flex-col h-full justify-center m-auto w-full -mt-16'>
                    <h1 className="text-center dmser text-[3rem] md:text-[4rem] leading-tight text-white">Hari Prasad</h1>
                    <p className='text-center rale font-light tracking-wide text-sm md:text-lg text-slate-400 mt-3'>Artist • Designer • Developer</p>
                </div>
                <div className='absolute bottom-9 md:bottom-0'>
                    <a className=' w-min' href='#about'><img className='m-auto border-white border-4 select-none grayscale hover:filter-none rounded-full w-[8rem] md:w-[7rem] scaleup' alt='' src={avatar} /></a>
                    <img className='m-auto select-none pointer-events-none w-screen h-12 md:h-auto ' alt='' src={stik} />
                </div>
            </div>


            <motion.div id='about'
            initial={{opacity:0.2}}
            whileInView={{opacity:1}}
            transition={{duration:0.4}}
            className='relative h-screen w-full mt-[10%] pt-12'>
                <h1 className="text-center text-white uppercase text-center font-bold text-2xl md">About</h1>
                <p className='font-light m-auto rale tracking-wide text-sm text-slate-400 mt-4 w-10/12 md:w-[68%] text-center'>
                    Lorem ipsum dolor sit amet, consectetur consecteturconsectetur adipiscing elit, sed do eiusmod tempor incid Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid
                </p>

                <motion.img
                initial={{y:50, opacity:0}}
                whileInView={{ y:0, opacity:0.95 }}
                transition={{duration:0.3}}
                viewport={{once:false}}
                className='w-[3rem] md:w-[10rem] opacity-[0.95] absolute bottom-0 right-0' src={divi}/>

                <motion.img
                initial={{y:50,rotateY:180, opacity:0}}
                whileInView={{ y:0, opacity:0.95 }}
                transition={{duration:0.3}}
                viewport={{once:false}}
                className='w-[3rem] md:w-[10rem] opacity-[0.95] absolute bottom-0 left-0' src={divi}/>
            </motion.div>


            <div id='recent'
            initial={{opacity:0.2}}
            whileInView={{opacity:.5}}
            transition={{duration:1}}
            className='h-screen relative w-full bg-white/[0.95] text-black pt-12'>
                <h1 className="text-center uppercase text-center font-bold text-2xl md">Recent Projects</h1>
                <p className='font-light m-auto rale tracking-wide text-sm text-slate-400 mt-4 w-10/12 md:w-[68%] text-center'>
                    Lorem ipsum dolor sit amet, consectetur consecteturconsectetur adipiscing elit, sed do eiusmod tempor incid Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid
                </p>

                <motion.img
                initial={{y:50, opacity:0}}
                whileInView={{ y:0, opacity:0.95 }}
                transition={{duration:0.3}}
                viewport={{once:false}}
                className='w-[3rem] md:w-[10rem] mix-blend-difference opacity-[0.95] absolute bottom-0 right-0' src={divi}/>

                <motion.img
                initial={{y:50,rotateY:180, opacity:0}}
                whileInView={{ y:0, opacity:0.95 }}
                transition={{duration:0.3}}
                viewport={{once:false}}
                className='w-[3rem] md:w-[10rem] mix-blend-difference opacity-[0.95] absolute bottom-0 left-0' src={divi}/>
            </div>
            

            <div id='info'
            initial={{opacity:0.2}}
            whileInView={{opacity:1}}
            transition={{duration:0.4}}
            className='h-screen w-full pt-12'>
                <h1 className="text-center text-white uppercase text-center font-bold text-2xl md">Info</h1>
                <p className='font-light m-auto rale tracking-wide text-sm text-slate-400 mt-4 w-10/12 md:w-[68%] text-center'>
                    Lorem ipsum dolor sit amet, consectetur consecteturconsectetur adipiscing elit, sed do eiusmod tempor incid Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid
                </p>
            </div>
        </div>
    )
}

export default Home;