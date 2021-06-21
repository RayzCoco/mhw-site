import meat from './img/meat1.webp'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation])

const FoodCarousel = () => {
    return (
        <div className="container mx-auto mb-10">
            <h2 className="text-green-900 text-xl md:text-4xl mb-8 px-6 md:px-0 font-bold">SEVEN WAYS TO COOK. INFINITE POSSIBILITIES.</h2>
            <Swiper navigation centeredSlides={ true } slidesPerView={1} breakpoints={{
                768: {
                    centeredSlides: false,
                    slidesPerView: 3
                }
            }}>
                <SwiperSlide>
                    <div className="relative overflow-hidden pb-125">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <img src={ meat } alt="" />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="flex justify-center items-center w-full h-full">
                                <h3 className="text-white">ROAST</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative overflow-hidden pb-125">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <img src={ meat } alt="" />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="flex justify-center items-center w-full h-full">
                                <h3 className="text-white">LOW & SLOW</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative overflow-hidden pb-125">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <img src={ meat } alt="" />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="flex justify-center items-center w-full h-full">
                                <h3 className="text-white">BAKE</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative overflow-hidden pb-125">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <img src={ meat } alt="" />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="flex justify-center items-center w-full h-full">
                                <h3 className="text-white">GRILL</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative overflow-hidden pb-125">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <img src={ meat } alt="" />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="flex justify-center items-center w-full h-full">
                                <h3 className="text-white">SMOKE</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative overflow-hidden pb-125">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <img src={ meat } alt="" />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="flex justify-center items-center w-full h-full">
                                <h3 className="text-white">PANS & PLANCHA</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative overflow-hidden pb-125">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <img src={ meat } alt="" />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="flex justify-center items-center w-full h-full">
                                <h3 className="text-white">DIRTY COOKING</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
 
export default FoodCarousel;