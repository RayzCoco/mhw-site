import banner from './img/green-egg-bottle.webp'
import imgRight from './img/green-egg-bottle-right.webp'

const FirstLayout = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 pb-px px-6 md:px-0">
            <div className="col-span-1 md:col-span-2 row-span-2 relative overflow-hidden">
                <div className="relative border-green-900 border border-opacity-20">
                    <div className="overflow-hidden pb-125">
                        <div className="flex flex-col absolute top-0 left-0 w-full h-full">
                            <div className="p-14 relative z-10 mx-auto max-w-lg flex flex-col justify-center items-center text-center">
                                <h2 className="pb-8 text-green-900 text-6xl font-bold">THIS IS FAR MORE THAN A BBQ.</h2>
                                <p>Not only can you grill the best steak you'll have ever tasted - but wwhen it comes to pulled pork, pizza or paella, the EGG world is your (smoked) oyster.</p>
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
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-center">
                        <h3 className="text-4xl text-green-900 mb-5">What size is right for you?</h3>
                        <button className="bg-green-900 text-white">
                            <span>VIEW EGGS</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-span-1 relative overflow-hidden">
                <div className="relative overflow-hidden pb-125">
                    <div className="absolute top-0 left-0 z-0">
                        <img src={ imgRight } alt="" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-center">
                        <h3 className="text-4xl text-green-900 mb-5">What size is right for you?</h3>
                        <button className="bg-green-900 text-white">
                            <span>VIEW EGGS</span>
                        </button>
                    </div>
                </div>
            </div>    
        </div>
    );
}
 
export default FirstLayout;