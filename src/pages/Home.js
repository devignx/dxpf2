import avatar from '../assets/hp-ai-clr.gif'
import stik from '../assets/stik.svg'
import bg from '../assets/bg.webp'
import fram from '../assets/frame.svg'


const Home = () => {

    return(
        <div className='text-white'>
            <img className='fixed scale-[200%] rotate-90 md:rotate-0 md:scale-[100%] h-screen object-contain bottt w-screen m-auto bg-cover' src={bg} />

           
            <div className='h-screen relative'>   
                {/*<img className='m-auto fixed rotate-45 w-[15rem] -top-1/5' src={fram} /> */}
                <div className='absolute flex flex-col h-full justify-center m-auto w-full -mt-16'>
                    <h1 className="text-center dmser text-[3rem] md:text-[4rem] leading-tight text-white">Hari Prasad</h1>
                    <p className='text-center rale font-light tracking-wide text-sm md:text-lg text-slate-400 mt-1'>Artist • Designer • Developer</p>
                </div>
                <div className='absolute bottom-7'>
                    <img className='m-auto border-white border-4 select-none grayscale hover:filter-none rounded-full w-[8rem] md:w-[7rem] scaleup' src={avatar} />
                    <img className='m-auto  w-screen h-12 md:h-auto opacity-80' src={stik} />
                </div>
            </div>

            <div className='w-full mb-8'>
                <h1 className="text-center text-white mt-[10%] uppercase text-center font-bold text-2xl md">About</h1>
                <p className='font-light m-auto tracking-wide text-sm text-slate-400 mt-4 w-10/12 md:w-[68%] text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid
                </p>
            </div>
            

        </div>
    )
}

export default Home;