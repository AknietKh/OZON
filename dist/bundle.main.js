/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getData */ \"./modules/getData.js\");\n/* harmony import */ var _modules_renderCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderCards */ \"./modules/renderCards.js\");\n/* harmony import */ var _modules_renderCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderCatalog */ \"./modules/renderCatalog.js\");\n/* harmony import */ var _modules_toggleCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/toggleCheckbox */ \"./modules/toggleCheckbox.js\");\n/* harmony import */ var _modules_toggleCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/toggleCart */ \"./modules/toggleCart.js\");\n/* harmony import */ var _modules_addCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/addCart */ \"./modules/addCart.js\");\n/* harmony import */ var _modules_actionPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/actionPage */ \"./modules/actionPage.js\");\n/* harmony import */ var _modules_backInitialState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/backInitialState */ \"./modules/backInitialState.js\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style/style.css */ \"./style/style.css\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_8__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nObject(_modules_getData__WEBPACK_IMPORTED_MODULE_0__[\"getData\"])().then((data) => {\r\n  Object(_modules_renderCards__WEBPACK_IMPORTED_MODULE_1__[\"renderCards\"])(data);\r\n  Object(_modules_renderCatalog__WEBPACK_IMPORTED_MODULE_2__[\"renderCatalog\"])();\r\n  Object(_modules_toggleCheckbox__WEBPACK_IMPORTED_MODULE_3__[\"toggleCheckbox\"])();\r\n  Object(_modules_toggleCart__WEBPACK_IMPORTED_MODULE_4__[\"toggleCart\"])();\r\n  Object(_modules_addCart__WEBPACK_IMPORTED_MODULE_5__[\"addCart\"])();\r\n  Object(_modules_actionPage__WEBPACK_IMPORTED_MODULE_6__[\"actionPage\"])();\r\n  Object(_modules_backInitialState__WEBPACK_IMPORTED_MODULE_7__[\"backInitialState\"])();\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/actionPage.js":
/*!*******************************!*\
  !*** ./modules/actionPage.js ***!
  \*******************************/
/*! exports provided: actionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actionPage\", function() { return actionPage; });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./modules/filter.js\");\n\r\n\r\n// функция actionPage вешает события на фильтр и чекбоксы. Так же реализован поиск по товарам\r\nfunction actionPage() {\r\n  const cards = document.querySelectorAll('.goods .card'),\r\n        discountCheckbox = document.getElementById('discount-checkbox'),\r\n        min = document.getElementById('min'),\r\n        max = document.getElementById('max'),\r\n        search = document.querySelector('.search-wrapper_input'),\r\n        searchBtn = document.querySelector('.search-btn');\r\n\r\n  discountCheckbox.addEventListener('click', _filter__WEBPACK_IMPORTED_MODULE_0__[\"filter\"]);\r\n  min.addEventListener('change', _filter__WEBPACK_IMPORTED_MODULE_0__[\"filter\"]);\r\n  max.addEventListener('change', _filter__WEBPACK_IMPORTED_MODULE_0__[\"filter\"]);\r\n\r\n  searchBtn.addEventListener('click', searchHandler);\r\n  search.addEventListener('keydown', (e) => {\r\n    if (e.key === 'Enter') searchHandler();\r\n  })\r\n\r\n  function searchHandler() {\r\n    const searchText = new RegExp(search.value.trim(), 'i');\r\n\r\n    cards.forEach((card) => {\r\n      const title = card.querySelector('.card-title');\r\n      \r\n      if (!searchText.test(title.textContent)) {\r\n        card.style.display = 'none';\r\n      } else {\r\n        card.style.display = '';\r\n      }      \r\n    });\r\n\r\n    search.value = '';\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/actionPage.js?");

/***/ }),

/***/ "./modules/addCart.js":
/*!****************************!*\
  !*** ./modules/addCart.js ***!
  \****************************/
