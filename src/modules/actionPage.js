import {filter} from './filter';

// функция actionPage вешает события на фильтр и чекбоксы. Так же реализован поиск по товарам
function actionPage() {
  const cards = document.querySelectorAll('.goods .card'),
        discountCheckbox = document.getElementById('discount-checkbox'),
        min = document.getElementById('min'),
        max = document.getElementById('max'),
        search = document.querySelector('.search-wrapper_input'),
        searchBtn = document.querySelector('.search-btn');

  discountCheckbox.addEventListener('click', filter);
  min.addEventListener('change', filter);
  max.addEventListener('change', filter);

  searchBtn.addEventListener('click', searchHandler);
  search.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') searchHandler();
  })

  function searchHandler() {
    const searchText = new RegExp(search.value.trim(), 'i');

    cards.forEach((card) => {
      const title = card.querySelector('.card-title');
      
      if (!searchText.test(title.textContent)) {
        card.style.display = 'none';
      } else {
        card.style.display = '';
      }      
    });

    search.value = '';
  }
}

export {actionPage}