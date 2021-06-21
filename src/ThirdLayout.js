import bbq from './img/bbq.webp'
import food from './img/food.webp'
import tray from './img/tray.webp'
import chicken from './img/chicken.webp'

const ThirdLayout = () => {
    return (
        <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 mb-10 px-6 md:px-0">
                <div className="col-span-1 md:col-span-2 row-span-2 relative">
                    <div className="relative overflow-hidden pb-125">
                        <div className="absolute top-0 left-0 w-full-h-full">
                            <img src={ bbq } alt="" />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="flex flex-col justify-between items-center text-white h-full">
                                <div className="p-6 md:p-9 text-sm md:text-base">Big Green Egg customers know what they like — and time and time again they've said they like these products the most. Take a look!</div>
                                <h3 className="text-3xl font-bold text-center absolute md:relative top-0 left-0 flex justify-center items-center p-6 md:p-0 w-full h-full">LATEST & GREATEST</h3>
                                <div className="spacer pb-62-5 w-full hidden md:block"></div>
                            </div>
                        </div>
                    </div>
                    <div className="md:absolute md:bottom-0 md:left-0 md:w-1/2">
                        <div className="relative bg-white">
                            <div className="overflow-hidden relative pb-125">
                                <div className="hidden md:block absolute top-0 right-0 z-10">
                                    <div className="flex p-6">
                                        <span className="bg-green-900 text-white px-2 py-0.5 rounded mr-4">EXCLUSIVE</span>
                                        <span className="bg-green-900 text-white px-2 py-0.5 rounded">EXPERIENCE BOX</span>
                                    </div>
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full">
                                    <div>
                                        <img src={ food } alt="" />
                                    </div>
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full border md:border-none border-green-800 border-opacity-20">
                                    <div className="flex flex-col w-full h-full p-9 justify-end">
                                        <h3 className="text-green-900 font-bold">TOM KERRIDGE BARBECUE FEAST BOX</h3>
                                        <div className="text-green-900">$180</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 relative">
                    <div className="relative overflow-hidden pb-125">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <img src={ tray } alt="" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-full border md:border-none border-green-800 border-opacity-20">
                            <div className="flex flex-col w-full h-full p-9 justify-end">
                                <h3 className="text-green-900 font-bold">EGGSPANDER STARTER KIT</h3>
                                <div className="text-green-900">FROM $289</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="relative overflow-hidden pb-125">
                        <div className="absolute top-0 right-0 z-10">
                            <div className="flex p-4 md:p-6">
                                <span className="bg-white bg-opacity-30 text-white text-xs md:text-sm px-2 py-0.5 rounded mr-4">ROASTING</span>
                                <span className="bg-white bg-opacity-30 text-white text-xs md:text-sm px-2 py-0.5 rounded mr-4">SUNDAY</span>
                                <span className="bg-white bg-opacity-30 text-white text-xs md:text-sm px-2 py-0.5 rounded">FAMILY</span>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <img src={ chicken } alt="" />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="flex flex-col justify-end p-9 w-full h-full text-center text-white font-bold">
                                <div className="text-sm">RECIPE</div>
                                <h3 className="text-xl">ULTIMATE ROAST CHICKEN</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <a href="#" className="inline-block bg-green-800 bg-opacity-10 text-green-900 text-xs md:text-base rounded-full px-6 py-4 font-bold">SEE ALL COLLECTIONS</a>
            </div>
        </div>
    );
}
 
export default ThirdLayout;