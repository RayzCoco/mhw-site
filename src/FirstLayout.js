import banner from './img/green-egg-bottle.webp'
import imgRight from './img/green-egg-bottle-right.webp'
import video from './videos/alchemy.webm'

const FirstLayout = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 pb-px px-6 md:px-0">
            <div className="col-span-1 md:col-span-2 row-span-2 relative overflow-hidden">
                <div className="relative border-green-900 border border-opacity-20">
                    <div className="overflow-hidden pb-125">
                        <div className="flex flex-col absolute top-0 left-0 w-full h-full">
                            <div className="p-4 md:p-14 relative z-10 mx-auto max-w-2xl flex flex-col justify-center items-center text-center">
                                <h2 className="pb-2 md:pb-8 text-green-900 text-4xl md:text-6xl font-bold">THIS IS FAR MORE THAN A BBQ.</h2>
                                <p className="text-sm text-green-900 font-semibold">Not only can you grill the best steak you'll have ever tasted - but when it comes to pulled pork, pizza or paella, the EGG world is your (smoked) oyster.</p>
                            </div>
                            <div className="w-full h-full absolute top-0 left-0 z-0">
                                <img src={ banner } alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 relative overflow-hidden bg-green-700 bg-opacity-20">
                <div className="relative overflow-hidden pb-125">
                    <div className="absolute top-0 left-0 z-0">
                        <img src={ imgRight } alt="" />
                    </div>
                    <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 text-center w-full">
                        <h3 className="text-xl md:text-4xl text-green-900 mb-3 md:mb-5 px-4">What size is right for you?</h3>
                        <button className="px-4 py-3 dark-green-btn">
                            <span className="relative z-10 text-xs md:text-base text-white">VIEW EGGS</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="relative overflow-hidden pb-125">
                    <div className="absolute top-0 left-0 w-full h-full bg-before-black">
                        <video autoPlay muted loop className="absolute right-0 bottom-0 min-w-full min-h-full object-cover">
                            <source src={ video } type="video/webm" />
                        </video>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full z-10 p-9">
                        <div className="flex flex-col h-full justify-center text-center text-white">
                            <span className="text-xs md:text-sm">RICHARD TURNER, CO-FOUNDER OF MEATOPIA UK</span>
                            <h3 className="text-3xl font-bold">“THERE’S A CRAZY ALCHEMY THAT GOES ON INSIDE THE EGG. I’VE BEEN A FAN FROM DAY ONE”</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default FirstLayout;