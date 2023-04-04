import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import avatar from '../img/avatar.png';
import avatar1 from '../img/avatar-1.png';
import avatar2 from '../img/avatar-2.png';
import avatar3 from '../img/avatar-3.png';
import avatar4 from '../img/avatar-4.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Swiper
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={25}
    >
      <SwiperSlide>
        <div className='slide'>
          <img
            src={avatar1}
            alt='Аватар ученика.'
          />
          <p>Прошел курс в S&K academy</p>
          <div className='slide_text'>
            <p>Георний</p>
            <span>
              <b>22 года</b>, через месяц после курса нашёл позицию Junior с
              зарплатой в 600$
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide'>
          <img
            src={avatar2}
            alt='Аватар ученика.'
          />
          <p>Прошел курс в S&K academy</p>
          <div className='slide_text'>
            <p>Суворов Андрей</p>
            <span>
              <b>27 лет</b>, был копирайтером и решил сменить профессию, сейчас
              работает в WEB студии
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide'>
          <img
            src={avatar}
            alt='Аватар ученика.'
          />
          <p>Прошел курс в S&K academy</p>
          <div className='slide_text'>
            <p>Смолова Елена</p>
            <span>
              <b>21 год</b>, до нашего марафона проходила 2 других, и была
              приятно пораженна количеством практики на нашем
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide'>
          <img
            src={avatar3}
            alt='Аватар ученика.'
          />
          <p>Прошел курс в S&K academy</p>
          <div className='slide_text'>
            <p>Иван</p>
            <span>
              <b>21 год</b>, работает WEB дизайнером, на курс пришёл, чтобы
              лучше понять сторону разработки дизайнов, которые он делает
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide'>
          <img
            src={avatar4}
            alt='Аватар ученика.'
          />
          <p>Прошел курс в S&K academy</p>
          <div className='slide_text'>
            <p>Козак Инна</p>
            <span>
              <b>28 лет</b>, была работником кол центра, пришла к нам, чтобы
              поменять профессию
            </span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
