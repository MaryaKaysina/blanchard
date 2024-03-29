function createList(arr, yearAdd, path = 'fr') {
  // Проверка: Франция - с 1500 по 1599
  if(arr.length === 0) {
    const notArtBlock = document.createElement('div');
    const notArtImg = document.createElement('img');
    const notArtWrap = document.createElement('div');
    const notArtTitle = document.createElement('h4');
    const notArtDesc = document.createElement('p');
    const notArtLink = document.createElement('a');

    notArtImg.classList.add('img-reset');
    notArtTitle.classList.add('h-reset');
    notArtDesc.classList.add('h-reset');
    notArtLink.classList.add('a-reset');

    notArtBlock.classList.add('not-art-block');
    notArtBlock.classList.add(yearAdd);
    notArtBlock.style.display = 'none';
    notArtImg.classList.add('not-art-img');
    notArtWrap.classList.add('not-art-wrap');
    notArtTitle.classList.add('not-art-title');
    notArtDesc.classList.add('not-art-desc');
    notArtLink.classList.add('not-art-link');

    notArtImg.src = './img/catalog/artists/notArt.svg';
    notArtImg.alt = 'Здесь пока пусто';
    notArtTitle.textContent = 'Здесь пока пусто';
    notArtDesc.textContent = 'А в галерее вы всегда можете найти что-то интересное для себя';
    notArtLink.textContent = 'В галерею';
    notArtLink.href = '#gallery';

    notArtBlock.append(notArtImg);
    notArtWrap.append(notArtTitle);
    notArtWrap.append(notArtDesc);
    notArtWrap.append(notArtLink);
    notArtBlock.append(notArtWrap);

    return notArtBlock;
  }

  const ulList = document.createElement('ul');
  ulList.classList.add('ul-reset');
  ulList.classList.add('years__artists');
  ulList.classList.add(yearAdd);
  ulList.style.display = 'none';

  for (let i = 0; i < arr.length; i++) {
    const liList = document.createElement('li');
    liList.classList.add('years__art');
    const btnList = document.createElement('button');
    btnList.classList.add('button-reset');
    btnList.classList.add('years__btn');
    btnList.id = yearAdd + '_' + path + '_' + i;
    btnList.textContent = arr[i];
    liList.append(btnList);
    ulList.append(liList);
  }

  return ulList;

}
function createArt(artists, idArt) {
  // Проверка: Франция - с 1400 по 1499 - Домбе, Гийом,
  //           Германия - с 1400 по 1499 - Виц, Конрад
  const sectionArtImg = document.querySelector('.artist__img');
  const sectionArtH4 = document.querySelector('.artist__title');
  const sectionArtSub = document.querySelector('.artist__subtitle');
  const sectionArtDescr = document.querySelector('.artist__descr');
  const sectionArtLink = document.querySelector('.artist .not-art-link');

  if(typeof artists.find(artist => artist.id === idArt) == 'undefined') {

    const notArtImg = document.createElement('img');
    const notArtH4 = document.createElement('h4');
    const notArtDescr = document.createElement('p');
    const notArtLink = document.createElement('a');

    notArtImg.classList.add('img-reset');
    notArtImg.classList.add('artist__img');

    notArtH4.classList.add('h-reset');
    notArtH4.classList.add('artist__title');

    notArtDescr.classList.add('h-reset');
    notArtDescr.classList.add('artist__descr');
    notArtDescr.classList.add('not__artist__descr');
    notArtDescr.style.marginBottom = '15px';

    notArtLink.classList.add('a-reset');
    notArtLink.classList.add('not-art-link');

    notArtImg.src = './img/catalog/artists/notArtist.svg';
    notArtImg.alt = 'Художник';
    notArtH4.textContent = 'Что мы о нём знаем?';
    notArtDescr.textContent = 'Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!';
    notArtLink.textContent = 'В галерею';
    notArtLink.href = '#gallery';

    sectionArtImg.replaceWith(notArtImg);
    sectionArtH4.replaceWith(notArtH4);
    sectionArtSub.replaceWith(notArtDescr);
    sectionArtDescr.replaceWith(notArtLink);

    return;
  }

  const imgArtArr = artists.find(artist => artist.id === idArt).img;
  const titleArtArr = artists.find(artist => artist.id === idArt).title;
  const subtitleArtArr = artists.find(artist => artist.id === idArt).subtitle;
  const descrArtArr = artists.find(artist => artist.id === idArt).descr;

  const imgArt = document.createElement('img');
  imgArt.classList.add('img-reset');
  imgArt.classList.add('artist__img');
  imgArt.src = imgArtArr;
  imgArt.alt = titleArtArr;

  const h4Art = document.createElement('h4');
  h4Art.classList.add('h-reset');
  h4Art.classList.add('artist__title');
  h4Art.textContent = titleArtArr;

  const subtitleArt = document.createElement('p');
  subtitleArt.classList.add('h-reset');
  subtitleArt.classList.add('artist__subtitle');
  subtitleArt.textContent = subtitleArtArr;

  const descreArt = document.createElement('p');
  descreArt.classList.add('h-reset');
  descreArt.classList.add('artist__descr');
  descreArt.textContent = descrArtArr;

  if(sectionArtLink == null) {
    sectionArtSub.replaceWith(subtitleArt);
  } else {
    sectionArtLink.replaceWith(subtitleArt);
  }
  sectionArtImg.replaceWith(imgArt);
  sectionArtH4.replaceWith(h4Art);
  sectionArtDescr.replaceWith(descreArt);

  return;
}
function createPopup(idArt) {
  const popupImg = document.querySelector('.popup__img');
  const popupH4 = document.querySelector('.popup__title');
  const popupSub = document.querySelector('.popup__subtitle');
  const popupYear = document.querySelector('.popup__year');
  const popupDesc = document.querySelector('.popup__desc');

  const altArtArr = popupArt.find(artist => artist.id === idArt).alt;
  const titleArtArr = popupArt.find(artist => artist.id === idArt).title;
  const subtitleArtArr = popupArt.find(artist => artist.id === idArt).subtitle;
  const yearArtArr = popupArt.find(artist => artist.id === idArt).year;
  const descArtArr = popupArt.find(artist => artist.id === idArt).desc;

  const imgArt = document.createElement('img');
  imgArt.classList.add('popup__img');
  imgArt.classList.add(idArt);
  imgArt.alt = altArtArr;

  const h4Art = document.createElement('h3');
  h4Art.classList.add('h-reset');
  h4Art.classList.add('popup__title');
  h4Art.textContent = titleArtArr;

  const subtitleArt = document.createElement('p');
  subtitleArt.classList.add('h-reset');
  subtitleArt.classList.add('popup__subtitle');
  subtitleArt.textContent = subtitleArtArr;

  const yearArt = document.createElement('p');
  yearArt.classList.add('h-reset');
  yearArt.classList.add('popup__year');
  yearArt.textContent = yearArtArr;

  const descArt = document.createElement('p');
  descArt.classList.add('h-reset');
  descArt.classList.add('popup__desc');
  descArt.innerHTML = descArtArr;

  popupImg.replaceWith(imgArt);
  popupH4.replaceWith(h4Art);
  popupSub.replaceWith(subtitleArt);
  popupYear.replaceWith(yearArt);
  popupDesc.replaceWith(descArt);

  return;
}

