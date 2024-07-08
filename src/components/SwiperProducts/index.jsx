import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useContext, useState } from 'react';
import { userContext } from '../../Context';
import { FiPlus } from "react-icons/fi";

const SwiperProducts = () => {
    const { SwiperProduct } = useContext(userContext);
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseOver = (index) => {
        setHoveredCard(index);
    };

    const handleMouseOut = () => {
        setHoveredCard(null);
    };

    return (
        <div className='container'>
            <h1 className='text-3xl w-80 font-medium mb-10'>Популярные и новые товары</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    }
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    SwiperProduct?.map((item, index) => (
                        <SwiperSlide 
                            key={index} 
                            className='p-5 card' 
                            onMouseOver={() => handleMouseOver(index)} 
                            onMouseOut={handleMouseOut}
                        >
                            <div className="card_img bg-[#F2F2F2] h-[180px] py-8 px-5 rounded-3xl cursor-pointer relative">
                                <img src={item.img} alt="" className='w-full h-full' />
                                <p className={`text-sm card_price w-[60px] px-2 rounded-xl bg-[#10BB87] text-[#FFF] absolute bottom-2 left-4 ${hoveredCard === index ? 'hidden' : ''}`}>от {item.price}</p>
                            </div>
                            <div className="card_body my-2">
                                <h1 className='text-start text-md font-medium h-[50px]'>{item.title}</h1>
                                <button className='text-sm my-5 rounded-lg hover:bg-[#10BB87] hover:text-[#FFFFFF] transition swiper-button flex items-center justify-between w-[90%] py-2 px-7'>
                                    <p>{item.click}</p>
                                    <FiPlus className='mt-1' />
                                </button>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default SwiperProducts;
