const modals = document.querySelector(".modals");
const headerNav = document.querySelectorAll('[data-type ="headerNav"]');
const modalItems = document.querySelectorAll('.modal-item');
const selection = document.querySelectorAll('.modal-item__label');
let selectedId = "";

function addVisability() {
  modals.classList.add("modals--active");
}

function removeVisability() {
  modals.classList.remove("modals--active");
}

function hideItems(modalsItems) {
  modalsItems.forEach((item) => {
    item.classList.remove("modal-item--active");
  })
}

headerNav.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    const item = document.getElementById(id);
    const geoLink = document.querySelector('a[data-id="geo');
    const menuLink = document.querySelector('a[data-id="menu"]');

    if (`${id}` !== selectedId) {
      selectedId = id;
      addVisability();
    } else {
      selectedId = '';
      removeVisability();
    }

    if (id==="geo") {
      hideItems(modalItems);
      menuLink.classList.remove('icon--active');

      if (geoLink.classList.value.includes('icon--active')) {
        geoLink.classList.remove('icon--active');
      } else {
        geoLink.classList.add('icon--active');
      }

      item.classList.add("modal-item--active");
    } else if (id==="menu") {
      hideItems(modalItems);
      geoLink.classList.remove('icon--active');

      if (menuLink.classList.value.includes('icon--active')) {
        menuLink.classList.remove('icon--active');
        menuLink.classList.remove('icon--menu--active');
      } else {
        menuLink.classList.add('icon--active');
        menuLink.classList.add('icon--menu--active');
      }

      item.classList.add("modal-item--active");
    }
  })
});

selection.forEach((label) => {
  label.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    const selectedUl = document.getElementById(`${id}List`);
    const selectedLabel = document.querySelector(`label[data-id ="${id}"]`);
    const classNames = selectedUl.classList.value;

    if (classNames.includes('modal-item__selection--active')) {
      selectedUl.classList.remove('modal-item__selection--active');
      selectedLabel.classList.remove('modal-item__label--active');
    } else {
      selectedUl.classList.add('modal-item__selection--active');
      selectedLabel.classList.add('modal-item__label--active');
    }
  });
});

const sliderButtons = document.querySelectorAll('button[data-type="sliderButton"]');

let count = 0;
let prev;

sliderButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    const slider = document.querySelector(`div[data-id=${id}]`);
    const visualisation = document.querySelector(`div[data-id=${id}Nav]`);
    const items = slider.querySelectorAll('.slider__item');
    let visualisationItems;
    const classNames = e.target.classList.value;

    if (classNames.includes('slider__button--back')) {
      if (count - 1 >= 0) {
        prev = count;
        count -= 1;
      } else {
        prev = 0;
        count = items.length - 1;
      }
    } else {
      if (count + 1 > items.length - 1) {
        prev = items.length - 1;
        count = 0;
      } else {
        prev = count;
        count += 1;
      }
    };

    if (visualisation !== null) {
      visualisationItems= visualisation.querySelectorAll('.slider__slide-number');
      visualisationItems[prev].classList.remove("slider__slide-number--active");
      visualisationItems[count].classList.add("slider__slide-number--active");
    };

    items[prev].classList.remove("slider__item--active");
    items[count].classList.add("slider__item--active");
  });
});

$(document).ready(function(){
  $('.emotions__slider').slick({
    arrows: true,
    speed: 300,
    infinite: true,
    variableWidth: true
  });
});

$(document).ready(function(){
  $('.feedback__slider').slick({
    arrows: true,
    speed: 300,
    infinite: true,
    variableWidth: true
  });
});

$(document).ready(function(){
  $('.emotions__slider emotions__slider--desk').slick({
    arrows: true,
    speed: 300,
    infinite: true,
    variableWidth: true
  });
});
