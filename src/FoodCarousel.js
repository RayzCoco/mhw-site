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
                    <a href="#">
                        <div className="card">
                            <div className="relative overflow-hidden pb-125">
                                <div className="absolute top-0 left-0 w-full h-full">
                                    <img src={ meat } alt="" />
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full">
                                    <div className="flex justify-center items-center w-full h-full">
                                        <h3 className="text-white text-4xl font-bold">ROAST</h3>
                                    </div>
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full bg-green-900 card-overlay">
                                    <div className="flex justify-center flex-col p-6 w-full h-full text-center text-white">
                                        <div className="mb-6 text-2xl font-bold">SUNDAY LUNCH, ALFRESCO</div>
                                        <p className="mb-6 text-sm">Convection cooking, with charcoal. As heat is deflected around your EGG you can roast at a stable, even temperature. Think roast chicken or pork belly; crisp skin, crackling and deliciously moist meat. Perfect for vegetables and whole fish too.</p>
                                        <button className="font-bold pb-2 border-b inline-flex self-center" href="#">SHOP ACCESSORIES</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative overflow-hidden pb-125">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <img src={ meat } alt="" />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="flex justify-center items-center w-full h-full">
                                <h3 className="text-white text-4xl font-bold">LOW & SLOW</h3>
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
                                <h3 className="text-white text-4xl font-bold">BAKE</h3>
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
                                <h3 className="text-white text-4xl font-bold">GRILL</h3>
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
                                <h3 className="text-white text-4xl font-bold">SMOKE</h3>
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
                                <h3 className="text-white text-4xl font-bold">PANS & PLANCHA</h3>
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
                                <h3 className="text-white text-4xl font-bold">DIRTY COOKING</h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
 
export default FoodCarousel;