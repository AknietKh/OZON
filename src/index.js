import {getData} from './modules/getData';
import {renderCards} from './modules/renderCards';
import {renderCatalog} from './modules/renderCatalog';
import {toggleCheckbox} from './modules/toggleCheckbox';
import {toggleCart} from './modules/toggleCart';
import {addCart} from './modules/addCart';
import {actionPage} from './modules/actionPage';
// import {backInitialState} from './modules/backInitialState';
import './style/style.css';

getData().then((data) => {
  renderCards(data);
  renderCatalog();
  toggleCheckbox();
  toggleCart();
  addCart();
  actionPage();
  // backInitialState();
});
