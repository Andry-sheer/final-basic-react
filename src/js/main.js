
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
  const tabsItem = document.querySelectorAll('.tabs__links-item');
  const tabsContent = document.querySelectorAll('.tabs__content-item');

  tabsItem.forEach((tab, index) => {
    tab.addEventListener('click', ()=> {
      tabsContent.forEach((content)=> {
        content.classList.remove('active');
      })

      tabsItem.forEach((content)=> {
        content.classList.remove('active');
      })

      tabsItem[index].classList.add('active');
      tabsContent[index].classList.add('active');
    })
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