import {filter} from './filter';
//Каталог
function renderCatalog() {
  const cards = document.querySelectorAll('.goods .card'),
        catalogList = document.querySelector('.catalog-list'),
        catalogBtn = document.querySelector('.catalog-button'),
        catalogWrapper = document.querySelector('.catalog'),
        filterText = document.querySelector('.filter-title h5'),
        categories = new Set();

  cards.forEach((card) => {
    categories.add(card.dataset.category);
  })

  categories.forEach((category) => {
    const li = document.createElement('li');

    li.textContent = category;
    catalogList.append(li);
  })

  const allLi = catalogList.querySelectorAll('li');

  catalogBtn.addEventListener('click', (event) => {
    if (catalogWrapper.style.display) {
      catalogWrapper.style.display = '';
    } else {
      catalogWrapper.style.display = 'block';
    }

    if (event.target.tagName === 'LI') {
      allLi.forEach((elem) => {
        if (elem === event.target) {
          elem.classList.add('active');
        } else {
          elem.classList.remove('active');
        }
      })
    
      filterText.textContent = event.target.textContent;

      filter();
    }
  })
}

export {renderCatalog}