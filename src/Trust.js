import chef1 from './img/chef1.webp'
import chef2 from './img/chef2.webp'
import chef3 from './img/chef3.webp'

import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation])

const Trust = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-green-900 mb-6 px-6 md:px-0 text-xl md:text-4xl font-bold">TRUSTED BY THOSE IN THE KNOW</h2>
            <Swiper navigation slidesPerView={1} breakpoints={{
                768: {
                    slidesPerView: 3,
                    enabled: false
                }
            }}>
                <SwiperSlide>
                    <div className="card">
                        <div className="relative overflow-hidden pb-125">
                            <div className="absolute top-0 left-0 w-full h-full">
                                <div className="h-full">
                                    <img src={ chef1 } alt="" />
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full">
                                <div className="w-full h-full flex justify-center items-end p-9">
                                    <div className="text-center text-white">
                                        <div>THE TWO-MICHELIN STARRED CHEF</div>
                                        <h3>TOM KERRIDGE</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full bg-green-900 card-overlay">
                                <div className="flex justify-center flex-col p-6 w-full h-full text-center text-white">
                                    <div className="mb-6 text-2xl font-bold">THE CHEF</div>
                                    <p className="mb-6 text-sm">Tom Kerridge worked as a chef in restaurants across Britain before deciding to open The Hand & Flowers with his wife in 2005. It went on to become the first (and only) pub in the world to acquire two Michelin stars.
                                    "Cooking on the Big Green Egg is an all-round experience: the warmth of the green dome, the aroma
                                    and crackle of the charcoal, the charring or gently smoking food inside. There’s nothing else quite like it.
                                    </p>
                                    <button className="px-4 py-2 text-black yellow-btn rounded-full font-bold self-center">
                                        <span className="relative text-xs z-10">GET STARTED</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative overflow-hidden pb-125">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="h-full">
                                <img src={ chef2 } alt="" />
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="w-full h-full flex justify-center items-end p-9">
                                <div className="text-center text-white">
                                    <div>THE AWARD WINNING BUTCHER</div>
                                    <h3>RICHARD TURNER</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative overflow-hidden pb-125">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="h-full">
                                <img src={ chef3 } alt="" />
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="w-full h-full flex justify-center items-end p-9">
                                <div className="text-center text-white">
                                    <div>THE PUBLISHED AUTHOR & PRODUCER</div>
                                    <h3>JAMES WHETLOR</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
 
export default Trust;