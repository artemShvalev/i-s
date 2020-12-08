<template>
<div>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>

    <div class="content__catalog">
      <aside class="filter">
        <h2 class="filter__title">Фильтры</h2>

        <form class="filter__form form" action="#" method="get">
          <fieldset class="form__block">
            <legend class="form__legend">Цена</legend>
            <label class="form__label form__label--price">
              <input class="form__input" type="text" name="min-price" value="0">
              <span class="form__value">От</span>
            </label>
            <label class="form__label form__label--price">
              <input class="form__input" type="text" name="max-price" value="12345">
              <span class="form__value">До</span>
            </label>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Категория</legend>
            <label class="form__label form__label--select">
              <select class="form__select" type="text" name="category">
                <option value="value1">Все категории</option>
                <option value="value2">Зубные щетки</option>
                <option value="value3">Телефоны</option>
                <option value="value4">Спортинвентарь</option>
              </select>
            </label>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Цвет</legend>
            <ul class="colors">
              <li class="colors__item">
                <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" name="color" value="#73B6EA" checked="">
                  <span class="colors__value" style="background-color: #73B6EA;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#FFBE15">
                  <span class="colors__value" style="background-color: #FFBE15;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#939393">
                  <span class="colors__value" style="background-color: #939393;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#8BE000">
                  <span class="colors__value" style="background-color: #8BE000;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#FF6B00">
                  <span class="colors__value" style="background-color: #FF6B00;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#FFF">
                  <span class="colors__value" style="background-color: #FFF;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#000">
                  <span class="colors__value" style="background-color: #000;">
                </span></label>
              </li>
            </ul>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Объемб в ГБ</legend>
            <ul class="check-list">
              <li class="check-list__item">
                <label class="check-list__label">
        <input class="check-list__check sr-only" type="checkbox" name="volume" value="8" checked="">
                  <span class="check-list__desc">
                    8
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="16">
                  <span class="check-list__desc">
                    16
                    <span>(461)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="32">
                  <span class="check-list__desc">
                    32
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="64">
                  <span class="check-list__desc">
                    64
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                 <input class="check-list__check sr-only" type="checkbox" name="volume" value="128">
                  <span class="check-list__desc">
                    128
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                 <input class="check-list__check sr-only" type="checkbox" name="volume" value="264">
                  <span class="check-list__desc">
                    264
                    <span>(313)</span>
                  </span>
                </label>
              </li>
            </ul>
          </fieldset>

          <button class="filter__submit button button--primery" type="submit">
            Применить
          </button>
          <button class="filter__reset button button--second" type="button">
            Сбросить
          </button>
        </form>
      </aside>

      <section class="catalog">
        <ul class="catalog__list">
          <li class="catalog__item">
          <router-link class="catalog__pic" to="{name: 'ItemProducts', params: {ItemProductsId: }}">
              <img src="img/radio.jpg" srcset="img/radio@2x.jpg 2x" alt="Название товара">
          </router-link>

            <h3 class="catalog__title">
              <router-link to="{  name: 'ItemProducts', params: {ItemProductsId: }}">
                Радионяня Motorola MBP16
              </router-link>
            </h3>

            <span class="catalog__price">
              3 690 ₽
            </span>

            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label">
        <input class="colors__radio sr-only" type="radio" name="color-1" value="#73B6EA" checked="">
                  <span class="colors__value" style="background-color: #73B6EA;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-1" value="#8BE000">
                  <span class="colors__value" style="background-color: #8BE000;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-1" value="#222">
                  <span class="colors__value" style="background-color: #222;">
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/toothbrush.jpg" srcset="img/toothbrush@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Ультразвуковая зубная щётка Playbrush Smart Sonic
              </a>
            </h3>

            <span class="catalog__price">
              5 660 ₽
            </span>

            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label">
        <input class="colors__radio sr-only" type="radio" name="color-2" value="#F0F0F0" checked="">
                  <span class="colors__value" style="background-color: #F0F0F0;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-2" value="#8BE000">
                  <span class="colors__value" style="background-color: #8BE000;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-2" value="#73B6EA">
                  <span class="colors__value" style="background-color: #73B6EA;">
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/phone.jpg" srcset="img/phone-1@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Смартфон Xiaomi Mi Mix 3 6/128GB
              </a>
            </h3>

            <span class="catalog__price">
              21 790 ₽
            </span>

            <ul class="sizes">
              <li class="sizes__item">
                <label class="sizes__label">
                  <input class="sizes__radio sr-only" type="radio" name="sizes-1" value="32">
                  <span class="sizes__value">
                    32gb
                  </span>
                </label>
              </li>
              <li class="sizes__item">
                <label class="sizes__label">
                  <input class="sizes__radio sr-only" type="radio" name="sizes-1" value="64">
                  <span class="sizes__value">
                    64gb
                  </span>
                </label>
              </li>
              <li class="sizes__item">
                <label class="sizes__label">
             <input class="sizes__radio sr-only" type="radio" name="sizes-1" value="128" checked="">
                  <span class="sizes__value">
                    128gb
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/board.jpg" srcset="img/board@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Электроскейт Razor Cruiser
              </a>
            </h3>

            <span class="catalog__price">
              24 690 ₽
            </span>

            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label">
        <input class="colors__radio sr-only" type="radio" name="color-3" value="#939393" checked="">
                  <span class="colors__value" style="background-color: #939393;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-3" value="#FF6B00">
                  <span class="colors__value" style="background-color: #FF6B00;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-3" value="#222">
                  <span class="colors__value" style="background-color: #222;">
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/phone-2.jpg" srcset="img/phone-2@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Смартфон Xiaomi Mi A3 4/64GB Android One
              </a>
            </h3>

            <span class="catalog__price">
              14 960 ₽
            </span>

            <ul class="sizes">
              <li class="sizes__item">
                <label class="sizes__label">
                  <input class="sizes__radio sr-only" type="radio" name="sizes-2" value="32">
                  <span class="sizes__value">
                    32gb
                  </span>
                </label>
              </li>
              <li class="sizes__item">
                <label class="sizes__label">
                  <input class="sizes__radio sr-only" type="radio" name="sizes-2" value="64">
                  <span class="sizes__value">
                    64gb
                  </span>
                </label>
              </li>
              <li class="sizes__item">
                <label class="sizes__label">
             <input class="sizes__radio sr-only" type="radio" name="sizes-2" value="128" checked="">
                  <span class="sizes__value">
                    128gb
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/phone-3.jpg" srcset="img/phone-3@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Смартфон Xiaomi Redmi 6/128GB
              </a>
            </h3>

            <span class="catalog__price">
              8 960 ₽
            </span>

            <ul class="sizes">
              <li class="sizes__item">
                <label class="sizes__label">
                  <input class="sizes__radio sr-only" type="radio" name="sizes-3" value="32">
                  <span class="sizes__value">
                    32gb
                  </span>
                </label>
              </li>
              <li class="sizes__item">
                <label class="sizes__label">
                  <input class="sizes__radio sr-only" type="radio" name="sizes-3" value="64">
                  <span class="sizes__value">
                    64gb
                  </span>
                </label>
              </li>
              <li class="sizes__item">
                <label class="sizes__label">
             <input class="sizes__radio sr-only" type="radio" name="sizes-3" value="128" checked="">
                  <span class="sizes__value">
                    128gb
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/bicycle.jpg" srcset="img/bicycle@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Электрический дрифт-карт Razor Crazy Cart
              </a>
            </h3>

            <span class="catalog__price">
              39 900 ₽
            </span>

            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label">
        <input class="colors__radio sr-only" type="radio" name="color-4" value="#FFBE15" checked="">
                  <span class="colors__value" style="background-color: #FFBE15;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-4" value="#8BE000">
                  <span class="colors__value" style="background-color: #8BE000;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-4" value="#FF6B00">
                  <span class="colors__value" style="background-color: #FF6B00;">
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/wheels.jpg" srcset="img/wheels@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Гироскутер Razor Hovertrax 2.0
              </a>
            </h3>

            <span class="catalog__price">
              34 900 ₽
            </span>

            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label">
        <input class="colors__radio sr-only" type="radio" name="color-5" value="#939393" checked="">
                  <span class="colors__value" style="background-color: #939393;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-5" value="#F0F0F0">
                  <span class="colors__value" style="background-color: #F0F0F0;">
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/scooter.jpg" srcset="img/scooter@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Детский трюковой самокат Razor Grom
              </a>
            </h3>

            <span class="catalog__price">
              4 990 ₽
            </span>

            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label">
           <input class="colors__radio sr-only" type="radio" name="color-6" value="#222" checked="">
                  <span class="colors__value" style="background-color: #222;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-6" value="#73B6EA">
                  <span class="colors__value" style="background-color: #73B6EA;">
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/ripstik.jpg" srcset="img/ripstik@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Роллерсёрф Razor RipStik Air Pro
              </a>
            </h3>

            <span class="catalog__price">
              6 690 ₽
            </span>

            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label">
        <input class="colors__radio sr-only" type="radio" name="color-7" value="#FFBE15" checked="">
                  <span class="colors__value" style="background-color: #FFBE15;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-7" value="#8BE000">
                  <span class="colors__value" style="background-color: #8BE000;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-7" value="#222">
                  <span class="colors__value" style="background-color: #222;">
                  </span>
                </label>
              </li>
            </ul>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/airpods.jpg" srcset="img/airpods@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Наушники AirPods с беспроводным зарядным футляром
              </a>
            </h3>

            <span class="catalog__price">
              16 560 ₽
            </span>
          </li>

          <li class="catalog__item">
            <a class="catalog__pic" href="#">
              <img src="img/headphones.jpg" srcset="img/headphones@2x.jpg 2x" alt="Название товара">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                Наушники Sony
              </a>
            </h3>

            <span class="catalog__price">
              30 690 ₽
            </span>

            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label">
           <input class="colors__radio sr-only" type="radio" name="color-6" value="#222" checked="">
                  <span class="colors__value" style="background-color: #222;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-6" value="#FF6B00">
                  <span class="colors__value" style="background-color: #FF6B00;">
                  </span>
                </label>
              </li>
            </ul>
          </li>
        </ul>

        <ul class="catalog__pagination pagination">
          <li class="pagination__item">
            <a class="pagination__link pagination__link--arrow pagination__link--disabled"
               aria-label="Предыдущая страница">
              <svg width="8" height="14" fill="currentColor">
                <use xlink:href="#icon-arrow-left"></use>
              </svg>
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link pagination__link--current">
              1
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">
              2
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">
              3
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">
              4
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">
              ...
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">
              10
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link pagination__link--arrow" href="#"
               aria-label="Следующая страница">
              <svg width="8" height="14" fill="currentColor">
                <use xlink:href="#icon-arrow-right"></use>
              </svg>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </main>
</div>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style scoped lang=scss>

</style>
