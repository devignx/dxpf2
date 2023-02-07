import bg from '../assets/bard/bg.webp'
import brd from '../assets/bard/brd.webp'
import gl from '../assets/bard/gl.webp'
import mic from '../assets/bard/mic.webp'


const NotFound = () => {

    return(
        <div className="h-screen w-screen flex flex-col justify-between bg-white relative">
            <img className=' w-screen' src={bg} />
            <div className='absolute top-12 m-auto w-full'> 
                <img className='m-auto h-[2.5rem] md:h-[4rem]' src={gl} />
                <img className='m-auto h-[2.5rem] md:h-[4rem]' src={brd} />
            </div>
            <div className='text-center '>      
                <h1 className='text-black/50'>Try Asking</h1>
                <p className='font-semibold'>What will be a better society feels like?</p>
            </div>
            <div className='relative flex items-center mb-12'>
                <img className='topppp absolute right-[10%] md:right-[28%] w-[3rem] m-auto' src={mic} />
                <input type="text" className='rounded-full p-6 bg-whiteborder-solid border-2 border-black/10 drop-shadow-xl m-auto w-[85%] md:w-[40rem] ' placeholder='Ask your questions'></input>
            </div>
        </div>
    )
}

export default NotFound;