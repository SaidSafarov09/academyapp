import ScrollReveal from 'scrollreveal';


const move = (elem, origin, distance = '250px', duration = 1200) => {
  ScrollReveal().reveal(elem, {
    reset: false,
    distance: distance,
    origin: origin,
    duration: duration,
    viewFactor: -60,
  });
};

const scale = (elem, duration = 1500) => {
  ScrollReveal().reveal(elem, {
    reset: false,
    scale: 1.4,
    duration: duration,
    distance: '0px',
    viewFactor: -60,
  });
};

export const startAnimation = () => {
    console.log('1');
    move('.header_links', 'right', '1000px', 2000);
    scale('.header__logo', 2000);
    move('.main-title', 'left', '1000px', 2000);
    move('.first-screen__text', 'right', '1000px', 2000);
    move('.first-screen__button', 'left', '1000px', 2000);
    move('.title', 'left', '1000px');
    scale('.form__input-container');
    move('.feedback_carousel', 'bottom', '200px');
    move('.phone_number', 'left'); 
    move('.links', 'right'); 
    scale('.brand');
}
