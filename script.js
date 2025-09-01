  
        function smoothScroll(target, duration) {
            var targetElement = document.querySelector(target);
            if (!targetElement) return;
            
            var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            var startPosition = window.pageYOffset;
            var distance = targetPosition - startPosition;
            var startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                var timeElapsed = currentTime - startTime;
                var run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }

        document.addEventListener('DOMContentLoaded', function() {
            
            var links = document.querySelectorAll('a[href^="#"]');
            
            links.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    var target = this.getAttribute('href');
                    if (target && target !== '#') {
                        smoothScroll(target, 800); 
                    }
                });
            });
        });

        
        if ('scrollBehavior' in document.documentElement.style) {
            document.addEventListener('DOMContentLoaded', function() {
                var links = document.querySelectorAll('a[href^="#"]');
                links.forEach(function(link) {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        var targetId = this.getAttribute('href');
                        if (targetId && targetId !== '#') {
                            var targetElement = document.querySelector(targetId);
                            if (targetElement) {
                                targetElement.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }
                        }
                    });
                });
            });
        }

  const modal = document.getElementById('aboutModal');
  const openBtn = document.querySelector('.section-2 .btn-1');
  const closeBtn = modal.querySelector('.close');


  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
    document.documentElement.classList.add('modal-open');
  });
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); 
    document.documentElement.classList.remove('modal-open');

  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });
