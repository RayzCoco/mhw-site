import video from './videos/green-egg.webm'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const Banner = () => {
    return (
        <div className="relative">
            <div className="banner-height py-32 relative flex">
                <div className="flex w-full">
                    <div className="absolute top-0 left-0 w-full h-full gradie">
                        <div className="w-full h-full">
                            <video autoPlay muted loop className="absolute right-0 bottom-0 min-w-full min-h-full object-cover">
                                <source src={ video } type="video/webm" />
                            </video>
                        </div>
                    </div>
                    <div className="container z-10 flex justify-center mx-auto relative w-full h-full">
                        <div className="flex flex-col items-center justify-center text-center">
                            <h2 className="text-white text-6xl mb-5">FLAVOUR AWAITS.</h2>
                            <div className="mt-5">
                                <button className="yellow-btn px-6 py-4">
                                    <div className="flex items-center relative z-10">
                                        <span className="mr-4 font-bold text-sm md:text-base">WHET YOUR APPETITE</span>
                                        <PlayCircleFilledIcon />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Banner;