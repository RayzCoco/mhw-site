import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation])

const Chefs = ({ chefs }) => {
    return (
        <Swiper navigation slidesPerView={1} breakpoints={{
            768: {
                slidesPerView: 3,
                enabled: false
            }
        }}>
            { chefs.map((chef) => (
                <SwiperSlide>
                    <div className="card">
                        <div className="relative overflow-hidden pb-125">
                            <div className="absolute top-0 left-0 w-full h-full">
                                <div className="h-full">
                                    <img src={ chef.img } alt="" />
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full">
                                <div className="w-full h-full flex justify-center items-end p-9">
                                    <div className="text-center text-white">
                                        <div>{ chef.title.toUpperCase() }</div>
                                        <h3>{ chef.name.toUpperCase() }</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full bg-green-900 card-overlay">
                                <div className="flex justify-center flex-col p-6 w-full h-full text-center text-white">
                                    <div className="mb-6 text-2xl font-bold">{ chef.chefTitle.toUpperCase() }</div>
                                    <p className="mb-6 text-sm">
                                        { chef.content }
                                    </p>
                                    <button className="px-4 py-2 text-black yellow-btn rounded-full font-bold self-center">
                                        <span className="relative text-xs z-10">GET STARTED</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )) }
        </Swiper>
    );
}
 
export default Chefs;