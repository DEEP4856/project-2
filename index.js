window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });



  const carouselElement = document.getElementById('carouselExampleFade');
  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 2000, // Speed up the carousel interval to 2 seconds
    ride: 'carousel'
  });

  window.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.box');
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if(boxTop < triggerBottom) {
        box.classList.add('visible');
      } else {
        box.classList.remove('visible');
      }
    });
  });


//   counter logic
$(document).ready(function() {
    let counterElement = $('#counter');
    let count = 0;
    let target = 200;
    let speed = 10;
    let hasCounted = false;

    function updateCounter() {
      if (count < target) {
        count++;
        counterElement.text(count + '+');
        setTimeout(updateCounter, speed);
      }
    }

    $(window).on('scroll', function() {
      let counterBoxOffset = $('#counterBox').offset().top;
      let windowHeight = $(window).height();
      let scrollTop = $(window).scrollTop();

      if (scrollTop + windowHeight > counterBoxOffset && !hasCounted) {
        $('#counterBox').removeClass('hidden');
        updateCounter();
        hasCounted = true;
      }
    });
  });