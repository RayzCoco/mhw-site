import meat from './img/meat1.webp'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation])

const FoodList = ({ foods }) => {
    return (
        <Swiper navigation centeredSlides={ true } slidesPerView={1} breakpoints={{
            768: {
                centeredSlides: false,
                slidesPerView: 3
            }
        }}>
            { foods.map((food) => (
                <SwiperSlide>
                    <a href="#">
                        <div className="card">
                            <div className="relative overflow-hidden pb-125">
                                <div className="absolute top-0 left-0 w-full h-full">
                                    <img src={ meat } alt="" />
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full">
                                    <div className="flex justify-center items-center w-full h-full">
                                        <h3 className="text-white text-4xl font-bold">{ food.title.toUpperCase() }</h3>
                                    </div>
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full bg-green-900 card-overlay">
                                    <div className="flex justify-center flex-col p-6 w-full h-full text-center text-white">
                                        <div className="mb-6 text-2xl font-bold">{ food.start.toUpperCase() }</div>
                                        <p className="mb-6 text-sm">{ food.content }</p>
                                        <button className="font-bold pb-2 border-b inline-flex self-center" href="#">SHOP ACCESSORIES</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
            )) }
        </Swiper>
    );
}
 
export default FoodList;