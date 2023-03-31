import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/swiper.scss';
import avatar from '../img/avatar.png';



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <Swiper

        breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            1024: {
              width: 1024,
              slidesPerView: 2,
            }
          }}

        modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={0}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='slide'>
            <img src={avatar}/>
            <p>Прошел курс в S&K academy</p>
            <div className='slide_text'>
                <p>Виктор Иванов</p>
                <span><b>42</b> года, стал <b>Middle </b>
                разработчиком с
                зарплатой 2000$ в
                компании <b>Apple</b>
                </span>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <img src={avatar}/>
            <p>Прошел курс в S&K academy</p>
            <div className='slide_text'>
                <p>Виктор Иванов</p>
                <span><b>42</b> года, стал <b>Middle </b>
                разработчиком с
                зарплатой 2000$ в
                компании <b>Apple</b>
                </span>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <img src={avatar}/>
            <p>Прошел курс в S&K academy</p>
            <div className='slide_text'>
                <p>Виктор Иванов</p>
                <span><b>42</b> года, стал <b>Middle </b>
                разработчиком с
                зарплатой 2000$ в
                компании <b>Apple</b>
                </span>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <img src={avatar}/>
            <p>Прошел курс в S&K academy</p>
            <div className='slide_text'>
                <p>Виктор Иванов</p>
                <span><b>42</b> года, стал <b>Middle </b>
                разработчиком с
                зарплатой 2000$ в
                компании <b>Apple</b>
                </span>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <img src={avatar}/>
            <p>Прошел курс в S&K academy</p>
            <div className='slide_text'>
                <p>Виктор Иванов</p>
                <span><b>42</b> года, стал <b>Middle </b>
                разработчиком с
                зарплатой 2000$ в
                компании <b>Apple</b>
                </span>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <img src={avatar}/>
            <p>Прошел курс в S&K academy</p>
            <div className='slide_text'>
                <p>Виктор Иванов</p>
                <span><b>42</b> года, стал <b>Middle </b>
                разработчиком с
                зарплатой 2000$ в
                компании <b>Apple</b>
                </span>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <img src={avatar}/>
            <p>Прошел курс в S&K academy</p>
            <div className='slide_text'>
                <p>Виктор Иванов</p>
                <span><b>42</b> года, стал <b>Middle </b>
                разработчиком с
                зарплатой 2000$ в
                компании <b>Apple</b>
                </span>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <img src={avatar}/>
            <p>Прошел курс в S&K academy</p>
            <div className='slide_text'>
                <p>Виктор Иванов</p>
                <span><b>42</b> года, стал <b>Middle </b>
                разработчиком с
                зарплатой 2000$ в
                компании <b>Apple</b>
                </span>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <img src={avatar}/>
            <p>Прошел курс в S&K academy</p>
            <div className='slide_text'>
                <p>Виктор Иванов</p>
                <span><b>42</b> года, стал <b>Middle </b>
                разработчиком с
                зарплатой 2000$ в
                компании <b>Apple</b>
                </span>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <img src={avatar}/>
            <p>Прошел курс в S&K academy</p>
            <div className='slide_text'>
                <p>Виктор Иванов</p>
                <span><b>42</b> года, стал <b>Middle </b>
                разработчиком с
                зарплатой 2000$ в
                компании <b>Apple</b>
                </span>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='slide'>
            <img src={avatar}/>
            <p>Прошел курс в S&K academy</p>
            <div className='slide_text'>
                <p>Виктор Иванов</p>
                <span><b>42</b> года, стал <b>Middle </b>
                разработчиком с
                зарплатой 2000$ в
                компании <b>Apple</b>
                </span>
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
    );
};
