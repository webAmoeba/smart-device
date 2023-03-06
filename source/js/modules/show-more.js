const button = document.querySelector('.about-company__button');
const descriptions = document.querySelectorAll('.about-company p');
const mobileDescriptions = document.querySelectorAll('.about-company__mobile-description');

button.style.display = 'flex';
descriptions.forEach((elem, index) => index > 1 ? elem.classList.add('about-company__description--hidden') : '');
mobileDescriptions.forEach((elem) => elem.classList.add('about-company__mobile-description--hidden'));

const showMore = () => {
  button.addEventListener('click', () => {
    if (button.classList.contains('about-company__button--rollup')) {
      descriptions.forEach((elem, index) => index > 1 ? elem.classList.add('about-company__description--hidden') : '');
      mobileDescriptions.forEach((elem) => elem.classList.add('about-company__mobile-description--hidden'));
      button.classList.remove('about-company__button--rollup');
      button.textContent = 'подробнее';
    } else {
      descriptions.forEach((elem) => elem.classList.remove('about-company__description--hidden'));
      mobileDescriptions.forEach((elem) => elem.classList.remove('about-company__mobile-description--hidden'));
      button.classList.add('about-company__button--rollup');
      button.textContent = 'свернуть';
    }
  });
};

export {showMore};
