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