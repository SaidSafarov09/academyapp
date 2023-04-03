import React from 'react';
import '../styles/main.scss';
import '../styles/media.scss';
import logo from '../img/logo.svg';
import '../styles/arrow.scss';
import kart from '../img/sakartvelo.png';
import shw from '../img/schwed.png';
import Swiper from './Swiper';

function Main() {
    return (
        <div className='main'>
            <div className='main_block'>
                <header>
                    <img src={logo}></img>
                    <div className='header_links'>
                        <a href='#'>Главная</a>
                        <a href='#'>Про курс</a>
                        <a href='#'>Отзывы</a>
                        <a href='#'>Пробный урок</a>
                        <a href='#'>Контакты</a>
                        <div class="col">
                            <div class="con">
                                <div class="bar arrow-top"></div>
                                <div class="bar arrow-middle"></div>
                                <div class="bar arrow-bottom"></div>
                            </div>
                        </div>
                        <a href="https://codepen.io/tonkec//" class="ua" target="_blank">
                            <i class="fa fa-user"></i></a>
                    </div>
                </header>
                <div className='main_block_content'>
                    <h1>S&K Academy</h1>
                    <p>Это академия которая готовит к<br></br>
                    реальным задачам, которая не просто<br></br>
                    даёт знания, но и рассказывает как их<br></br>
                    продавать</p>
                    <a href='#'>
                        Начать путь в <b>IT</b>
                    </a>
                </div>
            </div>
            <div className='steps'>
                <div className='steps_content'>
                    <div className='steps_content_name'>
                        <p>За 14 дней с нуля до Джуна!</p>
                    </div>
                    <div className='steps_content_main'>
                    <div className='steps_days'>
                        <div className='days_1'>
                            <div className='day_1'><p>День 1</p></div>
                            <div className='arrow'></div>
                            <div className='day_2'><p>День 2</p></div>
                            <div className='arrow'></div>
                            <div className='day_3'><p>День 3</p></div>
                        </div>
                        <div className='arrow_3'>
                            <div className='arrow'>

                            </div>
                        </div>
                        <div className='days_2'>
                            <div className='day_4'><p>День 4</p></div>
                            <div className='arrow'></div>
                            <div className='day_5'><p>День 5</p></div>
                        </div>    
                        <div className='arrow_5'>
                            <div className='arrow'></div>
                        </div>   
                        <div className='days_3'>
                            <div className='day_6'><p>День 6</p></div>
                            <div className='arrow_back'></div>
                            <div className='day_7'><p>День 7</p></div>
                            <div className='arrow_back'></div>
                            <div className='day_8'><p>День 8</p></div>
                        </div>    
                        <div className='arrow_8'>
                            <div className='arrow'></div>
                        </div>
                        <div className='days_4'>
                            <div className='day_9'><p>День 9</p></div>
                            <div className='arrow_back'></div>
                            <div className='day_10'><p>День 10</p></div>
                            <div className='arrow_back'></div>
                            <div className='day_11'><p>День 11</p></div>
                        </div>    
                        <div className='arrow_11'>
                            <div className='arrow'></div>
                        </div>  
                        <div className='days_5'>
                            <div className='day_12'><p>День 12</p></div>
                            <div className='arrow'></div>
                            <div className='day_13'><p>День 13</p></div>
                            <div className='arrow'></div>
                            <div className='day_14'><p>День 14</p></div>
                        </div>    
                    </div>
                    </div>
                    
                </div>
            </div>

            <div className='feedback'>
                <div className='feedback_content'>
                    <div className='feedback_content_name'>
                        <p>Отзывы</p>
                    </div>
                    <div className='feedback_carousel'>
                        <Swiper></Swiper>
                    </div>
                </div>
            </div>

            <div className='form'>
                <div className='form_content'>
                    <div className='form_name_parent'>
                        <div className='form_content_name'>
                            <p>
                                Запись на первый день марафона
                            </p>
                            <div className='free'>
                                <p>FREE</p>
                            </div>
                        </div>
                    </div>    
                    <div className='form_name'>
                        <form>
                          <label>
                            <input type="text" name="name" placeholder='Ваше имя'/>
                          </label>
                        </form>
                    </div>
                    <div className='form_number'>
                        <form>
                          <label>
                            <input type="text" name="name" placeholder='Ваш номер'/>
                          </label>
                        </form>
                    </div>
                    <div className='form_skills'>
                        
                        <select>
                            <option selected value='' disabled >Ваш опыт</option>
                            <option value="">Обсолютно не разбираюсь в программировании</option>
                            <option selected value="">Пробовал, но что то пошло не так</option>
                            <option value="">Знаю основы HTML и CSS</option>
                        </select>
                    </div>
                    <div className='form_button'>
                        <a href='#'>
                            Начать путь в <b>&nbsp;IT</b>
                        </a>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <div className='footer_content'>
                    <div className='phone_number'>
                        <div className='first'>
                            <p>+41 79 827 21 64</p>
                            <img src={shw}/>
                        </div>    
                        <div className='second'>
                            <p>+995 599 520 870</p>
                            <img src={kart}/>
                        </div>    
                    </div>
                    <div className='brand'>
                        <img src={logo}/>
                        <p>SandK.academy.international@gmail.com</p>
                        <span>© 2023</span>
                    </div>
                    <div className='links'>
                        <a href='#'>Linkedin</a>
                        <a href='#'>Telegram</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main;