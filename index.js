window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

// crouselk logic


  const carouselElement = document.getElementById('carouselExampleFade');
  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 2000, // Speed up the carousel interval to 2 seconds
    ride: 'carousel'
  });



//   box up logic

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


  
  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });


//   about-box
document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.getElementById('about-us');
  
    function handleScroll() {
      const sectionPos = aboutSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight;

      if (sectionPos < screenPos - 100) {
        aboutSection.classList.add('slide-in');
      } else {
        aboutSection.classList.remove('slide-in');
      }
    }

    window.addEventListener('scroll', handleScroll);

    // Trigger the function in case the section is already in view on page load
    handleScroll();
});

  

  
// gallery image box
document.addEventListener('DOMContentLoaded', function () {
    const animateSlideElements = document.querySelectorAll('.animate-slide');

    function handleScrollAnimation() {
        animateSlideElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const viewPortHeight = window.innerHeight;

            if (elementPosition < viewPortHeight - 100) {
                element.classList.add('animate-active');
            }
        });
    }

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Trigger animation on page load if elements are in viewport
})

// service box
document.addEventListener('DOMContentLoaded', function () {
    const serviceBoxes = document.querySelectorAll('.service-box');
  
    function handleScroll() {
      serviceBoxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
  
        if (boxPosition < screenPosition - 50) {
          box.classList.add('in-view');
        } else {
          box.classList.remove('in-view'); // This removes the class when scrolling up
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
  
    // Trigger the scroll handler in case the boxes are already in view on page load
    handleScroll();
  });
  
  