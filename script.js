

  const navLinks = document.querySelectorAll('nav ul li a');

  for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const headerHeight = document.querySelector('nav').offsetHeight;

    window.scrollTo({
      top: targetElement.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  }


