import React from 'react';
import '../styles/styles.scss';
import logo from '../img/logo.svg';
import kart from '../img/sakartvelo.png';
import shw from '../img/schwed.png';
import Swiper from './Swiper';

function Main() {
  return (
    <div className='main'>
      <div className='main_block'>
        <header>
          <img
            src={logo}
            alt='Логотип академии.'
          ></img>
          <div className='header_links'>
            <a href='#first-screen'>Главная</a>
            <a href='#course-block'>Про курс</a>
            <a href='#review-block'>Отзывы</a>
            <a href='#form-block'>Пробный урок</a>
            <a href='#contact-block'>Контакты</a>
            {/* <a href="https://codepen.io/tonkec//" class="ua" target="_blank" rel="noreferrer">
                            <i class="fa fa-user"></i></a> */}
          </div>
          <div class='col'>
            <div class='con'>
              <div class='bar arrow-top'></div>
              <div class='bar arrow-middle'></div>
              <div class='bar arrow-bottom'></div>
            </div>
          </div>
        </header>
        <div
          className='main_block_content'
          id='first-screen'
        >
          <h1>S&K Academy</h1>
          <p>
            Это академия которая готовит к<br></br>
            реальным задачам, которая не просто<br></br>
            даёт знания, но и рассказывает как их<br></br>
            продавать
          </p>
          <a href='#form-block'>
            Начать путь в <b>IT</b>
          </a>
        </div>
      </div>
      <div
        className='steps'
        id='course-block'
      >
        <div className='steps_content'>
          <div className='steps_content_name'>
            <p>За 14 дней с нуля до Джуна!</p>
          </div>
          <div className='steps_content_main'>
            <div className='steps_days'>
              <div className='days_1'>
                <div className='day_1'>
                  <p>День 1</p>
                </div>
                <div className='arrow'></div>
                <div className='day_2'>
                  <p>День 2</p>
                </div>
                <div className='arrow'></div>
                <div className='day_3'>
                  <p>День 3</p>
                </div>
              </div>
              <div className='arrow_3'>
                <div className='arrow'></div>
              </div>
              <div className='days_2'>
                <div className='day_4'>
                  <p>День 4</p>
                </div>
                <div className='arrow'></div>
                <div className='day_5'>
                  <p>День 5</p>
                </div>
              </div>
              <div className='arrow_5'>
                <div className='arrow'></div>
              </div>
              <div className='days_3'>
                <div className='day_6'>
                  <p>День 6</p>
                </div>
                <div className='arrow_back'></div>
                <div className='day_7'>
                  <p>День 7</p>
                </div>
                <div className='arrow_back'></div>
                <div className='day_8'>
                  <p>День 8</p>
                </div>
              </div>
              <div className='arrow_8'>
                <div className='arrow'></div>
              </div>
              <div className='days_4'>
                <div className='day_9'>
                  <p>День 9</p>
                </div>
                <div className='arrow_back'></div>
                <div className='day_10'>
                  <p>День 10</p>
                </div>
                <div className='arrow_back'></div>
                <div className='day_11'>
                  <p>День 11</p>
                </div>
              </div>
              <div className='arrow_11'>
                <div className='arrow'></div>
              </div>
              <div className='days_5'>
                <div className='day_12'>
                  <p>День 12</p>
                </div>
                <div className='arrow'></div>
                <div className='day_13'>
                  <p>День 13</p>
                </div>
                <div className='arrow'></div>
                <div className='day_14'>
                  <p>День 14</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='feedback'
        id='review-block'
      >
        <div className='feedback_content'>
          <div className='feedback_content_name'>
            <p>Отзывы</p>
          </div>
          <div className='feedback_carousel'>
            <Swiper></Swiper>
          </div>
        </div>
      </div>

      <form
        action='http://localhost:3001/clients'
        method='POST'
        className='form'
        id='form-block'
      >
        <div className='form_content'>
          <div className='form_name_parent'>
            <div className='form_content_name'>
              <p>Запись на первый день марафона</p>
              <div className='free'>
                <p>FREE</p>
              </div>
            </div>
          </div>
          <div className='form_name'>
            <label>
              <input
                type='text'
                name='client_name'
                placeholder='Ваше имя'
                required
              />
            </label>
          </div>
          <div className='form_number'>
            <label>
              <input
                type='text'
                name='phone_number'
                placeholder='Ваш телеграмм/номер телефона'
                required
              />
            </label>
          </div>
          <div className='form_skills'>
            <select
              name='expirience'
              required
            >
              <option
                selected
                value=''
                disabled
              >
                Ваш опыт
              </option>
              <option value='Обсолютно не разбираюсь в программировании'>
                Абсолютно не разбираюсь в программировании
              </option>
              <option value='Пробовал, но что то пошло не так'>Пробовал, но что то пошло не так</option>
              <option value='Знаю основы HTML и CSS'>Знаю основы HTML и CSS</option>
            </select>
          </div>

          <div className='form_promo-code form_number'>
            <label>
              <input
                type='text'
                name='promo_code'
                placeholder='Промо код'
              />
            </label>
          </div>
          <div className='form_button'>
            <button
              type='submit'
              href='#'
            >
              Начать путь в <b>&nbsp;IT</b>
            </button>
          </div>
        </div>
      </form>

      <div
        className='footer'
        id='contact-block'
      >
        <div className='footer_content'>
          <div className='phone_number'>
            <div className='first'>
              <img
                src={shw}
                alt='Швейцарский телефон'
                width='24'
                height='24'
              />
              <a href='tel:+41 79 827 21 64'>+41 79 827 21 64</a>
            </div>
            <div className='second'>
              <img
                src={kart}
                alt='Грузинский телефон'
                width='24'
                height='24'
              />
              <a href='tel:+995 599 520 870'>+995 599 520 870</a>
            </div>
          </div>
          <div className='brand'>
            <img
              src={logo}
              alt='Логотип академии.'
            />
            <a href='mailto:SandK.academy.international@gmail.com'>
              SandK.academy.international@gmail.com
            </a>
            <span>© 2023</span>
          </div>
          <div className='links'>
            <a href='https://www.linkedin.com/company/s-and-k-academy/'>
              Linkedin
            </a>
            <a href='https://t.me/lysenko_konstantin_tg'>Telegram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
