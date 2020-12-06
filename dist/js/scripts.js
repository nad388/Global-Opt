// hamburger

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})


// catalog

function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  };
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');


//slider 

function slider() {
  let slideIndex = 1,
      slides = document.querySelectorAll('.carousel-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next');

  showSlides(slideIndex);

  function showSlides(n) {
      if (n > slides.length) {
          slideIndex = 1;
      }
      if (n < 1) {
          slideIndex = slides.length;
      }
      slides.forEach((item) => item.style.display = 'none');

      slides[slideIndex - 1].style.display = 'block';

  }
  function plusSlides(n) {
      showSlides(slideIndex += n);
  }
 

  prev.addEventListener('click', function() {
      plusSlides(-1);
  });
  next.addEventListener('click', function() {
      plusSlides(1);
  });
}
slider();