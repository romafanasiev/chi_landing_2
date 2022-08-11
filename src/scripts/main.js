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


