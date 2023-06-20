import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="mt-8 mb-12  "
    >
      <SwiperSlide>
        <div className="flex space-x-4  ml-4">
          <div className="bg-white rounded-lg  shadow-lg p-6">
            <img src="/2.png" alt="Article Image" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl text-black font-semibold mb-2">Article Title</h3>
            <p className="text-gray-600">Short description of the article...</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="/2.png" alt="Article Image" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl text-black font-semibold mb-2">Article Title</h3>
            <p className="text-gray-600">Short description of the article...</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="/2.png" alt="Article Image" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl text-black font-semibold mb-2">Article Title</h3>
            <p className="text-gray-600">Short description of the article...</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="/2.png" alt="Article Image" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl text-black font-semibold mb-2">Article Title</h3>
            <p className="text-gray-600">Short description of the article...</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex space-x-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="/2.png" alt="Article Image" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Article Title</h3>
            <p className="text-gray-600">Short description of the article...</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="/2.png" alt="Article Image" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Article Title</h3>
            <p className="text-gray-600">Short description of the article...</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="/2.png" alt="Article Image" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Article Title</h3>
            <p className="text-gray-600">Short description of the article...</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="/2.png" alt="Article Image" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Article Title</h3>
            <p className="text-gray-600">Short description of the article...</p>
          </div>
        </div>
      </SwiperSlide>
      {/* Add more SwiperSlide components for additional articles */}
    </Swiper>
  );
};

export default Slider;
