import avatar from '../assets/hp-ai-clr.mp4'
import stik from '../assets/stik.svg'
import bg from '../assets/bg.webp'
import bgmob from '../assets/bg-mob.webp'
import fram from '../assets/frame.svg'
import '../index.css'
import divi from '../assets/divi.svg'
import divid from '../assets/divi-d.svg'
import stuf from '../assets/stuf.svg'
import scroll from '../assets/scroll.svg'

import Cards from '../components/Cards'
import Social from '../components/Social'

import { motion } from 'framer-motion'


const Home = () => {
    
    
    const card = [
        {"title":"Metaswap","desc":"A Futuristic UI concept for a crypto product, that can swap crypto currency tokens for the frens", "live":"https://metaswapp.vercel.app"},
        {"title":"Vongo","desc":"Vongo.ai is a library of Audiobooks, Videos, PDFs and so many useful resources for Medical Students studying under Incus.inc organisation", "live":"https://vongo.ai"},
        {"title":"Betterfeeds","desc":"A company website for Betterfeeds to showcase & market their products in a creative way", "live":"https://betterfeeds.vercel.app"},
        {"title":"DevignX","desc":"Devignx is a group of technologists & designers building beautifully designed websites with a great UX for Everyone", "live":"https://devignx.hariprasd.me"},
        {"title":"Kalpathy Shivan Temple","desc":"The official Website of Kalpathy Shivan Temple, most beautiful Temple webite you'll ever see", "live":"https://kalpathysvsvsd.com"},
        {"title":"SAGA22","desc":"SAGA22 is the annual tech fest of Ahalia School of Engineering & Technology, this website contains every information about the event", "live":"https://saga22.vercel.app"},
        {"title":"SP•T","desc":"My academic project, that help users to create chat rooms with the help of WiFi & Hotspot. No useless logins & auths", "live":"https://spotdx.vercel.app"},
        {"title":"QuotesF5","desc":"A beginner level API project, that generates random Quotes on every refresh. ", "live":"https://quotesf5.hariprasd.me"},
        {"title":"ASET Pano","desc":"A panoramic 360 experience of My college's Front view using the Panorama Viewer script from Panellium", "live":"https://asetpano.hariprasd.me"},
    ]

    return(

        <div className='text-white overflow-x-hidden snap-mandatory snap-always snap-y'>
            <img className='pc absolute md:mt-0 select-none pointer-events-none h-screen object-contain bottt w-screen m-auto bg-cover' alt='' src={bg} />
            <img className='mob absolute md:mt-0 select-none pointer-events-none h-screen object-contain bottt w-screen m-auto bg-cover' alt='' src={bgmob} />

            <motion.div
                id='nav'
                initial={{x:100, y:-100, scale:0.11}}
                whileTap={{x:0, y:0, scale:1}}
                whileHover={{x:0, y:0, scale:1}}
                transition={{ duration: 0.4, type:'spring'}}
                exit={{duration:1.5}}
                className='pc fixed topppp flex flex-col dmser tracking-wide pb-12 pt-16 pr-24 pl-16 mt-4 gap-6 top-8 mix-blend-difference right-0 hover:-right-2 rounded-2xl bg-white/[.08] hover:bg-white/[.03] text-slate-400 backdrop-blur-2xl border-white/10 border-solid border-[0.6px] drop-shadow-xl'>
                <p className='w-[12rem] centerh -mt-12 text-[0.5rem] text-white/40 rale text-center absolute'>No way you found this <span className='text-white'>O_O</span>. Anyways. Shhhh! Don't say to anyone</p>
                <a href='#home' aria-label='Home Page' className='hover:text-white transition-all duration-500 ease-in-out'><span className='text-3xl font-bold italic text-white'>H</span>ome</a>
                <a href='#about' aria-label='About' className='hover:text-white transition-all duration-500 ease-in-out'><span className='text-3xl font-bold italic text-white'>A</span>bout</a>
                <a href='#recent'aria-label='Recent' className='hover:text-white transition-all duration-500 ease-in-out'><span className='text-3xl font-bold italic text-white'>R</span>ecent</a>
                <a href='#info' aria-label='Info' className='hover:text-white transition-all duration-500 ease-in-out'><span className='text-3xl font-bold italic text-white'>I</span>nfo</a>
                <p className='w-[12rem] centerh -mt-10 text-[0.5rem] text-white/40 rale bottom-3 centerh text-center isolate absolute'>you must be one <span className='text-white text-[.5rem]'>Keen observer ^_~</span></p>
            </motion.div>

            <div id='home' className='h-screen relative snap-start'> 
                <motion.div
                className='absolute flex flex-col h-full justify-center m-auto w-full -mt-16'>
                    <motion.div 
                    initial={{scaleY:0}}
                    animate={{scaleY:1}}
                    whileHover={{skewX:-3.4, transition:{duration:0.4}}}
                    transition={{duration:1}}
                    className='overflow-hidden p-0 '>
                        <motion.h1
                        initial={{y:30, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1.3}}
                        className="text-center dmser text-[3rem] md:text-[4rem] leading-tight text-white">Hari Prasad</motion.h1>
                    </motion.div>
                    <motion.p
                    initial={{y:10, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:0.9, delay:0.3}}
                    className='text-center rale font-light tracking-wide text-sm md:text-lg text-slate-400 mt-3'>Artist • Designer • Developer</motion.p>
                </motion.div>
                <div className='absolute bottom-9 md:bottom-0 transition-all duration-500 ease-in-out'>
                    <abbr title='AI Generated avatars of Hari Prasad'>
                        <div>
                            <video className='m-auto transition-all duration-500 ease-in-out border-white border-4 select-none grayscale hover:filter-none rounded-full w-[8rem] md:w-[7rem] scaleup' alt='' 
                            width="250" height="250" autoPlay loop playsInline muted ><source src={avatar} type="video/mp4"/>
                            </video>
                        </div>
                    </abbr>
                    <img className='m-auto select-none pointer-events-none w-screen h-12 md:h-auto  transition-all duration-500 ease-in-out' alt='' src={stik} />
                </div>
            </div>

            <motion.div id='about'
            className='relative h-screen w-full mt-[10%] pt-12 snap-start'>
                <motion.a
                href='#about' 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.7}}
                className="text-center text-white uppercase block toppp font-black text-2xl md">About</motion.a>
                <div className='text-xs p-1 px-5 bg-white/[0.05] flex justify-center items-center gap-1  text-slate-400 block m-auto w-fit mt-6 text-center align-center rounded-full'>
                    <span className='text-green-400 text-xl mb-[2px] font-black'>• </span>
                    <abbr title='Currently studying for exams' className=''>Current Status : <span className='text-white'>Exam prep 😭</span></abbr>
                </div>
                <motion.img
                initial={{scaleY:0}}
                whileInView={{scaleY:1}}
                transition={{duration:0.3}}
                className='select-none  transition-all duration-500 ease-in-out bg-repeat-x w-screen mt-6 grayscale hover:filter-none'  alt='' src={stuf} />
                <p className='mt-8 text-sm md:text-[1rem] leading-relaxed  font-thin rale text-slate-400 text-center m-auto w-10/12 md:w-1/2 '>I am interested in roles like <span className='font-medium'>Product Designer, UIUX Designer, Creative Designer, Front-End-Developer, Web designer, Graphic Designer, Visual Designer etc.</span><br/> These two documents speak a lot about my experiences & skillsets.</p>
                <div className='flex flex-col w-auto mt-12 gap-8 justify-center items-center'>
                        <a href='https://drive.google.com/file/d/1wqLiEmBD8CkBseNNqc7c00-WbuliD4-V/view' target='_blank' rel='noreferrer' className='px-8 py-4 hover:py-6 hover:px-10 transition-all duration-500 ease-in-out bg-white/90 hover:bg-white text-black rounded-full w-auto'>Resume ↗</a>
                        <a href='https://github.com/hariprasd/hariprasd/blob/main/coverletter.md' target='_blank' rel='noreferrer' className='px-8 py-4 hover:py-6 hover:px-10 transition-all duration-500 ease-in-out bg-white/90 hover:bg-white text-black rounded-full w-auto'>Coverletter ↗</a>
                </div>

                <a href='#recent'  aria-label='link to next section'><img className='m-auto absolute bottom-8 centerh h-[2rem]' alt='' src={scroll} /></a>
                
                <motion.img
                initial={{y:50, opacity:0}}
                whileInView={{ y:0, opacity:0.9 }}
                transition={{duration:0.7}}
                viewport={{once:false}}
                className='w-[3rem] md:w-[10rem] bottt opacity-[0.9] absolute bottom-0 right-0 noselect ' alt='' src={divi}/>

                <motion.img
                initial={{y:50,rotateY:180, opacity:0}}
                whileInView={{ y:0,rotateY:180, opacity:0.9 }}
                transition={{duration:0.7}}
                viewport={{once:false}}
                className='w-[3rem] md:w-[10rem] bottt opacity-[0.9] absolute bottom-0 left-0 noselect ' alt='' src={divi}/>
            </motion.div>


            <div id='recent'
            className='h-screen relative flex flex-col w-full bg-white/[0.9] text-black pt-12 snap-start'>
                <motion.a
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.7}}
                href='#recent' className="text-center text-black uppercase block font-black text-2xl my-4">Recent Projects</motion.a>
                <p className='font-light m-auto rale font-medium tracking-wide text-sm md:text-[1rem] leading-relaxed text-slate-600 mt-4 mb-12 w-10/12 md:w-[68%] text-center'>
                    The Designs I've created are used worldwide by lakhs of users. As a Front-End-Developer I have created a few websites, that showcases my skills in Design & UX
                </p>

                <div className=' w-11/12 m-auto md:w-1/2 h-full overflow-y-scroll snap-normal snap-proximity scroll-smooth snap-y'>

                    <section className='bg-transparent absolute bottom-0 px-2 md:p-4 relative m-auto h-full '>

                        <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 1}}
                        className='bg-black/90 hover:bg-black transition-all duration-500 ease-in-out relative m-auto drop-shadow-xl cursor-pointer mb-8 rounded-xl p-8 md:p-12 hover:md:p-14 delay-300 overflow-hidden snap-start '>
                            <h2 className='text-white transition-all duration-500 ease-in-out uppercase rale block font-black text-xl'>Design Projects</h2>
                            <motion.div
                                className='origin-center'
                                initial={{y:0, x:0, rotateZ:0, scale:1}}
                                animate={{y:[50,0,50], x:[20,0,20],rotateZ:[0,10,0], scale:[1, 1.5, 1]}}
                                transition={{ repeatType:"loop",ease:"easeInOut", repeat: Infinity, duration:10 }}>
                                <img className='absolute bottt origin-center rotate-[70deg] scale-[120%] -right-12'  alt='' src={fram} />
                                <img className='absolute bottt origin-center rotate-[110deg] blur-[2px] opacity-60 scale-[110%] -right-16' alt='' src={fram} />
                            </motion.div>
                            <p className='mt-2 w-11/12 transition-all duration-500 text-white/60 font-thin md:font-medium text-sm md:text-[1rem] leading-relaxed'>I have created a folder of all my designs in Google drive, It is the archive of all my creations, Click the link to open the Drive Folder</p>
                            <abbr title="Open the live version in a new tab"><a target='_blank' rel="noreferrer"  href="https://drive.google.com/drive/folders/14ikSuvyYcKh3odfntSc-SAc77GHmYFGX?usp=share_link" className='bg-white p-8 md:p-9 pt-3 md:pt-4 pr-12 md:pr-16 absolute text-center -right-8 -bottom-6 transition-all duration-300 ease-in-out text-black  hover:bg-white rounded-full '>View ↗</a></abbr>
                        </motion.div>
                        {/*<p className='text-center text-black uppercase block font-black text-xl mb-8'>Projects as a Developer ↓</p> */}

                        {
                            card.map((card, index) => {
                                return <Cards key={index} desc={card.desc} title={card.title} live={card.live} repo={card.repo}/>
                            })
                        }
                        
                        <a href='#info'  aria-label='link to next section' className=' text-black/50 hover:text-black/80 transition-all duration-500 ease-in-out flex justify-center flex-col-reverse items-center text-sm'>↓ You've Reached the End, Jump to next section ↓</a>
                        <br/>
                    </section>
                    
                </div>

                <motion.img
                initial={{y:50}}
                whileInView={{ y:0}}
                transition={{duration:0.7}}
                viewport={{once:false}}
                className='w-[3rem] toppp md:w-[10rem] z-[-110] absolute bottom-0 right-0 noselect ' alt='' src={divid}/>
                
                <motion.img
                initial={{y:50,rotateY:180}}
                whileInView={{ y:0,rotateY:180}}
                transition={{duration:0.7}}
                viewport={{once:false}}
                className='w-[3rem] md:w-[10rem] absolute bottom-0 left-0 noselect ' alt='' src={divid}/>

            </div>
            

            <div id='info'
            className='h-screen w-full bg-[#0B0D13] relative pt-12 snap-start'>
                <motion.a 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.7}}
                href='#info' className="text-center text-white uppercase block my-4 font-black text-2xl md">Info</motion.a>
                <p className='font-light m-auto rale tracking-wide text-sm md:text-[1rem] leading-relaxed text-white mt-12 w-10/12 md:w-[68%] text-center'>
                    I'd love to join or collaborate with any remote organisations that value my skills.<br/><span className='font-light'> Contact me, If you want me to</span>
                </p>
                <ul className='text-center text-slate-400 leading-loose mt-2'>
                    <li>↓</li>
                    <li>Design or redesign an App or Website</li>
                    <li>Develop a Site's frontend</li>
                    <li>Become a friend / coworker</li>
                    <li>Come to your country(Sponsorship Required)</li>
                    <li>↑</li>
                </ul>
                <div className='my-[3rem]  flex flex-col items-center w-full bottom-8 '>
                    <Social />
                    <button
                    className='px-5 py-2 transition-all duration-500 ease-in-out bg-white/10 rounded-full hover:bg-transparent '
                    onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
                    Back to top ↑
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;