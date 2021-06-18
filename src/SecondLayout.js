import restaurant from './img/restaurant-quality.webp'
import bag from './img/bag.webp'
import fire from './img/fire.webp'
import video from './iceborne.webm'

const SecondLayout = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 px-6 md:px-0">
            <div className="col-span-1 md:col-span-2 row-span-1">
                <div className="relative">
                    <div className="overflow-hidden relative pb-62-5">
                        <div className="absolute top-0 left-0 flex w-full h-full">
                            <img src={ restaurant } alt="" />
                        </div>
                        <div className="absolute top-0 left-0 flex w-full h-full">
                            <div className="ml-auto max-w-1/2 flex justify-center items-start flex-col w-full h-full">
                                <h4 className="text-white">Achieve restaurant quality food at home</h4>
                                <div className="text-white text-left">An EGG is your secret weapon, your passport to culinary triumph. Let it do the hard work whilst you lap up all the praise.</div>
                                <a className="text-green-900 bg-green-100 px-4 py-3 inline-block" href="#">
                                    SHOP ACCESSORIES
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
                        <div className="flex justify-center text-white w-full h-full flex-col p-9">
                            <div className="mb-4">Daniel Clifford, Chef of Midsummer House</div>
                            <h3>"I HAVE NEVER COME ACROSS A BARBECUE THAT OFFERS SUCH VERSATILITY AND CONTROL"</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 row-span-2">
                <div className="relative overflow-hidden pb-125">
                    <div className="absolute top-0 right-0 z-10">
                        <div className="p-6">
                            <span className="bg-green-900 text-white px-2 py-0.5 rounded">BESTSELLER</span>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0">
                        <div>
                            <img src={ bag } alt="" />
                        </div>
                        <div className="w-full h-full opacity-0 invisible">
                            <img src={ fire } alt="" />
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full z-10">
                        <div className="p-6 flex flex-col justify-items-start justify-end w-full h-full">
                            <div className="max-w-1/2 text-left">
                                <h3 className="text-green-900">Premium 100% Natural Oak & Hickory Lump Charcoal</h3>
                                <div><p className="text-green-900">$25</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 row-span-2">
                <div className="relative overflow-hidden pb-125">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <video autoPlay muted loop className="absolute right-0 bottom-0 min-w-full min-h-full object-cover">
                            <source src={ video } type="video/webm" />
                        </video>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full z-10 p-9">
                        <div className="flex flex-col h-full justify-center text-white">
                            <span>A NEW WAY TO COOK</span>
                            <h3>THE ORIGINAL. THE BEST.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SecondLayout;