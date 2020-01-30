//Добавление товара в корзины

function addCart() {
  const cards = document.querySelectorAll('.goods .card'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        cartEmpty = document.getElementById('cart-empty'),
        countGoods = document.querySelector('.counter');

  cards.forEach((card) => {
    const btn = card.querySelector('button');

    btn.addEventListener('click', () => {
      const cardClone = card.cloneNode(true);
      cartWrapper.append(cardClone);

      showData();

      const removeBtn = cardClone.querySelector('button');
      removeBtn.textContent = 'Удалить из корзины';

      removeBtn.addEventListener('click', () => {
        cardClone.remove();
        showData();
      })
    })
  })

  //показывает общую сумму товаров в корзине и количество товаров в корзине
  function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card'),
          cardsPrice = cartWrapper.querySelectorAll('.card-price'),
          cartTotal = document.querySelector('.cart-total span');
    
    let sum = 0;

    countGoods.textContent = cardsCart.length;

    cardsPrice.forEach((cardPrice) => {
      let price = parseFloat(cardPrice.textContent);
      sum += price;
    })

    cartTotal.textContent = sum;

    if (cardsCart.length) {
      cartEmpty.remove();
    } else {
      cartWrapper.append(cartEmpty);
    }
  }
}

export {addCart}