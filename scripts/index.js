const popupEdit = document.querySelector('#form-edit');
const closeButtonEdit = popupEdit.querySelector('.popup__close');
const actionButtonEdit = document.querySelector('.profile__button-edit-action');
const popupAdd = document.querySelector('#form-add');
const closeButtonAdd = popupAdd.querySelector('.popup__close');
const actionButtonAdd = document.querySelector('.profile__button-add-action');
const popupBigFoto = document.querySelector('#form-big-foto');
const closeButtonFoto = popupBigFoto.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const elementsContainer = document.querySelector('.elements');
const nameInput = document.querySelector('#popup-input-fio');
const jobInput = document.querySelector('#popup-input-profession');
const formProfile = document.querySelector('#popup-save-fio-profession');
const formNewCard = document.querySelector('#popup-save-image');
const inputNameFormNewCard = document.querySelector('#popup-input-image-name');
const inputLinkFormNewCard = document.querySelector('#popup-input-image-link');

//функции

function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function saveFioProfession(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  popupEdit.classList.remove('popup_opened');
}

function createCard(data) {
  const elementTemplate = document.querySelector('#element-foto-info').content;
  const element = elementTemplate.querySelector('.elements__element').cloneNode(true);
  element.querySelector('.elements__name').textContent = data.name;
  element.querySelector('.elements__foto').alt = data.name;
  element.querySelector('.elements__foto').src = data.link;

  // Удаление карточки              
  const trachFoto = element.querySelector('.elements__trach-foto');
  trachFoto.addEventListener('click', function (event) {
    event.target.closest('.elements__element').remove();
  });

  //Ставит и убирает лайки   
  element.querySelector('.elements__icon-like').addEventListener('click', function (event) {
    event.target.classList.toggle('elements__icon-like_active');
  })

  // Закрытие и открытие формы с фото
  const actionButtonFoto = element.querySelector('.elements__foto');
  actionButtonFoto.addEventListener('click', () => {
    openPopup(popupBigFoto);
    popupBigFoto.querySelector('.popup__title-big-foto').textContent = data.name;
    popupBigFoto.querySelector('.popup__big-foto').alt = data.name;
    popupBigFoto.querySelector('.popup__big-foto').src = data.link;
  });

  return element;
}

function renderCard(data) {
  const element = createCard(data);
  elementsContainer.prepend(element);
}

// Сохранение новой карточки
function saveImage(evt) {
  evt.preventDefault();
  const name = inputNameFormNewCard.value;
  const link = inputLinkFormNewCard.value;
  renderCard({ name, link });
  popupAdd.classList.remove('popup_opened');
  formNewCard.reset();
}

//обработчики - слушатели

initialCards.forEach((data) => {
  renderCard(data)
})

formNewCard.addEventListener('submit', saveImage);

formProfile.addEventListener('submit', saveFioProfession);

actionButtonEdit.addEventListener('click', () => {
  openPopup(popupEdit);
});
closeButtonEdit.addEventListener('click', () => {
  closePopup(popupEdit)
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
});

actionButtonAdd.addEventListener('click', () => {
  openPopup(popupAdd);
});
closeButtonAdd.addEventListener('click', () => {
  closePopup(popupAdd);
  document.querySelector('#popup-save-image').reset();
});

closeButtonFoto.addEventListener('click', () => {
  closePopup(popupBigFoto);
});










