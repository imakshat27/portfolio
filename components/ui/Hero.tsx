function Hero() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 gap-8">
        <div className='flex flex-col text-center lg:text-left'>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-100">Akshat<br/>Agarwal</h1>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-200 mt-4">Web Developer</p>
        <div className="flex justify-center lg:justify-center gap-6 mt-6">
        <a href="https://github.com/imakshat27"><img src="/github.png" alt="Github" className="w-10 h-10 sm:w-10 sm:h-10" /></a>
        <a href="https://linkedin.com/in/imakshat27"><img src="/linkedin.png" alt="LinkedIn" className="w-10 h-10 sm:w-10 sm:h-10" /></a>
        <a href="https://x.com/imakshat_27"><img src="/twitter.png" alt="Twitter" className="w-10 h-10 sm:w-10 sm:h-10" /></a>
        </div>
      </div>
      <img src="/carricature.png" alt="Profile Picture" className="w-48 sm:w-64 md:w-70 lg:w-70 h-auto rounded-full" />
      </div>
    );
}

export default Hero;