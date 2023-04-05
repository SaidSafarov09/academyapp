import React from 'react';
import Modal from '@material-ui/core/Modal';
import '../styles/modalwindow.scss';


function ModalWindow() {

   

    const [open1, setOpen1] = React.useState(false);
  
    const handleClose1 = () => {
        setOpen1(false);
    };
    
    const handleOpen1 = () => {
        setOpen1(true);
    };


    const [open2, setOpen2] = React.useState(false);
  
    const handleClose2 = () => {
        setOpen2(false);
    };
    
    const handleOpen2 = () => {
        setOpen2(true);
    };


    const [open3, setOpen3] = React.useState(false);
  
    const handleClose3 = () => {
        setOpen3(false);
    };
    
    const handleOpen3 = () => {
        setOpen3(true);
    };

    const [open4, setOpen4] = React.useState(false);
  
    const handleClose4 = () => {
        setOpen4(false);
    };
    
    const handleOpen4 = () => {
        setOpen4(true);
    };

    const [open5, setOpen5] = React.useState(false);
  
    const handleClose5 = () => {
        setOpen5(false);
    };
    
    const handleOpen5 = () => {
        setOpen5(true);
    };

    const [open6, setOpen6] = React.useState(false);
  
    const handleClose6 = () => {
        setOpen6(false);
    };
    
    const handleOpen6 = () => {
        setOpen6(true);
    };

    const [open7, setOpen7] = React.useState(false);
  
    const handleClose7 = () => {
        setOpen7(false);
    };
    
    const handleOpen7 = () => {
        setOpen7(true);
    };

    const [open8, setOpen8] = React.useState(false);
  
    const handleClose8 = () => {
        setOpen8(false);
    };
    
    const handleOpen8 = () => {
        setOpen8(true);
    };

    const [open9, setOpen9] = React.useState(false);
  
    const handleClose9 = () => {
        setOpen9(false);
    };
    
    const handleOpen9 = () => {
        setOpen9(true);
    };

    const [open10, setOpen10] = React.useState(false);
  
    const handleClose10 = () => {
        setOpen10(false);
    };
    
    const handleOpen10 = () => {
        setOpen10(true);
    };

    const [open11, setOpen11] = React.useState(false);
  
    const handleClose11 = () => {
        setOpen11(false);
    };
    
    const handleOpen11 = () => {
        setOpen11(true);
    };

    const [open12, setOpen12] = React.useState(false);
  
    const handleClose12 = () => {
        setOpen12(false);
    };
    
    const handleOpen12 = () => {
        setOpen12(true);
    };



  return (
    <div
        className='steps'
        id='course-block' 
      >
        <div className='steps_content'>
          <div className='title steps_content_name'>
            <p>За 14 дней с нуля до Джуна!</p>
          </div>


      


          <div className='steps_content_main'>
            <div className='steps_days'>
              <div className='days_1'>

                <button onClick={handleOpen1} className='day_1'>
                  <p>День 1</p>
                </button>
                  <Modal 
                    onClose={handleClose1}
                    open={open1}
                  >
                    <div className='modal'>
                      <div className='modal_text'>
                          <div className='text_title'>
                              <p>План урока:</p>
                              <p>Домашнее задание:</p>
                          </div>
                          <div className='text_main'>
                              <div className='plan_text'>
                                <p>
                                  - Знакомство с преподавателями
                                    <br></br>
                                    <br></br>
                                  - Немного о программе марафона
                                    <br></br>
                                    <br></br>
                                  - Знакомство с Figma
                                    <br></br>
                                    <br></br>
                                  - Знакомство с html и css
                                    <br></br>
                                  - Создание мини сайта
                                </p>
                              </div>
                              <div className='line'></div>
                              <div className='home_text'>
                                <p>
                                    - Лекция(Текст) про основные html теги и основные css свойства
                                    <br></br>
                                    <br></br>
                                    - Создание своего мини сайта
                                    <br></br>
                                </p>
                              </div>
                              
                          </div>
                          <a href='https://www.figma.com/file/ztprxR9n1fL1iL9858D6Lq/Fashion?node-id=2%3A221&t=KSddfsQVcoKwlRaU-1'>
                                  Проект, над которым работаем
                          </a>
                      </div>
                    </div>
                  </Modal>

                <div className='arrow'></div>
                
                <button onClick={handleOpen2} className='day_2'>
                  <p>День 2</p>
                </button>
                  <Modal 
                    onClose={handleClose2}
                    open={open2}
                  >
                    <div className='modal'>
                      <div className='modal_text'>
                          <div className='text_title'>
                              <p>План урока:</p>
                              <p>Домашнее задание:</p>
                          </div>
                          <div className='text_main'>
                              <div className='plan_text'>
                                <p>
                                  - Создание html для учебного проекта landing page
                                </p>
                              </div>
                              <div className='line'></div>
                              <div className='home_text'>
                                <p>
                                    - Лекция про БЭМ
                                    <br></br>
                                    <br></br>
                                    - Создание html для своих проектов
                                    <br></br>
                                </p>
                              </div>
                              
                          </div>
                          <a href='https://www.figma.com/file/5OeztCQgeYNjacHqJViFGd/online-School-site?node-id=2415%3A26437&t=hzg1ZaH13yvOXYJT-1'>
                                  Проект, над которым работаем
                          </a>
                      </div>
                    </div>
                  </Modal>

                <div className='arrow'></div>
                <button onClick={handleOpen3} className='day_3'>
                  <p>День 3</p>
                </button>
                  <Modal 
                    onClose={handleClose3}
                    open={open3}
                  >
                    <div className='modal'>
                      <div className='modal_text'>
                          <div className='text_title'>
                              <p>План урока:</p>
                              <p>Домашнее задание:</p>
                          </div>
                          <div className='text_main'>
                              <div className='plan_text'>
                                <p>
                                - Создание css для учебного проекта landing page
                                </p>
                              </div>
                              <div className='line'></div>
                              <div className='home_text'>
                                <p>
                                - Лекция про крупные/средние/мелкие сетки на гридах и флексах
                                    <br></br>
                                    <br></br>
                                    - Создание css для своих проектов
                                    <br></br>
                                </p>
                              </div>
                              
                          </div>
                          <a href='https://www.figma.com/file/5OeztCQgeYNjacHqJViFGd/online-School-site?node-id=2415%3A26437&t=hzg1ZaH13yvOXYJT-1'>
                                  Проект, над которым работаем
                          </a>
                      </div>
                    </div>
                  </Modal>
              </div>
              <div className='arrow_3'>
                <div className='arrow'></div>
              </div>
              <div className='days_2'>
              <button onClick={handleOpen4} className='day_4'>
                  <p>День 4</p>
                </button>
                  <Modal 
                    onClose={handleClose4}
                    open={open4}
                  >
                    <div className='modal'>
                      <div className='modal_text'>
                          <div className='text_title'>
                              <p>План урока:</p>
                              <p>Домашнее задание:</p>
                          </div>
                          <div className='text_main'>
                              <div className='plan_text'>
                                <p>
                                - Знакомство с git и размещение учебного проекта landing page на github pages
                                </p>
                              </div>
                              <div className='line'></div>
                              <div className='home_text'>
                                <p>
                                - Лекция про git
                                    <br></br>
                                    <br></br>
                                    - Разместить свои проекты на github pages
                                    <br></br>
                                </p>
                              </div>
                              
                          </div>
                          <a href='https://www.figma.com/file/5OeztCQgeYNjacHqJViFGd/online-School-site?node-id=2415%3A26437&t=hzg1ZaH13yvOXYJT-1'>
                                  Проект, над которым работаем
                          </a>
                      </div>
                    </div>
                  </Modal>
                <div className='arrow'></div>
                <button onClick={handleOpen5} className='day_5'>
                  <p>День 5</p>
                </button>
                  <Modal 
                    onClose={handleClose5}
                    open={open5}
                  >
                    <div className='modal'>
                      <div className='modal_text'>
                          <div className='text_title'>
                              <p>План урока:</p>
                              <p>Домашнее задание:</p>
                          </div>
                          <div className='text_main'>
                              <div className='plan_text'>
                                <p>
                                - Создание html для учебного адаптивного проекта
                                </p>
                              </div>
                              <div className='line'></div>
                              <div className='home_text'>
                                <p>
                                - Лекция про адаптивные сайты
                                    <br></br>
                                    <br></br>
                                    - Создание html для своих проектов
                                    <br></br>
                                </p>
                              </div>
                              
                          </div>
                          <a href='https://www.figma.com/file/RQJVaG1NwSUzaOYEENxuA9/Lion-Realty-(Adaptive)?node-id=16%3A5&t=iK7XQGw9b0K248U0-1'>
                                  Проект, над которым работаем
                          </a>
                      </div>
                    </div>
                  </Modal>
              </div>
              <div className='arrow_5'>
                <div className='arrow'></div>
              </div>
              <div className='days_3'>
              <button onClick={handleOpen6} className='day_6'>
                  <p>День 6</p>
                </button>
                  <Modal 
                    onClose={handleClose6}
                    open={open6}
                  >
                    <div className='modal'>
                      <div className='modal_text'>
                          <div className='text_title'>
                              <p>План урока:</p>
                              <p>Домашнее задание:</p>
                          </div>
                          <div className='text_main'>
                              <div className='plan_text'>
                                <p>
                                - Знакомство с препроцесорами sass и less (Нужно на примерах показать их преимущества)
                                <br></br>
                                <br></br>
                                - Знакомство с webpack
                                <br></br>
                                <br></br>
                                - Создание стилей для учебного адаптивного проекта на базе препроцессоров
                                </p>
                              </div>
                              <div className='line'></div>
                              <div className='home_text'>
                                <p>
                                - Лекция про sass и less, а так же про webpack
                                    <br></br>
                                    - Создание стилей для своих проектов на базе препроцессоров
                                    <br></br>
                                </p>
                              </div>
                              
                          </div>
                          <a href='https://www.figma.com/file/RQJVaG1NwSUzaOYEENxuA9/Lion-Realty-(Adaptive)?node-id=16%3A5&t=iK7XQGw9b0K248U0-1'>
                                  Проект, над которым работаем
                          </a>
                      </div>
                    </div>
                  </Modal>
                <div className='arrow_back'></div>
                <button onClick={handleOpen7} className='day_7'>
                  <p>День 7</p>
                </button>
                  <Modal 
                    onClose={handleClose7}
                    open={open7}
                  >
                    <div className='modal'>
                      <div className='modal_text'>
                          <div className='text_title'>
                              <p>План урока:</p>
                              <p>Домашнее задание:</p>
                          </div>
                          <div className='text_main'>
                              <div className='plan_text'>
                                <p>
                                - Знакомство с медиа запросами и адаптивностью
                                <br></br>
                                <br></br>
                                - Создание адаптивности для учебного адаптивного проекта
                                </p>
                              </div>
                              <div className='line'></div>
                              <div className='home_text'>
                                <p>
                                    - Лекция про медиа запросы и адаптивность в целом
                                    <br></br>
                                    <br></br>
                                    - Создание адаптивности для своих проектов
                                    <br></br>
                                </p>
                              </div>
                              
                          </div>
                          <a href='https://www.figma.com/file/RQJVaG1NwSUzaOYEENxuA9/Lion-Realty-(Adaptive)?node-id=16%3A5&t=iK7XQGw9b0K248U0-1'>
                                  Проект, над которым работаем
                          </a>
                      </div>
                    </div>
                  </Modal>
                <div className='arrow_back'></div>
                <button onClick={handleOpen8} className='day_8'>
                  <p>День 8</p>
                </button>
                  <Modal 
                    onClose={handleClose8}
                    open={open8}
                  >
                    <div className='modal'>
                      <div className='modal_text'>
                          <div className='text_title'>
                              <p>План урока:</p>
                              <p>Домашнее задание:</p>
                          </div>
                          <div className='text_main'>
                              <div className='plan_text'>
                                <p>
                                - Знакомство с JS
                                <br></br>
                                <br></br>
                                - Создание JS функционала для учебного адаптивного проекта
                                </p>
                              </div>
                              <div className='line'></div>
                              <div className='home_text'>
                                <p>
                                - Лекция про JS
                                    <br></br>
                                    <br></br>
                                    - Создание JS функционала для своих проектов
                                    <br></br>
                                </p>
                              </div>
                              
                          </div>
                          <a href='https://www.figma.com/file/RQJVaG1NwSUzaOYEENxuA9/Lion-Realty-(Adaptive)?node-id=16%3A5&t=iK7XQGw9b0K248U0-1'>
                                  Проект, над которым работаем
                          </a>
                      </div>
                    </div>
                  </Modal>
              </div>
              <div className='arrow_8'>
                <div className='arrow'></div>
              </div>
              <div className='days_4'>
              <button onClick={handleOpen9} className='day_9'>
                  <p>День 9</p>
                </button>
                  <Modal 
                    onClose={handleClose9}
                    open={open9}
                  >
                    <div className='modal'>
                      <div className='modal_text'>
                          <div className='text_title'>
                              <p>План урока:</p>
                              <p>Домашнее задание:</p>
                          </div>
                          <div className='text_main'>
                              <div className='plan_text'>
                                <p>
                                - Создание html для учебного проекта REACT
                                </p>
                              </div>
                              <div className='line'></div>
                              <div className='home_text'>
                                <p>
                                - Лекция про REACT приложения
                                    <br></br>
                                    <br></br>
                                    - Создание html для своих приложений
                                    <br></br>
                                </p>
                              </div>
                              
                          </div>
                          <a href='https://www.figma.com/file/EdDQDaxQJQWCgMSOufG2sX/restaurant-site?node-id=0%3A1&t=4baempZf2cYDeklQ-1'>
                                  Проект, над которым работаем
                          </a>
                      </div>
                    </div>
                  </Modal>
                <div className='arrow_back'></div>
                <button onClick={handleOpen10} className='day_10'>
                  <p>День 10</p>
                </button>
                  <Modal 
                    onClose={handleClose10}
                    open={open10}
                  >
                    <div className='modal'>
                      <div className='modal_text'>
                          <div className='text_title'>
                              <p>План урока:</p>
                              <p>Домашнее задание:</p>
                          </div>
                          <div className='text_main'>
                              <div className='plan_text'>
                                <p>
                                - Создание стилей для учебного проекта REACT
                                </p>
                              </div>
                              <div className='line'></div>
                              <div className='home_text'>
                                <p>
                                - Создание стилей для своих проектов
                                </p>
                              </div>
                              
                          </div>
                          <a href='https://www.figma.com/file/EdDQDaxQJQWCgMSOufG2sX/restaurant-site?node-id=0%3A1&t=4baempZf2cYDeklQ-1'>
                                  Проект, над которым работаем
                          </a>
                      </div>
                    </div>
                  </Modal>
                <div className='arrow_back'></div>
                <button onClick={handleOpen11} className='day_11'>
                  <p>День 11</p>
                </button>
                  <Modal 
                    onClose={handleClose11}
                    open={open11}
                  >
                    <div className='modal'>
                      <div className='modal_text'>
                          <div className='text_title'>
                              <p>План урока:</p>
                              <p>Домашнее задание:</p>
                          </div>
                          <div className='text_main'>
                              <div className='plan_text'>
                                <p>
                                - Разбивка html кода на вьюхи
                                <br></br>
                                <br></br>
                                - Создание presentor
                                </p>
                              </div>
                              <div className='line'></div>
                              <div className='home_text'>
                                <p>
                                - Лекция про REACT и SPA
                                <br></br>
                                <br></br>
                                - Разбивка html кода своих проектов на вьюхи
                                <br></br>
                                <br></br>
                                - Создание presentor
                                </p>
                              </div>
                              
                          </div>
                          <a href='https://www.figma.com/file/EdDQDaxQJQWCgMSOufG2sX/restaurant-site?node-id=0%3A1&t=4baempZf2cYDeklQ-1'>
                                  Проект, над которым работаем
                          </a>
                      </div>
                    </div>
                  </Modal>
              </div>
              <div className='arrow_11'>
                <div className='arrow'></div>
              </div>
              <div className='days_5'>
              <button onClick={handleOpen12} className='day_12'>
                  <p>День 12</p>
                </button>
                  <Modal 
                    onClose={handleClose12}
                    open={open12}
                  >
                    <div className='modal'>
                      <div className='modal_text'>
                          <div className='text_title'>
                              <p>План урока:</p>
                              <p>Домашнее задание:</p>
                          </div>
                          <div className='text_main'>
                              <div className='plan_text'>
                                <p>
                                - Куда двигаться дальше
                                <br></br>
                                <br></br>
                                - Как результативно искать работу (Реальные успешные кейсы к каждому варианту)
                                <br></br>
                                <br></br>
                                - Создание резюме
                                </p>
                              </div>
                              <div className='line'></div>
                              <div className='home_text'>
                                <p>
                                - Создание резюме
                                </p>
                              </div>
                          </div>
                          <p>Конец...?</p>
                      </div>
                    </div>
                  </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ModalWindow;