$(document).ready(function() {
  // slider hero
  const swiperHero = new Swiper('.hero__slider', {
    loop: true,
    autoplay: {
      delay: 9000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  // scroll to link
  $('.nav__link').click(function(e){
		e.preventDefault();

		let href = $(this).attr('href');
		let offset = $(href).offset().top - $('.header').outerHeight();

		$('body, html').animate({
			scrollTop: offset,
		}, 500);
	});

	$('.footer__link').click(function(e){
		e.preventDefault();

		$('body, html').animate({
			scrollTop: 0,
		}, 500);
	});

  // slider gallery
  const swiper = new Swiper('.swiper-container--gallery', {
    spaceBetween: 50,
    slidesPerView: 3,
    slidesPerGroup: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    pagination: {
      el: '.swiper-pagination--gallery',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next--gallery',
      prevEl: '.swiper-button-prev--gallery',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
      },
      658: {
        spaceBetween: 35,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1600: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 2,
      },
    }
  });

  //burger menu
  $('.header__burger').click(function() {
    if (!$('.header__nav').hasClass('burger__nav--open')) {
      $('.header__nav').addClass('burger__nav--open');
      $('.burger__menu').addClass('burger__menu--close');

      $('.nav__link').click(function() {
        $('.header__nav').removeClass('burger__nav--open');
        $('.burger__menu').removeClass('burger__menu--close');
      });

    } else {
      $('.header__nav').removeClass('burger__nav--open');
      $('.burger__menu').removeClass('burger__menu--close');
    }
  });

  //search
    $('.header__search--btn').click(function(event) {
      event.preventDefault();
      $('.header__form').addClass('active');
      $('.header__search--btn').hide();
      $('.header__search--search').addClass('header__search--open');

      $('.header__search--search .search__icon').click(function(event){
        event.stopImmediatePropagation();
        event.preventDefault();
        alert('Поиск!');
        $('.header__form').removeClass('active');
        $('.header__search--search').removeClass('header__search--open');
        $('.header__search--btn').show();
        $('.header__search-open').val('');
      });
    });

    $('.search__close').click(function(event) {
      event.stopImmediatePropagation();
      event.preventDefault();
      $('.header__form').removeClass('active');
      $('.header__search--search').removeClass('header__search--open');
      $('.header__search--btn').show();
      $('.header__search-open').val('');
    });

  //dropdown
  $('.catalogy__link').click(function(event) {
    event.preventDefault();
    let $id = $(this).attr('id');
    $('.catalogy__link').each(function() {
      if( $( this ).attr('id') !== $id) {
        $(this).removeClass('catalogy__link--open');
      }
    });
    $(this).toggleClass('catalogy__link--open');
  });
  $(document).click(function (event) {
    if ( !$('.catalogy__link').is(event.target)) {
      $('.catalogy__link').removeClass('catalogy__link--open');
    }
  });

  /* customer select */
  const element = document.querySelector('.filter__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    placeholder: true,
  });

  /* tabs */
  $('.contry__btn').each(function() {

    $(this).click( function(event) {
      $('.section__wrapper.section__wrapper--catalog').animate({
        opacity: 0,
      }, function(){
        $('.contry__btn').each(function () {
          $(this).removeClass('active');
        });
        $(this).addClass('active');
        $path = event.currentTarget.dataset.path;

        if ($path === 'deu') {

          $('.years__1400').replaceWith(createList(artistSetDeu1400, yearAdd[0], $path));
          $('.years__1500').replaceWith(createList(artistSetDeu1500, yearAdd[1], $path));
          $('.years__1600').replaceWith(createList(artistSetDeu1600, yearAdd[2], $path));
          $('.years__1700').replaceWith(createList(artistSetDeu1700, yearAdd[3], $path));
          $('.years__1800').replaceWith(createList(artistSetDeu1800, yearAdd[4], $path));
          $('.years__1900').replaceWith(createList(artistSetDeu1900, yearAdd[5], $path));
          $('.years__2000').replaceWith(createList(artistSetDeu2000, yearAdd[6], $path));

          /* Select artist */
          createArt(artistsDeu, 'years__1400_deu_0');
          $('#years__1400_deu_0').addClass('active');

          $('.years__btn').each(function() {
            $(this).click( function() {
              $('.years__btn').each(function () {
                $(this).removeClass('active');
              });
              $(this).addClass('active');

              let idArt = $(this).attr('id');

              $('.section__wrap.artist').slideUp(300, 'linear', function(){
                createArt(artistsDeu, idArt);
              });
              $('.section__wrap.artist').slideDown('slow');

            });
          });

        } else if ($path === 'it') {
          $('.years__1400').replaceWith(createList(artistSetIt1400, yearAdd[0], $path));
          $('.years__1500').replaceWith(createList(artistSetIt1500, yearAdd[1], $path));
          $('.years__1600').replaceWith(createList(artistSetIt1600, yearAdd[2], $path));
          $('.years__1700').replaceWith(createList(artistSetIt1700, yearAdd[3], $path));
          $('.years__1800').replaceWith(createList(artistSetIt1800, yearAdd[4], $path));
          $('.years__1900').replaceWith(createList(artistSetIt1900, yearAdd[5], $path));
          $('.years__2000').replaceWith(createList(artistSetIt2000, yearAdd[6], $path));

          /* Select artist */
          createArt(artistsIt, 'years__1400_it_0');
          $('#years__1400_it_0').addClass('active');

          $('.years__btn').each(function() {
            $(this).click( function() {
              $('.section__wrap.artist').slideUp('slow');
              $('.years__btn').each(function () {
                $(this).removeClass('active');
              });
              $(this).addClass('active');
              let idArt = $(this).attr('id');

              $('.section__wrap.artist').slideUp(300, 'linear', function(){
                createArt(artistsIt, idArt);
              });
              $('.section__wrap.artist').slideDown('slow');
            });
          });

        } else if ($path === 'ru') {
          $('.years__1400').replaceWith(createList(artistSetRu1400, yearAdd[0], $path));
          $('.years__1500').replaceWith(createList(artistSetRu1500, yearAdd[1], $path));
          $('.years__1600').replaceWith(createList(artistSetRu1600, yearAdd[2], $path));
          $('.years__1700').replaceWith(createList(artistSetRu1700, yearAdd[3], $path));
          $('.years__1800').replaceWith(createList(artistSetRu1800, yearAdd[4], $path));
          $('.years__1900').replaceWith(createList(artistSetRu1900, yearAdd[5], $path));
          $('.years__2000').replaceWith(createList(artistSetRu2000, yearAdd[6], $path));

          /* Select artist */
          createArt(artistsRu, 'years__1400_ru_0');
          $('#years__1400_ru_0').addClass('active');

          $('.years__btn').each(function() {
            $(this).click( function() {
              $('.section__wrap.artist').slideUp('slow');
              $('.years__btn').each(function () {
                $(this).removeClass('active');
              });
              $(this).addClass('active');
              let idArt = $(this).attr('id');

              $('.section__wrap.artist').slideUp(300, 'linear', function(){
                createArt(artistsRu, idArt);
              });
              $('.section__wrap.artist').slideDown('slow');
            });
          });

        } else if ($path === 'bel') {
          $('.years__1400').replaceWith(createList(artistSetBel1400, yearAdd[0], $path));
          $('.years__1500').replaceWith(createList(artistSetBel1500, yearAdd[1], $path));
          $('.years__1600').replaceWith(createList(artistSetBel1600, yearAdd[2], $path));
          $('.years__1700').replaceWith(createList(artistSetBel1700, yearAdd[3], $path));
          $('.years__1800').replaceWith(createList(artistSetBel1800, yearAdd[4], $path));
          $('.years__1900').replaceWith(createList(artistSetBel1900, yearAdd[5], $path));
          $('.years__2000').replaceWith(createList(artistSetBel2000, yearAdd[6], $path));

          /* Select artist */
          createArt(artistsBel, 'years__1400_bel_0');
          $('#years__1400_bel_0').addClass('active');

          $('.years__btn').each(function() {
            $(this).click( function() {
              $('.section__wrap.artist').slideUp('slow');
              $('.years__btn').each(function () {
                $(this).removeClass('active');
              });
              $(this).addClass('active');
              let idArt = $(this).attr('id');

              $('.section__wrap.artist').slideUp(300, 'linear', function(){
                createArt(artistsBel, idArt);
              });
              $('.section__wrap.artist').slideDown('slow');
            });
          });

        } else {
          $('.years__1400').replaceWith(createList(artistSetFr1400, yearAdd[0]));
          $('.years__1500').replaceWith(createList(artistSetFr1500, yearAdd[1]));
          $('.years__1600').replaceWith(createList(artistSetFr1600, yearAdd[2]));
          $('.years__1700').replaceWith(createList(artistSetFr1700, yearAdd[3]));
          $('.years__1800').replaceWith(createList(artistSetFr1800, yearAdd[4]));
          $('.years__1900').replaceWith(createList(artistSetFr1900, yearAdd[5]));
          $('.years__2000').replaceWith(createList(artistSetFr2000, yearAdd[6]));

          /* Select artist */
          createArt(artistsFr, 'years__1400_fr_0');
          $('#years__1400_fr_0').addClass('active');

          $('.years__btn').each(function() {
            $(this).click( function() {
              $('.section__wrap.artist').slideUp('slow');
              $('.years__btn').each(function () {
                $(this).removeClass('active');
              });
              $(this).addClass('active');
              let idArt = $(this).attr('id');

              $('.section__wrap.artist').slideUp(300, 'linear', function(){
                createArt(artistsFr, idArt);
              });
              $('.section__wrap.artist').slideDown('slow');

            });
          });
        }
      });
      $('.section__wrapper.section__wrapper--catalog').animate({
        opacity: 1,
      });
    });
  });

  /* accordion */
  $(function(){

    $('.years__list').accordion({
      collapsible: true,
      heightStyle: 'content',
      active: false,
    });

    $('.years__item').each(function() {
      $(this).click( function() {
        let hasClass = $(this).hasClass('active');
        $('.years__item').each(function() {
          $(this).removeClass('active');
        });
        if (hasClass) {
          $(this).removeClass('active');
        } else {
          $(this).addClass('active');
        }
      });
    });

    $('.years__item').each(function() {
      $(this).keydown( function() {
        if (window.event.key === "Enter") {
          let hasClass = $(this).hasClass('active');
          $('.years__item').each(function() {
            $(this).removeClass('active');
          });
          if (hasClass) {
            $(this).removeClass('active');
          } else {
            $(this).addClass('active');
            $('.years__title').addClass('ui-state-active');
          }
        }
      });
    });

    $('.years__1400').replaceWith(createList(artistSetFr1400, yearAdd[0]));
    $('.years__1500').replaceWith(createList(artistSetFr1500, yearAdd[1]));
    $('.years__1600').replaceWith(createList(artistSetFr1600, yearAdd[2]));
    $('.years__1700').replaceWith(createList(artistSetFr1700, yearAdd[3]));
    $('.years__1800').replaceWith(createList(artistSetFr1800, yearAdd[4]));
    $('.years__1900').replaceWith(createList(artistSetFr1900, yearAdd[5]));
    $('.years__2000').replaceWith(createList(artistSetFr2000, yearAdd[6]));

    /* Select artist */
    createArt(artistsFr, 'years__1400_fr_0');
    $('#years__1400_fr_0').addClass('active');

    $('.years__btn').each(function() {
      $(this).click( function() {
        $('.years__btn').each(function () {
          $(this).removeClass('active');
        });
        $(this).addClass('active');
        let idArt = $(this).attr('id');

        $('.section__wrap.artist').slideUp(300, 'linear', function(){
          createArt(artistsFr, idArt);
        });
        $('.section__wrap.artist').slideDown('slow');
      });
    });

    $('.section__wrapper.section__wrapper--catalog').addClass('active');
  });

  // events
  $('.btn--events').click(function(event) {
    event.preventDefault();
    $(this).addClass('hidden');
    $('.events__item').each(function() {
      $(this).removeClass('hidden');
      $(this).css('display','block');
    });
  });

  // slider-events
  const swiperEvents = document.querySelector('.swiper-container--events');
  let myswiperEvents;

  function mobileSlider() {
    if(window.innerWidth <= 658 && swiperEvents.dataset.mobile == 'false') {
      $('.btn--events').addClass('hidden');
      $('.events__item').each(function() {
        $(this).removeClass('hidden');
        $(this).css('display','flex');
      });
      myswiperEvents = new Swiper(swiperEvents, {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        slideClass: 'swiper-slide--events',
        pagination: {
          el: '.swiper-pagination--events',
          type: 'bullets',
        },
      });

      swiperEvents.dataset.mobile = 'true';
    }

    if(window.innerWidth > 658) {
      $('.btn--events').removeClass('hidden');
      $('.events__item').each(function() {
        $(this).addClass('hidden');
      });
      const oneEvent = $('.events__item')[0];
      const twoEvent = $('.events__item')[1];
      const thrEvent = $('.events__item')[2];
      oneEvent.classList.remove('hidden');
      twoEvent.classList.remove('hidden');
      thrEvent.classList.remove('hidden');

      swiperEvents.dataset.mobile = 'false';

      if(swiperEvents.classList.contains('swiper-container-initialized')) {
        myswiperEvents.destroy();
      }
    }
  }

  mobileSlider();

  window.addEventListener('resize', () => {
    mobileSlider();
  });

  // slider-edition

  const swiperEdition = document.querySelector('.swiper-container--edition');
  let myswiperEdition;

  function mobileSliderEdition() {
    if(window.innerWidth >= 658 && swiperEdition.dataset.mobile == 'false') {
      myswiperEdition = new Swiper(swiperEdition, {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        slideClass: 'swiper-slide--edition',
        pagination: {
          el: '.swiper-pagination--edition',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next--edition',
          prevEl: '.swiper-button-prev--edition',
        },
        breakpoints: {
          658: {
            spaceBetween: 37,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          861: {
            spaceBetween: 50,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1391: {
            spaceBetween: 50,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }
      });

      swiperEdition.dataset.mobile = 'true';
    }

    if(window.innerWidth < 658) {
      swiperEdition.dataset.mobile = 'false';

      if(swiperEdition.classList.contains('swiper-container-initialized')) {
        myswiperEdition.destroy();
      }
    }
  }

  mobileSliderEdition();

  window.addEventListener('resize', () => {
    mobileSliderEdition();
  });

  // editon-catalog
  function editionChoice() {
    $('.edition__choice').each(function() {
      if ($(this).children().prop('checked')) {
        $(this).addClass('active');
        $(this).addClass('edition__choice--close');
      } else {
        $(this).removeClass('active');
        $(this).removeClass('edition__choice--close');
      }
    });
  }

  function editionLoaded() {
    $('.edition__title').click(function() {
      if($('.edition__title').hasClass('is-active')) {
        $('.edition__title').removeClass('is-active');
        editionChoice();
      } else {
        $('.edition__title').addClass('is-active');
      }
    });

    $('.edition__choice').each(function () {
      $(this).click(function() {
        if (!$(this).children().prop('checked')) {
          $(this).addClass('active');
          $(this).addClass('edition__choice--close');
          $(this).children().prop( "checked", true );
        } else {
          $(this).removeClass('active');
          $(this).removeClass('edition__choice--close');
          $(this).children().prop( "checked", false );
        }
      });
    });
  }

  function editionCategory() {
    if(window.innerWidth < 767) {
      $('.edition__title').removeClass('is-active');
      $('.edition__title').off();
      editionChoice();
      editionLoaded();
    }
  }

  editionCategory();

  let timer;
  window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(editionCategory, 500);
  });

  // projects slider
  const swiperProjects = new Swiper('.swiper-container--projects', {
    spaceBetween: 50,
    slidesPerView: 3,
    slideClass: 'swiper-slide--projects',
    navigation: {
      nextEl: '.swiper-button-next--projects',
      prevEl: '.swiper-button-prev--projects',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      658: {
        spaceBetween: 35,
        slidesPerView: 2,
      },
      891: {
        spaceBetween: 50,
        slidesPerView: 2,
      },
      1250: {
        spaceBetween: 50,
        slidesPerView: 3,
      },
    }
  });

    // customer Yandex-map
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("contacts__map", {
          center: [55.75890365305267,37.63876817224112],
          zoom: 14,
          controls: ['geolocationControl']
      }, {
          // Зададим опции для элементов управления.
          geolocationControlFloat: 'right'
      });

      // Создадим пользовательский макет ползунка масштаба.
      ZoomLayout = ymaps.templateLayoutFactory.createClass("<div class='custom-zoom'>" +
      "<div class='zoom-in' id='zoom-in' class='btn'><span class='icon-plus'>+</span></div>" +
      "<div class='zoom-out' id='zoom-out' class='btn'><span class='icon-minus'>&ndash;</span></div>" +
      "</div>", {

      build: function () {
          ZoomLayout.superclass.build.call(this);
          this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
          this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);
          $('#zoom-in').bind('click', this.zoomInCallback);
          $('#zoom-out').bind('click', this.zoomOutCallback);
      },

      clear: function () {
          $('#zoom-in').unbind('click', this.zoomInCallback);
          $('#zoom-out').unbind('click', this.zoomOutCallback);

          ZoomLayout.superclass.clear.call(this);
      },

      zoomIn: function () {
          var map = this.getData().control.getMap();
          map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
      },

      zoomOut: function () {
          var map = this.getData().control.getMap();
          map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
      }
    }),
    zoomControl = new ymaps.control.ZoomControl({options: {layout: ZoomLayout}});

    var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/contacts/point.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [0, 0]
    });

    myMap.controls.add(zoomControl);
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
    myMap.behaviors.disable(['scrollZoom']);

    function checkWidth() {
      if(window.innerWidth < 1361) {
        myMap.setCenter([55.75846806898367,37.60108849999989]);
      } else {
        myMap.setCenter([55.75890365305267,37.63876817224112]);
      }
      if(window.innerWidth < 1250) {
        myMap.setCenter([55.76083952313602,37.61705300805652]);
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove(zoomControl);
      } else {
        myMap.controls.add(zoomControl);
        myMap.controls.add('geolocationControl');
      }
      if(window.innerWidth < 861) {
        myMap.setCenter([55.760161979584744,37.61018655297841]);
      }
      //
    }

    checkWidth();

    let timer;
    window.addEventListener('resize', () => {
      clearTimeout(timer);
      timer = setTimeout(checkWidth, 500);
    });
  }

  // customer input mask
  let selector = document.querySelector("input[type='tel']");
  let im = new Inputmask("+7 (999) - 999-99-99");
  im.mask(selector);

  // customer input validate
  new JustValidate('.form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 15,
        strength: {
          custom: '^[А-ЯЁа-яё]*$'
        }
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        }
      },
      mail: {
        required: true,
        email: true
      },
    },
    messages: {
      name: 'Недопустимый формат',
      tel: 'Недопустимый формат',
    },
    submitHandler(form) {
      let th = $(form);

      $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize(),
      }).done(() => {
        th.trigger('reset');
      });

      return false;
    }
  });

  // popup
  $('.swiper-slide--gallery').click(function() {
    let idArt = $(this).attr('id');
    createPopup(idArt);
    document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
    document.querySelector('.header').style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
    $('.body').addClass('popup-active');
    $('.popup').addClass('is-active');
    $('.popup__wrap').addClass('is-active');

    $('.popup__btn').click(function() {
      document.body.style.paddingRight = 0;
      document.querySelector('.header').style.paddingRight = 0;
      $('.body').removeClass('popup-active');
      $('.popup').removeClass('is-active');
      $('.popup__wrap').removeClass('is-active');
    });

    $(document).click(function (event) {
      if ($('.popup').is(event.target)) {
        document.body.style.paddingRight = 0;
        document.querySelector('.header').style.paddingRight = 0;
        $('.popup').removeClass('is-active');
        $('.body').removeClass('popup-active');
        $('.popup__wrap').removeClass('is-active');
      }
    });
  });

  /* scroll to artist */
  function scrollToArt(offset) {
    if(window.innerWidth < 982) {
      $('body, html').animate({
        scrollTop: offset,
      }, 300);
    }
  }

  $('.years__item').click(function(){
    $('.years__art').click(function() {
        let artBlock = document.querySelector('.section__wrap.artist');
        let offset = artBlock.offsetTop - $('.header').outerHeight() - 50;
        scrollToArt(offset);
    });
  });
});



