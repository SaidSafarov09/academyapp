
import React, {useState} from 'react';
import '../styles/styles.scss';
import logo from '../img/logo.svg';
import kart from '../img/sakartvelo.png';
import shw from '../img/schwed.png';
import Swiper from './Swiper';
import ModalWindow from './ModalWindow';
import Modal from '@material-ui/core/Modal';

function Main() {

    const [opensubmit, setOpenSubmit] = React.useState(false);
  
    const handleCloseSubmit = () => {
        setOpenSubmit(false);
    };
    
    const handleOpenSubmit = () => {
        setOpenSubmit(true);
    };

  return (
    <div className='main'>
      <div className='main_block'>
        <header>
          <img className='header__logo'
            src={logo}
            alt='Логотип академии.'
          ></img>
          <div className='header_links'>
            <a href='#first-screen'>Главная</a>
            <a href='#course-block'>Про курс</a>
            <a href='#review-block'>Отзывы</a>
            <a href='#form-block'>Пробный урок</a>
            <a href='#contact-block'>Контакты</a>
          </div>
          <div className='mobile-menu'>
            <a href='#first-screen'>Главная</a>
            <a href='#course-block'>Про курс</a>
            <a href='#review-block'>Отзывы</a>
            <a href='#form-block'>Пробный урок</a>
            <a href='#contact-block'>Контакты</a>

            <div className='phone_number'>
              <div className='first'>
                <a href='tel:+41 79 827 21 64'>+41 79 827 21 64</a>
              </div>
              <div className='second'>
                <a href='tel:+995 599 520 870'>+995 599 520 870</a>
              </div>
          </div>
          <div className='links'>
            <a href='https://www.linkedin.com/company/s-and-k-academy/'>
              Linkedin
            </a>
            <a href='https://t.me/lysenko_konstantin_tg'>Telegram</a>
          </div>
          </div>
          <div class='col' onClick={() => {
            const menu = document.querySelector('.mobile-menu');
            menu.classList.toggle('mobile-menu--hidden')
          }}>
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
          <h1 className='main-title'>S&K Academy</h1>
          <p className='first-screen__text'>
            Это академия которая готовит к<br></br>
            реальным задачам, которая не просто<br></br>
            даёт знания, но и рассказывает как их<br></br>
            продавать
          </p>
          <a className='first-screen__button' href='#form-block'>
            Начать путь в <b>IT</b>
          </a>
        </div>
      </div>
      
      <ModalWindow/>

      <div
        className='feedback'
        id='review-block'
      >
        <div className='feedback_content'>
          <div className='title feedback_content_name'>
            <p>Отзывы</p>
          </div>
          <div className='feedback_carousel'>
            <Swiper></Swiper>
          </div>
        </div>
      </div>

      <form
        action='/api'
        method='POST'
        className='form'
              id='form-block'
              onSubmit={async (evt) => {
    evt.preventDefault();
                  const formData = new FormData(evt.target);
                  console.log(formData);
    let res;
    await fetch('https://sk-academy.it/api/index.php', {
        method: 'POST',
        headers: {
            Accept: "application/json"
        },
        body: formData,
    }).then(async (data) => {
        console.log(data);
        res = await data.ok;
    });
    if (res) {
      handleOpenSubmit();
    } else {
        console.log('чёт не то');
    }
}}
      >
        <div className='form_content'>
          <div className='form_name_parent'>
            <div className='title form_content_name'>
              <p>Запись на первый день марафона</p>
              <div className='free'>
                <p>FREE</p>
              </div>
            </div>
          </div>
          <div className='form__input-container form_name'>
            <label>
              <input
                type='text'
                name='client_name'
                placeholder='Ваше имя'
                // ref='clear'
              />
            </label>
          </div>
          <div className='form__input-container form_number'>
            <label>
              <input
                type='text'
                name='phone_number'
                placeholder='Ваш телеграмм/номер телефона'
                // ref='clear'
              />
            </label>
          </div>
          <div className='form__input-container form_skills'>
            <select
              name='expirience'
              
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

          <div className='form__input-container form_promo-code form_number'>
            <label>
              <input
                type='text'
                name='promo_code'
                placeholder='Промо код'
                // ref='clear'
              />
            </label>
          </div>
          <div className='form__input-container form_button'>
            <button
              type='submit'
              href='#'
              // onClick={this.refs.clear.value = ''}
            >
              Начать путь в <b>&nbsp;IT</b>
            </button>
            <Modal 
                    onClose={handleCloseSubmit}
                    open={opensubmit}
                  >
                    <div className='modal_main'>
                        <p>Данные успешно отправлены!<br></br>
                        Скоро с вами свяжется наш менеджер.
                        </p>
                        <button onClick={handleCloseSubmit}>
                            Готово
                        </button>
                    </div>
                  </Modal>
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
