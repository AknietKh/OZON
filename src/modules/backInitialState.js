import {getData} from './getData';
import {renderCards} from './renderCards';
import {addCart} from './addCart';
import {actionPage} from './actionPage';

//перерисовывает карточки товаров по новой при клике на лого
function backInitialState() {
  const logoBtn = document.querySelector('.logo'),
        filterText = document.querySelector('.filter-title h5');

  logoBtn.addEventListener('click', (e) => {
    event.preventDefault();
    filterText.textContent = "Фильтр";
    
    getData().then(data => {
      renderCards(data);
      addCart();
      actionPage();
    })
  })
}

export {backInitialState}