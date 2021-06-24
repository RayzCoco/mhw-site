import restaurant from './img/restaurant-quality.webp'
import bag from './img/bag.webp'
import fire from './img/fire.webp'
import video from './roast-chicken.webm'

const SecondLayout = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 px-6 md:px-0 mb-20">
            <div className="col-span-1 md:col-span-2 row-span-1">
                <div className="relative">
                    <div className="overflow-hidden relative pb-125 md:pb-62-5">
                        <div className="absolute top-0 left-0 flex w-full h-full">
                            <img src={ restaurant } alt="" />
                        </div>
                        <div className="absolute top-0 left-0 flex w-full h-full">
                            <div className="ml-auto md:max-w-1/2 p-6 md:p-0 flex justify-center items-start flex-col w-full h-full">
                                <h4 className="text-white font-bold mb-4">Achieve restaurant quality food at home</h4>
                                <div className="text-white text-left text-sm md:text-base mb-4">An EGG is your secret weapon, your passport to culinary triumph. Let it do the hard work whilst you lap up all the praise.</div>
                                <a className="text-green-900 font-bold text-x px-4 py-3 inline-block green-btn" href="#">
                                    <span className="relative z-10">SHOP ACCESSORIES</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block col-span-1 row-span-1">
                <div className="relative overflow-hidden pb-125"></div>
            </div>
            <div className="col-span-1 row-span-2">
                <div className="overflow-hidden relative pb-125">
                    <div className="absolute top-0 left-0 h-full w-full bg-green-900"></div>
                    <div className="absolute top-0 left-0 h-full w-full">
                        <div className="flex justify-center text-white w-full h-full flex-col p-9 text-center">
                            <div className="mb-4 text-xs md:text-sm">Daniel Clifford, Chef of Midsummer House</div>
                            <h3 className="text-3xl font-bold">"I HAVE NEVER COME ACROSS A BARBECUE THAT OFFERS SUCH VERSATILITY AND CONTROL"</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 row-span-2 hover-picture relative">
                <a href="#">
                    <div className="relative overflow-hidden pb-125">
                        <div className="absolute top-0 left-0 z-10 w-full">
                            <div className="flex justify-between p-6">
                                <div>
                                    <div className="bag-size">For L, XL, MM</div>
                                </div>
                                <div>
                                    <span className="bg-green-900 text-white text-xs md:text-sm px-2 py-0.5 rounded">BESTSELLER</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="first-img">
                                <img src={ bag } alt="" />
                            </div>
                            <div className="second-img">
                                <img src={ fire } alt="" />
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full z-10">
                            <div className="p-6 flex flex-col justify-items-start justify-end w-full h-full">
                                <div className="max-w-2/3 md:max-w-1/2 item-desc">
                                    <h3 className="font-bold">Premium 100% Natural Oak & Hickory Lump Charcoal</h3>
                                    <div><p>$25</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button-area">
                        <div className="btn-bg">
                            <button className="text-black px-6 py-2 yellow-btn font-bold">
                                <span className="relative z-10">Add</span>
                            </button>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-span-1 row-span-2">
                <div className="relative overflow-hidden pb-125">
                    <div className="absolute top-0 left-0 w-full h-full bg-before-black">
                        <video autoPlay muted loop className="absolute right-0 bottom-0 min-w-full min-h-full object-cover">
                            <source src={ video } type="video/webm" />
                        </video>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full z-10 p-9">
                        <div className="flex flex-col h-full justify-center text-center text-white">
                            <span className="text-xs md:text-sm">A NEW WAY TO COOK</span>
                            <h3 className="text-3xl font-bold">THE ORIGINAL. THE BEST.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SecondLayout;