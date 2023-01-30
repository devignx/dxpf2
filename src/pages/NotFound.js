const NotFound = () => {

    return(
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <h1 className=" text-3xl text-white text-center">NotFound :) Hit <a className="hover:text-white/50 transition-all duration-500 ease-in-out" target='_self' href="/">back</a> button</h1><br/>
            <a target='_blank' rel="noreferrer" href="https://2022.hariprasd.me/random" className="transition-all duration-500 ease-in-out text-md text-white/50 hover:text-white/70 text-center">→ interactive <strong>404</strong> experience ←</a>
        </div>
    )
}

export default NotFound;