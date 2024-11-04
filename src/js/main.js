
(()=> {
  const burgerOpen = document.querySelector('.header__box-burger')
  const burgerClose = document.querySelector('.header__nav-close')
  const navigationMenu = document.querySelector('.header__nav')

  burgerOpen.addEventListener('click', () => {
    navigationMenu.classList.add('active')
  })

  burgerClose.addEventListener('click', () => {
    navigationMenu.classList.remove('active')
  })
})();



(()=> {
  const publicationButton = document.querySelectorAll('.publications__slide-article');
  publicationButton.forEach((item, index)=> {
    item.addEventListener('click', ()=> {
      publicationButton.forEach((item)=> {
        item.classList.remove('active');
      })
      
      publicationButton[index].classList.add('active');
    })
  })
})();

(()=> {
  const langs = document.querySelectorAll('.header__langs-link');
  langs.forEach((lang, index)=> {
    lang.addEventListener('click', ()=> {
      langs.forEach((lang)=> {
        lang.classList.remove('active');
      })
      
      langs[index].classList.add('active');
    })
  })
})();