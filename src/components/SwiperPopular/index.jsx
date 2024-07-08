import { useContext } from 'react';
import { userContext } from '../../Context';
import { GoArrowRight } from "react-icons/go";

const SwiperPopular = () => {
    const { SwiperPopulars } = useContext(userContext);
   
    return (
        <div className='container'>
            <h1 className='text-3xl w-80 font-medium my-10 mb-16'>Популярные услуги</h1>
            <div className="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-4">
                {
                    SwiperPopulars?.map((item, index) => (
                        <div 
                            key={index} 
                            className='p-5 card' 
                        >
                            <div className="h-[80px] w-[50%] flex items-start">
                                <img src={item.img} alt="" className='w-full h-full' />
                            </div>
                            <div className="card_body my-2">
                              <h1 className='font-bold text-lg'>{item.name}</h1>
                                <p className='text-start text-md h-[80px] text-[#B3B3B3] py-2 max-xl:text-sm'>{item.title}</p>
                                <button className='text-sm my-5 rounded-lg transition swiper-popular flex items-center justify-between w-[90%] py-2 px-7'>
                                    <p>{item.click}</p>
                                    <GoArrowRight className='mt-1' />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SwiperPopular;
