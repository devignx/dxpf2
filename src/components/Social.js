import ins from '../assets/social/insta.svg'
import fb from '../assets/social/fb.svg'
import gh from '../assets/social/github.svg'
import lnkd from '../assets/social/linkedin.svg'
import beh from '../assets/social/behance.svg'
import twt from '../assets/social/twitter.svg'
import mail from '../assets/social/mail.svg'

const Social = () => {
    return (
        <div className='mt-[5rem]'>
        <div className='flex flex-col gap-5 py-10 mt-3 items-center justify-center '>
            <div className='flex flex-row gap-4'>
                <a target="_blank" rel="noreferrer" href='https://instagram.com/haripras.d'><img className='w-[2rem] scaleup' src={ins} alt='social'></img></a>
                <a target="_blank" rel="noreferrer" href='https://facebook.com/hriprasd'><img className='w-[2rem] scaleup' src={fb} alt='social'></img></a>
                <a target="_blank" rel="noreferrer" href='https://github.com/hariprasd'><img className='w-[2rem] scaleup' src={gh} alt='social'></img></a>
                <a target="_blank" rel="noreferrer" href='https://linkedin.com/in/hariprasd'><img className='w-[2rem] scaleup' src={lnkd} alt='social'></img></a>
                <a target="_blank" rel="noreferrer" href='https://behance.net/hariprasd'><img className='w-[2rem] scaleup' src={beh} alt='social'></img></a>
                <a target="_blank" rel="noreferrer" href='https://twitter.com/haripras_d'><img className='w-[2rem] scaleup' src={twt} alt='social'></img></a>
                <a target="_blank" rel="noreferrer" href='mailto:harimohan0502@gmail.com'><img className='w-[2rem] scaleup' src={mail} alt='social'></img></a>
            </div>
            <p className='text-slate-300 mt-2 text-center w-10/12 text-xs font-thin'>Check out the 2022 version of my Portfolio <a className='text-white underline' target="_blank" rel="noreferrer" href='https://2022.hariprasd.me'>2022↗</a></p>
        </div>
        </div>
    )
}

export default Social;