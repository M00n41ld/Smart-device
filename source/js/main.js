import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initAccordions} from './modules/accordion/init-accordion';

const accordion = document.querySelectorAll('.accordion__element');
const buttonMore = document.querySelector('.about__button');
const lastParagraph = document.querySelector('.about__text--target');
const mobileParagraph = document.querySelector('.about__text--target-mobile');
const mediaQuery = window.matchMedia('(max-width: 767px)');

function handleTabletChange(e) {
  if (e.matches) {
    buttonMore.addEventListener('click', ShowMore);
  } else {
    buttonMore.addEventListener('click', ShowMore);
  }
}

function removeParagraph() {
  lastParagraph.classList.remove('about__text--hidden');
  buttonMore.textContent = 'Свернуть';
}

function addParagraph() {
  lastParagraph.classList.add('about__text--hidden');
  buttonMore.textContent = 'Подробнее';
}

function ShowMoreMobile() {
  mobileParagraph.classList.remove('about__text--mobile');
  buttonMore.removeEventListener('click', ShowMoreMobile);
  buttonMore.addEventListener('click', ShowLessMobile);
  removeParagraph();
}

function ShowLessMobile() {
  mobileParagraph.classList.add('about__text--mobile');
  buttonMore.removeEventListener('click', ShowLessMobile);
  buttonMore.addEventListener('click', ShowMoreMobile);
  addParagraph();
}

function ShowMore() {
  buttonMore.removeEventListener('click', ShowMore);
  buttonMore.addEventListener('click', ShowLess);
  removeParagraph();
}

function ShowLess() {
  buttonMore.removeEventListener('click', ShowLess);
  buttonMore.addEventListener('click', ShowMore);
  addParagraph();
}

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    initAccordions();
  });

  window.addEventListener('change', handleTabletChange);

  handleTabletChange(mediaQuery);

  mobileParagraph.classList.add('about__text--mobile');
  lastParagraph.classList.add('about__text--hidden');
  lastParagraph.classList.remove('about__text--nojs');

  accordion.forEach((element) => element.classList.remove('accordion__element--nojs'));
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
