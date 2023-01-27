import avatar from '../assets/hp-ai-clr.gif'
import stik from '../assets/stik.svg'
import bg from '../assets/bg.webp'
import bgmob from '../assets/bg-mob.webp'
import fram from '../assets/frame.svg'
import '../index.css'
import { motion } from 'framer-motion'
import divi from '../assets/divi.svg'
import divid from '../assets/divi-d.svg'

import Cards from '../components/Cards'


const Home = () => {

    const card = [
        {"title":"Metaswap","desc":"A Futuristic UI concept for a crypto product, that can swap crypto tokens for you.", "live":"https://metaswapp.vercel.app"},
        {"title":"Vongo","desc":"Vongo.ai is a library of Audiobooks, Videos, PDFs and so many useful resources for Medical Students studying under Incus.inc organisation", "live":"https://vongo.ai"},
        {"title":"Betterfeeds","desc":"A company website for Betterfeeds to showcase & market their products in a creative way", "live":"https://betterfeeds.vercel.app"},
        {"title":"DevignX","desc":"Devignx is a group of technologists & designers building beautifully designed websites with a great UX for Everyone", "live":"https://devignx.hariprasd.me"},
        {"title":"Kalpathy Shivan Temple","desc":"The official Website of Kalpathy Shivan Temple, most beautiful Temple webite you'll ever see", "live":"https://kalpathysvsvsd.com"},
        {"title":"SAGA22","desc":"SAGA22 is the annual tech fest of Ahalia School of Engineering & Technology, this website contains every information about the event", "live":"https://saga22.vercel.app"},
        {"title":"SPOT","desc":"Spot is a software project that allows users to form a group chat with the help of their mobile hotspot & wifi", "live":"https://devignx.hariprasd.me"},
    ]

    return(

        <div className='text-white overflow-x-hidden'>
            <img className='pc absolute md:mt-0 select-none pointer-events-none h-screen object-contain bottt w-screen m-auto bg-cover' alt='' src={bg} />
            <img className='mob absolute md:mt-0 select-none pointer-events-none h-screen object-contain bottt w-screen m-auto bg-cover' alt='' src={bgmob} />

            <motion.div
                id='nav'
                initial={{x:100, y:-100, scale:0.11}}
                whileTap={{x:0, y:0, scale:1}}
                whileHover={{x:0, y:0, scale:1}}
                transition={{ duration: 0.4, type:'spring'}}
                exit={{duration:1.5}}
                className='pc fixed toppp flex flex-col dmser tracking-wide py-12 pr-24 pl-16 mt-4 gap-6 top-8 mix-blend-difference right-0 hover:-right-2 rounded-2xl bg-white/[.08] hover:bg-white/[.03] text-slate-400 backdrop-blur-2xl border-white/10 border-solid border-[0.6px] drop-shadow-xl'>
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
                    <abbr title='AI Generated avatars of Hari Prasad'><a className=' w-min' href='#about'><img className='m-auto border-white border-4 select-none grayscale hover:filter-none rounded-full w-[8rem] md:w-[7rem] scaleup' alt='' src={avatar} /></a></abbr>
                    <img className='m-auto select-none pointer-events-none w-screen h-12 md:h-auto ' alt='' src={stik} />
                </div>
            </div>

            <motion.div id='about'
            initial={{opacity:0.2}}
            whileInView={{opacity:1}}
            transition={{duration:0.7}}
            className='relative h-screen w-full mt-[10%] pt-12'>
                <a href='#about' className="text-center text-white uppercase block font-black text-2xl md">About</a>
                <p className='font-light m-auto rale tracking-wide text-sm text-slate-400 mt-4 w-10/12 md:w-[68%] text-center'>
                    The Designs I've created are used worldwide by lakhs of users. As a developer I have create a few websites 
                </p>

                <motion.img
                initial={{y:50, opacity:0}}
                whileInView={{ y:0, opacity:0.9 }}
                transition={{duration:0.7}}
                viewport={{once:false}}
                className='w-[3rem] md:w-[10rem] opacity-[0.9] absolute bottom-0 right-0' src={divi}/>

                <motion.img
                initial={{y:50,rotateY:180, opacity:0}}
                whileInView={{ y:0, opacity:0.9 }}
                transition={{duration:0.7}}
                viewport={{once:false}}
                className='w-[3rem] md:w-[10rem] opacity-[0.9] absolute bottom-0 left-0' src={divi}/>
            </motion.div>


            <motion.div id='recent'
            initial={{opacity:0.2}}
            whileInView={{opacity:1}}
            transition={{duration:0.7}}
            className='h-screen relative w-full bg-white/[0.9] text-black pt-12'>
                <a href='#recent' className="text-center text-black uppercase block font-black text-2xl my-4">Recent Projects</a>
                <p className='font-light m-auto rale font-medium tracking-wide text-sm text-slate-600 mt-4 w-10/12 md:w-[68%] text-center'>
                    The Designs I've created are used worldwide by lakhs of users. As a Front-End-Developer I have created a few websites, that showcases my skills in Design & UX
                </p>

                <section className='overflow-y-scroll bg-transparent mt- md:mt-12 px-2 md:p-4 h-[60%] md:h-2/3 w-11/12 md:w-1/2 m-auto centerh absolute bottom-0 snap-proximity snap-y'>
                    <div className='bg-black/90 hover:bg-black transition-all duration-500 ease-in-out relative m-auto drop-shadow-xl cursor-pointer mb-8 rounded-xl p-8 md:p-12 hover:md:p-14 overflow-hidden snap-start '>
                        <h2 className='text-white transition-all duration-500 ease-in-out uppercase rale block font-black text-xl'>Design Projects</h2>
                        <img className='absolute bottt rotate-[70deg] scale-[120%] -right-12' src={fram} />
                        <img className='absolute bottt rotate-[110deg] opacity-30 scale-[110%] -right-12' src={fram} />
                        <p className='mt-2 w-11/12 transition-all duration-500 text-white/60 font-thin md:font-medium text-sm'>I have created a folder of all my designs in Google drive, It is the archive of all my creations, Click the link to open the Drive Folder</p>
                        <abbr title="Open the live version in a new tab"><a target='_blank' href="https://drive.google.com/drive/folders/14ikSuvyYcKh3odfntSc-SAc77GHmYFGX?usp=share_link" className='bg-white p-8 md:p-9 pt-3 md:pt-4 pr-12 md:pr-16 absolute text-center -right-8 -bottom-6 transition-all duration-300 ease-in-out text-black  hover:bg-white rounded-full '>View ↗</a></abbr>
                    </div>
                        {
                            card.map((card, index) => {
                                return <Cards key={index} desc={card.desc} title={card.title} live={card.live} repo={card.repo}/>
                            })
                        }
                </section>

                <motion.img
                initial={{y:50}}
                whileInView={{ y:0}}
                transition={{duration:0.7}}
                viewport={{once:false}}
                className='w-[3rem] md:w-[10rem]  absolute bottom-0 right-0' src={divid}/>

                <motion.img
                initial={{y:50,rotateY:180}}
                whileInView={{ y:0,rotateY:180}}
                transition={{duration:0.7}}
                viewport={{once:false}}
                className='w-[3rem] md:w-[10rem]  absolute bottom-0 left-0' src={divid}/>
            </motion.div>
            

            <motion.div id='info'
            initial={{opacity:0.2}}
            whileInView={{opacity:1}}
            transition={{duration:0.7}}
            className='h-screen w-full pt-12'>
                <a href='#info' className="text-center text-white uppercase block my-4 font-black text-2xl md">Info</a>
                <p className='font-light m-auto rale tracking-wide text-sm text-slate-400 mt-4 w-10/12 md:w-[68%] text-center'>
                    Lorem ipsum dolor sit amet, consectetur consecteturconsectetur adipiscing elit, sed do eiusmod tempor incid Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid
                </p>
            </motion.div>
        </div>
    )
}

export default Home;