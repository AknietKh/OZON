//получение данных с сервера

function getData() {
  const goodsWrapper = document.querySelector('.goods');
  return fetch('../db/db.json')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Данные не были получены, ошибка: ' + response.status);
      }
    })
    .catch(err => {
      console.warn(err);
      goodsWrapper.innerHTML = `<span style="color: red; font-size: 30px; margin: 0 auto;">
                                  Упс, что-то пошло не так!
                                </span>`;
    });
}

export {getData}