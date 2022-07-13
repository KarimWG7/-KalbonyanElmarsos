'use strict';

const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
///////////////////////////////////////
// Modal window

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// const message = document.createElement('div');
// message.classList.add('cookie');
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.append(message);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', () => message.remove());
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

//////////////////////////////////////////////////////////
// button scrolling
btnScrollTo.addEventListener('click', function (e) {
  //  old way
  /*  
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('current scroll (x/y)', window.pageXOffset, pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  // scrolling
  window.scrollTo(
    s1coords.left + window.pageXOffset, // => current position + current scroll
    s1coords.top + window.pageYOffset
  );
  // to smooth the scrooling
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
*/
  // the most modern way to scroll
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////////////////
// page navigation
// 1- add evevt listener to common parent element
// 2- determine what element originate the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching if the target has nav__link class
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////////////////////////////////////////
// Tabbed composent

//bad prctice
// tabs.forEach(t => t.addEventListener('click', ()=>console.log('TAB');))

// good way
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // Gaured Clause
  if (!clicked) return;
  // active tab
  tabs.forEach(e => e.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // active area
  tabsContent.forEach(e => e.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//////////////////////////////////////////////////////////

// Menue fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibling = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    sibling.forEach(e => {
      if (e !== link) e.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.4));
nav.addEventListener('mouseout', handleHover.bind(1));

//////////////////////////////////////////////////////////
// sticky navbar

// // old way
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function () {
//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// intersection observer
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//////////////////////////////////////////////////////////
//Reaveal sections
const sections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});
sections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

//////////////////////////////////////////////////////////
// lazy loading images
const imgTarget = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: `200px`,
});
imgTarget.forEach(img => imgObserver.observe(img));

//////////////////////////////////////////////////////////
// sliders
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const slider = document.querySelector('.slider');
  const maxSlide = slides.length - 1;
  const dotContainer = document.querySelector('.dots');
  let curSlide = 0;
  // Functions
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide = "${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const previusSlide = function () {
    if (curSlide === 0) curSlide = maxSlide;
    else curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    createDots();
    activateDot(curSlide);
    goToSlide(0);
  };
  init();

  // Event Handlers

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', previusSlide);

  // implementing keyboard actions
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') previusSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
  dotContainer.addEventListener('click', function (e) {
    e.preventDefault;
    if (e.target.classList.contains('dots__dot')) {
      const  slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
/*
  // LECTURES

//////////////////////////////////////////////////////////

// lectue#1
// Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// 1 => .insertAdjacentHTML

header.prepend(message)
header.prepend(message.cloneNode(true))
header.before(message)
header.after(message)

//////////////////////////////////////////////////////////

// lecture#2

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).backgroundColor);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// changingin ths variabels values in CSS 
document.documentElement.style.setProperty('--color-primary', 'orangered')

// access attributes 

const logo = document.querySelector('.nav__logo')
console.log(logo.alt);
console.log(logo.className);
logo.alt = 'beautiful minimalist logo'
// not standerd
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'BANKist')
console.log(logo.getAttribute('company'));
// getting image src
console.log(logo.src);
console.log(logo.getAttribute('src'));
// getting links
const link = document.querySelector('.nav__link--btn')
console.log(link.href);
console.log(link.getAttribute('href'));
// Data attributes
console.log(logo.dataset.versionNumber);
// Classes
logo.classList.add('c')
logo.classList.remove('c')
logo.classList.toggle('c')
logo.classList.contains('c')

// Dont use this  
logo.classNmae = 'karim'

//////////////////////////////////////////////////////////

// Event Propagation
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();

  // Stop propagation
  // e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
  },
  true
  ); // thye third parameter is to make the event in this elemeny happen in the capture phase
  // so to racap we stoped the propagation on the nav--link and then make the event happen to the nav in the capture phase so it will happen to the nav then the nav--link and stop propagation and will not happen to nav--links
  
  //////////////////////////////////////////////////////////
  
  // Event Handler
  
  // new way
  const h1 = document.querySelector('h1');
  
  const alertH1 = function (e) {
    alert('addEventListener: Great u have read the heading!');
  };
  h1.addEventListener('mouseenter', alertH1);
  
  setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 1000);
  
  // old way
  // h1.onmouseenter = function (e) {
    //   alert('addEventListener: Great u have read the heading!');
    // };
    
//////////////////////////////////////////////////////////

// lecture#3

///////////////////////////////////////////////////////////////////////////////////

const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards
console.log(h1.parentElement);
console.log(h1.parentNode);

h1.closest('.header').style.background = 'var(--gradient-secondary';
h1.closest('h1').style.background = 'var(--gradient-primary';

// Going Sideways: siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
console.log(h1.parentElement.childNodes);

[...h1.parentElement.children].forEach(el => {
  const min = e => (el.style.transform = 'scale(0.75)');
  const norm = e => (el.style.transform = 'scale(1)');
  if (el !== h1) {
    h1.addEventListener('mouseenter', min);
    h1.addEventListener('mouseleave', norm);
  }
});

*/

document.addEventListener('DOMContentLoaded', function (e) {
  console.log(e);
});

window.addEventListener('load', function (e) {
  console.log(e);
});

// // to make the browser to ask you that u are sure u want to close the page
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue  = '';
// });
