const HeroSection = () => {
    return (<>
        <div className="hero-section flex flex-col justify-center gap-1 h-screen text-center ">
            <div className="title">
                <h1 className="text-white font-Kanit text-4xl md:text-7xl lg:text-9xl font-extrabold tracking-wider drop-shadow-xl">WATERFALL</h1>
            </div>
            <div className="tagline">
                <p className="text-white font-Kanit text-md font-extralight md:text-lg lg:text-2xl lg:font-medium  tracking-wide">Explore the beauty of nature in our waterfall</p>
            </div>
        </div>
    </>);
}

export default HeroSection;