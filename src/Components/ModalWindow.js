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
        setOpen4(true);
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

    const [open13, setOpen13] = React.useState(false);
  
    const handleClose13 = () => {
        setOpen13(false);
    };
    
    const handleOpen13 = () => {
        setOpen13(true);
    };

    const [open14, setOpen14] = React.useState(false);
  
    const handleClose14 = () => {
        setOpen14(false);
    };
    
    const handleOpen14 = () => {
        setOpen14(true);
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
                      <p>
                      - Знакомство с преподавателями
                        <br></br>
                      - Чуть чуть о программе марафона
                        <br></br>
                      - Знакомство с Figma
                        <br></br>
                      - Знакомство с html и css
                        <br></br>
                      - Создание мини сайта
                      </p>
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
                    <p>
                    - Создание html для учебного проекта landing page
                      </p>
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
                    <p>
                    - Создание css для учебного проекта landing page
                      </p>
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
                    <p>
                    - Знакомство с git и размещение учебного проекта landing page на github pages
                      </p>
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
                    <p>
                    - Создание html для учебного адаптивного проекта
                      </p>
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
                    <p>
                      - Знакомство с препроцесорами sass и less 
                        <br></br>
                      - Знакомство с webpack
                        <br></br>
                      - Создание стилий для учебного адаптивного проекта на базе препроцесоров
                      </p>
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
                    <p>
                    - Знакомство с медиа запросами и адаптивностью
                        <br></br>
                        - Создание адаптивности для учебного адаптивного проекта
                    
                      </p>
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
                    <p>
                    - Знакомство с JS
                      <br></br>
                    - Создание JS функционала для учебного адаптивного проекта
                      </p>
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
                    <p>
                    - Создание html для учебного проекта REACT
                      </p>
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
                    <p>
                    - Создание стилей для учебного проекта REACT
                      </p>
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
                    <p>
                    - Разбивка html кода на вьюхи
                      <br></br>
                    - Создание presentor
                      </p>
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
                    <p>
                    - Куда двигаться дальше
                      <br></br>
                    - Как результативно искать работу<br></br> (Реальные успешные кейсы к каждому варианту)
                      <br></br>
                      <br></br>
                    - Создание резюме
                      </p>
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