const buttons = document.querySelectorAll('.main-footer__accordion-toggler');
const accordions = document.querySelectorAll('.main-footer__accordion');
const headers = document.querySelectorAll('.main-footer__section-header');

if (accordions) {
  accordions.forEach((elem) => elem.classList.add('main-footer__accordion--hidden'));
}

if (headers) {
  headers.forEach((elem) => elem.classList.remove('main-footer__section-header--open'));
}

const moveAccordion = () => {
  if (buttons && accordions && headers) {
    buttons.forEach((button, index) => {

      button.addEventListener('click', () => {
        if (accordions[index].classList.contains('main-footer__accordion--hidden')) {
          accordions.forEach((content, current) => {
            if (index !== current) {
              content.classList.add('main-footer__accordion--hidden');
              headers[current].classList.remove('main-footer__section-header--open');
            } else {
              accordions[index].classList.remove('main-footer__accordion--hidden');
              headers[index].classList.add('main-footer__section-header--open');
            }
          }

          );
        } else {
          accordions[index].classList.add('main-footer__accordion--hidden');
          headers[index].classList.remove('main-footer__section-header--open');
        }
      });
    });
  }
};

export {moveAccordion};
