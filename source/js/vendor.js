// Swiper 7.4.1
// import './vendor/swiper';
import './vendor/focus-visible-polyfill';

import {initPhoneMask} from './vendor/phone-mask';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initPhoneMask();
  });
});
