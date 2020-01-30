//функия filter реализует работу фильтра, чебокса и каталога
function filter() {
  const cards = document.querySelectorAll('.goods .card'),
        discountCheckbox = document.getElementById('discount-checkbox'),
        min = document.getElementById('min'),
        max = document.getElementById('max'),
        activeLi = document.querySelector('.catalog li.active');

  cards.forEach((card) => {
    const cardPrice = card.querySelector('.card-price'),
          price = parseFloat(cardPrice.textContent),
          discount = card.querySelector('.card-sale');

    card.style.display = '';

    if ((min.value && price < min.value) || (max.value && price > max.value)) {
      card.style.display = 'none';
    } else if (discountCheckbox.checked && !discount) {
      card.style.display = 'none';
    } else if (activeLi) {
        if (card.dataset.category !== activeLi.textContent) {
          card.style.display = 'none';
        }
    }
  })
}

export {filter}