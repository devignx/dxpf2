import avatar from '../assets/hp-ai-clr.gif'
import stik from '../assets/stik.svg'
import bg from '../assets/bg.webp'
import fram from '../assets/frame.svg'
import '../index.css'


const Home = () => {

    return(

        <div className='text-white overflow-x-hidden'>
            <img className='absolute -mt-16 md:mt-0 select-none pointer-events-none h-screen object-contain bottt w-screen m-auto bg-cover' alt='' src={bg} />

            <div id='hero' className='h-screen relative'>   
                {/*<img className=' absolute rotate-45 w-[15rem] -top-1/5' alt='' src={fram} /> */}
                <div className='absolute flex flex-col h-full justify-center m-auto w-full -mt-16'>
                    <h1 className="text-center dmser text-[3rem] md:text-[4rem] leading-tight text-white">Hari Prasad</h1>
                    <p className='text-center rale font-light tracking-wide text-sm md:text-lg text-slate-400 mt-3'>Artist • Designer • Developer</p>
                </div>
                <div className='absolute bottom-7'>
                    <a href='#about'><img className='m-auto border-white border-4 select-none grayscale hover:filter-none rounded-full w-[8rem] md:w-[7rem] scaleup' alt='' src={avatar} /></a>
                    <img className='m-auto  w-screen h-12 md:h-auto opacity-80' alt='' src={stik} />
                </div>
            </div>

            <div id='about' className='h-screen w-full mt-[10%] pt-12 '>
                <h1 className="text-center text-white uppercase text-center font-bold text-2xl md">About</h1>
                <p className='font-light m-auto rale tracking-wide text-sm text-slate-400 mt-4 w-10/12 md:w-[68%] text-center'>
                    Lorem ipsum dolor sit amet, consectetur consecteturconsectetur adipiscing elit, sed do eiusmod tempor incid Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid
                </p>
            </div>
        </div>
    )
}

export default Home;