/*! exports provided: addCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCart\", function() { return addCart; });\n//Добавление товара в корзины\r\n\r\nfunction addCart() {\r\n  const cards = document.querySelectorAll('.goods .card'),\r\n        cartWrapper = document.querySelector('.cart-wrapper'),\r\n        cartEmpty = document.getElementById('cart-empty'),\r\n        countGoods = document.querySelector('.counter');\r\n\r\n  cards.forEach((card) => {\r\n    const btn = card.querySelector('button');\r\n\r\n    btn.addEventListener('click', () => {\r\n      const cardClone = card.cloneNode(true);\r\n      cartWrapper.append(cardClone);\r\n\r\n      showData();\r\n\r\n      const removeBtn = cardClone.querySelector('button');\r\n      removeBtn.textContent = 'Удалить из корзины';\r\n\r\n      removeBtn.addEventListener('click', () => {\r\n        cardClone.remove();\r\n        showData();\r\n      })\r\n    })\r\n  })\r\n\r\n  //показывает общую сумму товаров в корзине и количество товаров в корзине\r\n  function showData() {\r\n    const cardsCart = cartWrapper.querySelectorAll('.card'),\r\n          cardsPrice = cartWrapper.querySelectorAll('.card-price'),\r\n          cartTotal = document.querySelector('.cart-total span');\r\n    \r\n    let sum = 0;\r\n\r\n    countGoods.textContent = cardsCart.length;\r\n\r\n    cardsPrice.forEach((cardPrice) => {\r\n      let price = parseFloat(cardPrice.textContent);\r\n      sum += price;\r\n    })\r\n\r\n    cartTotal.textContent = sum;\r\n\r\n    if (cardsCart.length) {\r\n      cartEmpty.remove();\r\n    } else {\r\n      cartWrapper.append(cartEmpty);\r\n    }\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/addCart.js?");

/***/ }),

/***/ "./modules/backInitialState.js":
/*!*************************************!*\
  !*** ./modules/backInitialState.js ***!
  \*************************************/
/*! exports provided: backInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backInitialState\", function() { return backInitialState; });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./modules/getData.js\");\n/* harmony import */ var _renderCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCards */ \"./modules/renderCards.js\");\n\r\n\r\n\r\n//перерисовывает карточки товаров по новой при клике на лого\r\nfunction backInitialState() {\r\n  const logoBtn = document.querySelector('.logo'),\r\n        filterText = document.querySelector('.filter-title h5');\r\n\r\n  logoBtn.addEventListener('click', (e) => {\r\n    event.preventDefault();\r\n    filterText.textContent = \"Фильтр\";\r\n    \r\n    Object(_getData__WEBPACK_IMPORTED_MODULE_0__[\"getData\"])().then(data => Object(_renderCards__WEBPACK_IMPORTED_MODULE_1__[\"renderCards\"])(data));\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/backInitialState.js?");

/***/ }),

/***/ "./modules/filter.js":
/*!***************************!*\
  !*** ./modules/filter.js ***!
  \***************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n//функия filter реализует работу фильтра, чебокса и каталога\r\nfunction filter() {\r\n  const cards = document.querySelectorAll('.goods .card'),\r\n        discountCheckbox = document.getElementById('discount-checkbox'),\r\n        min = document.getElementById('min'),\r\n        max = document.getElementById('max'),\r\n        activeLi = document.querySelector('.catalog li.active');\r\n\r\n  cards.forEach((card) => {\r\n    const cardPrice = card.querySelector('.card-price'),\r\n          price = parseFloat(cardPrice.textContent),\r\n          discount = card.querySelector('.card-sale');\r\n\r\n    card.style.display = '';\r\n\r\n    if ((min.value && price < min.value) || (max.value && price > max.value)) {\r\n      card.style.display = 'none';\r\n    } else if (discountCheckbox.checked && !discount) {\r\n      card.style.display = 'none';\r\n    } else if (activeLi) {\r\n        if (card.dataset.category !== activeLi.textContent) {\r\n          card.style.display = 'none';\r\n        }\r\n    }\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/filter.js?");

/***/ }),

/***/ "./modules/getData.js":
/*!****************************!*\
  !*** ./modules/getData.js ***!
  \****************************/
/*! exports provided: getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getData\", function() { return getData; });\n//получение данных с сервера\r\n\r\nfunction getData() {\r\n  const goodsWrapper = document.querySelector('.goods');\r\n  return fetch('../db/db.json')\r\n    .then((response) => {\r\n      if (response.ok) {\r\n        return response.json();\r\n      } else {\r\n        throw new Error('Данные не были получены, ошибка: ' + response.status);\r\n      }\r\n    })\r\n    .catch(err => {\r\n      console.warn(err);\r\n      goodsWrapper.innerHTML = `<span style=\"color: red; font-size: 30px; margin: 0 auto;\">\r\n                                  Упс, что-то пошло не так!\r\n                                </span>`;\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/getData.js?");

/***/ }),

/***/ "./modules/renderCards.js":
/*!********************************!*\
  !*** ./modules/renderCards.js ***!
  \********************************/
