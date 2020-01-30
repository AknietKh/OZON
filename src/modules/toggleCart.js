//корзина. функция показывает/скрывает окно корзины

function toggleCart() {
  const btnCart = document.getElementById('cart'), //иконка корзины
        modalCart = document.querySelector('.cart'),
        btnCartClose = document.querySelector('.cart-close');

  btnCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  })

  btnCartClose.addEventListener('click', () => {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
  })
}

export {toggleCart}