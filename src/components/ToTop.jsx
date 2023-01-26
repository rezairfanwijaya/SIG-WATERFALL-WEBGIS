const ToTop = () => {
    return (<>
        <div className="to-top fixed z-50 bottom-9 right-7 hover:bg-[#054C41] bg-[#2a9e8d] rounded-full w-8 h-8 flex justify-center items-center" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            <a href="#">
                <div className="icon text-lg text-white">
                    <ion-icon name="chevron-up-outline"></ion-icon>
                </div>
            </a>
        </div>
    </>);
}

export default ToTop;