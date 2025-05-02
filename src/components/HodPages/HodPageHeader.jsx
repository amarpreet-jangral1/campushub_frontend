import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HodPageHeader({ backgroundImage , title }){
return(
    <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={false}
    pagination={{ clickable: true }}
    className="mb-5"
  >
    <SwiperSlide>
      <div
        className="position-relative d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.64)',
            zIndex: 1,
          }}
        ></div>
  
        {/* Text content */}
        <div
          className="container py-5 my-5"
          style={{ position: 'relative', zIndex: 2 }}
        >
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-10 text-center">
              <h6 className="display-6 lead text-white mb-3 animated slideInUp">
                {title}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
        </Swiper>
)
}