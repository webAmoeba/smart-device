const buttons = document.querySelectorAll('.main-footer__accordion-toggler');
const accordions = document.querySelectorAll('.main-footer__accordion');

const moveAccordion = () => {
  buttons.forEach((button, index) => {

    button.addEventListener('click', () => {
      if (accordions[index].classList.contains('main-footer__accordion--hidden')) {
        accordions.forEach((content, current) =>
          index !== current ?
            content.classList.add('main-footer__accordion--hidden') :
            accordions[index].classList.remove('main-footer__accordion--hidden')
        );
      } else {
        accordions[index].classList.add('main-footer__accordion--hidden');
      }
    });
  });
};

moveAccordion();
