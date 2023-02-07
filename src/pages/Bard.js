import bg from '../assets/bard/bg.webp'
import brd from '../assets/bard/brd.webp'
import gl from '../assets/bard/gl.webp'
import mic from '../assets/bard/mic.webp'

import { useState } from 'react';


const NotFound = () => {
    const [popup,setPop] = useState(false);
    
    const handleClickOpen = () => {
        setPop(!popup);
    }
    const closePopup = () => {
        setPop(!popup);
    }

    return(
        <div className="h-screen w-screen flex flex-col justify-between bg-white relative">
            <img className=' w-screen' src={bg} />
            <div className='absolute top-16 m-auto w-full'> 
                <img className='m-auto h-[3rem] md:h-[4rem]' src={brd} />
            </div>
            <div className='w-full'>
                <div onClick={handleClickOpen}  className='text-center cursor-pointer w-full scale-[66%] transition-all duration-500 ease-in-out py-6 border-solid  m-auto  rounded-2xl'>
                    <p className='font-bold text-xl text-blue-500'>HINT</p>      
                    <br/>
                    <h1 className='text-black/50'>Try Asking</h1>
                    <p className='font-semibold mt-1 underline shrink-0'>What will be a better society feels like?</p>
                </div>
                <br/>
                <br/>
                <div className='relative flex items-center mb-12'>
                    <img onClick={handleClickOpen} className='topppp absolute right-[10%] md:right-[28%] w-[3rem] m-auto' src={mic} />
                    <input onClick={handleClickOpen} type="text" className='rounded-full p-6 bg-white border-solid border-2 border-black/10 drop-shadow-xl m-auto w-[85%] md:w-[40rem] ' placeholder='Ask your questions'></input>
                </div>
            </div>
            <div  onClick={closePopup} className='fixed topppp'>
                { popup?
                    <div className="fixed justify-center items-center text-xs centerh md:text-lg bottom-5 flex flex-row-reverse md:flex-row gap-4 w-10/12 md:w-auto md:right-12 border-[3px] toppp drop-shadow-lg shad border-red-400 bg-white rounded-xl p-5">
                        <button onClick={closePopup} className="p-3 py-2 md:py-1 rounded-full bg-red-400 text-white">x</button>
                        <p>Going Live Sooner than you anticipate 😉</p>
                    </div>
                :""}
            </div>
            
        </div>
    )
}

export default NotFound;