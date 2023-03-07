const button = document.querySelector('.about-company__button');
const descriptions = document.querySelectorAll('.about-company__grid p');
const mobileDescriptions = document.querySelectorAll('.about-company__mobile-description');

button.style.display = 'flex';

if (descriptions) {
  descriptions.forEach((elem, index) => index > 1 ? elem.classList.add('about-company__description--hidden') : '');
}

if (mobileDescriptions) {
  mobileDescriptions.forEach((elem) => elem.classList.add('about-company__mobile-description--hidden'));
}

const showMore = () => {
  button.addEventListener('click', () => {
    if (button.classList.contains('about-company__button--rollup')) {
      if (descriptions) {
        descriptions.forEach((elem, index) => index > 1 ? elem.classList.add('about-company__description--hidden') : '');
      }
      if (mobileDescriptions) {
        mobileDescriptions.forEach((elem) => elem.classList.add('about-company__mobile-description--hidden'));
      }
      if (button) {
        button.classList.remove('about-company__button--rollup');
        button.textContent = 'подробнее';
      }

    } else {

      if (descriptions) {
        descriptions.forEach((elem) => elem.classList.remove('about-company__description--hidden'));
      }
      if (mobileDescriptions) {
        mobileDescriptions.forEach((elem) => elem.classList.remove('about-company__mobile-description--hidden'));
      }
      if (button) {
        button.classList.add('about-company__button--rollup');
        button.textContent = 'свернуть';
      }
    }
  });
};

export {showMore};
