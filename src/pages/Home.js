import avatar from '../assets/hp-ai-clr.gif'
import stik from '../assets/stik.svg'
import bg from '../assets/bg.webp'


const Home = () => {

    return(
        <div>
            <img className='fixed scale-[200%] rotate-90 md:rotate-0 md:scale-[100%] h-screen object-contain bottt w-screen m-auto bg-cover' src={bg} />

            <div className='h-screen relative'>   
                <div className='absolute flex flex-col h-full justify-center m-auto w-full -mt-16'>
                    <h1 className="text-center dmser font-bold text-[3rem] md:text-[4rem] leading-tight text-white">Hari Prasad</h1>
                    <p className='text-center rale text-sm md:text-lg text-slate-400 mt-1'>Artist • Designer • Developer</p>
                </div>
                <div className='absolute bottom-5'>
                    <img className='m-auto border-white border-4 grayscale hover:filter-none rounded-full w-[8rem] md:w-[7rem] scaleup' src={avatar} />
                    <img className='m-auto  w-screen h-12 md:h-auto ' src={stik} />
                </div>
            </div>

            <div>
                <h1 className="text-center text-white mt-[10%] dmser text-center font-bold text-[3rem] md">About</h1>
            </div>

        </div>
    )
}

export default Home;