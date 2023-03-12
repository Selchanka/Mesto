
// Закрытие и открытие формы редактирования
const popupEdit = document.querySelector('#form-edit');
const actionButtonEdit = document.querySelector('.profile__button-edit-action');
actionButtonEdit.addEventListener('click', () => {
  popupEdit.classList.add('popup_opened');
});
const closeButtonEdit = popupEdit.querySelector('.popup__close');
closeButtonEdit.addEventListener('click', () => {
  popupEdit.classList.remove('popup_opened'); 
  document.querySelector('#popup-input-fio').value = document.querySelector('.profile__name').textContent;
  document.querySelector('#popup-input-profession').value = document.querySelector('.profile__profession').textContent;  
});

// Закрытие и открытие формы добавления карточек
const popupAdd = document.querySelector('#form-add');
const actionButtonAdd = document.querySelector('.profile__button-add-action');
actionButtonAdd.addEventListener('click', () => {
  popupAdd.classList.add('popup_opened');
});
const closeButtonAdd = popupAdd.querySelector('.popup__close');
closeButtonAdd.addEventListener('click', () => {
  popupAdd.classList.remove('popup_opened');
  document.querySelector('#popup-input-image-name').value = '';
  document.querySelector('#popup-input-image-link').value = '';
});

// Сохранение изменений на форме редактирования

let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

function saveFioProfession(evt) {
  evt.preventDefault();
  const nameInput = document.querySelector('#popup-input-fio');
  const jobInput = document.querySelector('#popup-input-profession');
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  popupEdit.classList.remove('popup_opened');
}
const popupSave = document.querySelector('#popup-save-fio-profession');
popupSave.addEventListener('submit', saveFioProfession);


// добавление исходных фото

const initialCards = [
  {
    name: 'Багамские острова',
    link: './images/1.jpg'
  },
  {
    name: 'Мальдивы',
    link: './images/2.jpg'
  },
  {
    name: 'Вьетнам',
    link: './images/3.jpg'
  },
  {
    name: 'Тайланд',
    link: './images/4.jpg'
  },
  {
    name: 'Мьянма',
    link: './images/5.jpg'
  },
  {
    name: 'Шри-Ланка',
    link: './images/6.jpg'
  }
];

const elementsContainer = document.querySelector('.elements');
// Функция добавления карточек
function addElement(name, link) {
  const elementTemplate = document.querySelector('#element-foto-info').content;
  const element = elementTemplate.querySelector('.elements__element').cloneNode(true);
  element.querySelector('.elements__name').textContent = name;
  element.querySelector('.elements__foto').alt = name;
  element.querySelector('.elements__foto').src = link;
  elementsContainer.prepend(element);


  // Удаление карточки              
  const trachFoto = elementsContainer.querySelector('.elements__trach-foto');
  trachFoto.addEventListener('click', function (event) {
    event.target.closest('.elements__element').remove();
  });

  //Ставит и убирает лайки   
  elementsContainer.querySelector('.elements__icon-like').addEventListener('click', function (event) {
    event.target.classList.toggle('elements__icon-like_active');
  })

  // Закрытие и открытие формы с фото
  const popupBigFoto = document.querySelector('#form-big-foto');

  let actionButtonFoto = document.querySelector('.elements__foto');
  actionButtonFoto.addEventListener('click', () => {
    popupBigFoto.classList.add('popup_opened');
    popupBigFoto.querySelector('.popup__title-big-foto').textContent = name;
    popupBigFoto.querySelector('.popup__big-foto').alt = name;
    popupBigFoto.querySelector('.popup__big-foto').src = link;
  });
  const closeButtonFoto = popupBigFoto.querySelector('.popup__close');
  closeButtonFoto.addEventListener('click', () => {
    popupBigFoto.classList.remove('popup_opened');
  });

  return addElement;
}

// Сохранение новой карточки
function saveImage(evt) {
  evt.preventDefault();
  const name = document.querySelector('#popup-input-image-name').value;
  const link = document.querySelector('#popup-input-image-link').value;
  addElement(name, link);
  popupAdd.classList.remove('popup_opened');
  document.querySelector('#popup-input-image-name').value = '';
  document.querySelector('#popup-input-image-link').value = '';
}
const popupAddImage = document.querySelector('#popup-save-image');
popupAddImage.addEventListener('submit', saveImage);

// Добавления списка с карточками
initialCards.forEach((i) => {
  addElement(i.name, i.link)
})