/*! exports provided: renderCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCards\", function() { return renderCards; });\nfunction renderCards(data) {\r\n  const goodsWrapper = document.querySelector('.goods');\r\n\r\n  document.querySelectorAll('.card').forEach(i => i.remove());\r\n  \r\n  data.goods.forEach((good) => {\r\n    const card = document.createElement('div');\r\n    \r\n    card.className = 'card';\r\n    card.setAttribute('data-category', good.category);\r\n    \r\n    card.innerHTML = `\r\n      ${good.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n\t\t    <div class=\"card-img-wrapper\">\r\n\t\t  \t  <span class=\"card-img-top\"\r\n\t\t  \t\t  style=\"background-image: url('${good.img}')\"></span>\r\n\t\t    </div>\r\n\t\t    <div class=\"card-body justify-content-between\">\r\n\t\t  \t  <div class=\"card-price\" style=\"${good.sale ? 'color:red;' : ''}\">${good.price} ₽</div>\r\n\t\t  \t  <h5 class=\"card-title\">${good.title}</h5>\r\n\t\t  \t  <button class=\"btn btn-primary\">В корзину</button>\r\n\t\t    </div>\r\n\t\t  </div>\r\n    `;\r\n    \r\n    goodsWrapper.append(card);\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/renderCards.js?");

/***/ }),

/***/ "./modules/renderCatalog.js":
/*!**********************************!*\
  !*** ./modules/renderCatalog.js ***!
  \**********************************/
/*! exports provided: renderCatalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCatalog\", function() { return renderCatalog; });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./modules/filter.js\");\n\r\n//Каталог\r\nfunction renderCatalog() {\r\n  const cards = document.querySelectorAll('.goods .card'),\r\n        catalogList = document.querySelector('.catalog-list'),\r\n        catalogBtn = document.querySelector('.catalog-button'),\r\n        catalogWrapper = document.querySelector('.catalog'),\r\n        filterText = document.querySelector('.filter-title h5'),\r\n        categories = new Set();\r\n\r\n  cards.forEach((card) => {\r\n    categories.add(card.dataset.category);\r\n  })\r\n\r\n  categories.forEach((category) => {\r\n    const li = document.createElement('li');\r\n\r\n    li.textContent = category;\r\n    catalogList.append(li);\r\n  })\r\n\r\n  const allLi = catalogList.querySelectorAll('li');\r\n\r\n  catalogBtn.addEventListener('click', (event) => {\r\n    if (catalogWrapper.style.display) {\r\n      catalogWrapper.style.display = '';\r\n    } else {\r\n      catalogWrapper.style.display = 'block';\r\n    }\r\n\r\n    if (event.target.tagName === 'LI') {\r\n      allLi.forEach((elem) => {\r\n        if (elem === event.target) {\r\n          elem.classList.add('active');\r\n        } else {\r\n          elem.classList.remove('active');\r\n        }\r\n      })\r\n    \r\n      filterText.textContent = event.target.textContent;\r\n\r\n      Object(_filter__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])();\r\n    }\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/renderCatalog.js?");

/***/ }),

/***/ "./modules/toggleCart.js":
/*!*******************************!*\
  !*** ./modules/toggleCart.js ***!
  \*******************************/
/*! exports provided: toggleCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleCart\", function() { return toggleCart; });\n//корзина. функция показывает/скрывает окно корзины\r\n\r\nfunction toggleCart() {\r\n  const btnCart = document.getElementById('cart'), //иконка корзины\r\n        modalCart = document.querySelector('.cart'),\r\n        btnCartClose = document.querySelector('.cart-close');\r\n\r\n  btnCart.addEventListener('click', () => {\r\n    modalCart.style.display = 'flex';\r\n    document.body.style.overflow = 'hidden';\r\n  })\r\n\r\n  btnCartClose.addEventListener('click', () => {\r\n    modalCart.style.display = 'none';\r\n    document.body.style.overflow = '';\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/toggleCart.js?");

/***/ }),

/***/ "./modules/toggleCheckbox.js":
/*!***********************************!*\
  !*** ./modules/toggleCheckbox.js ***!
  \***********************************/
/*! exports provided: toggleCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleCheckbox\", function() { return toggleCheckbox; });\n// checkbox. функция отрисовки галочки в чекбоксе\r\n\r\nfunction toggleCheckbox() {\r\n  const checkbox = document.querySelectorAll('.filter-check_checkbox');\r\n\r\n  checkbox.forEach((elem) => {\r\n    elem.addEventListener('change', function () {\r\n      if (this.checked) {\r\n        this.nextElementSibling.classList.add('checked');\r\n      } else {\r\n        this.nextElementSibling.classList.remove('checked');\r\n      }\r\n    })\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/toggleCheckbox.js?");

/***/ }),

/***/ "./style/style.css":
/*!*************************!*\
  !*** ./style/style.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./style/style.css?");

/***/ })

/******/ });