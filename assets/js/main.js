/* SHOW MENU */
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// PROJECTS 
let swiperProjetcs = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
    },
  });
  
  // HOBBIES
  let swiperHobbies = new Swiper(".hobbies__container", {
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // EMAILJS
  const contactForm = document.getElementById('contact-form'),
        contactName = document.getElementById('contact-name'),
        contactEmail = document.getElementById('contact-email'),
        contactMessage = document.getElementById('contact-message'),
        contactText = document.getElementById('contact-text')
  
  const sendEmail = (e) =>{
      e.preventDefault()

      if(contactName.value === '' || contactEmail.value === '' || contactMessage.value === ''){
          contactText.classList.remove('color-blue')
          contactText.classList.add('color-red')

          contactText.textContent = 'Remplir tous les champs 📩'
      }else{
        emailjs.sendForm('service_cu5xq1k','template_37lafsr','#contact-form','tYy2sEqHkuNqP3hoU')
          .then(() =>{
            contactText.classList.add('color-blue')
            contactText.textContent = 'Message envoyé ✅'

            setTimeout(() =>{
              contactText.textContent = ''
            }, 5000)
          }, (error) =>{
            alert('Hmm.. Il y a un problème quelque part 🤔', error)
          })

        contactName.value =''
        contactEmail.value =''
        contactMessage.value =''
      }
  }
  contactForm.addEventListener('submit', sendEmail)

  // SCROLL SECTIONS ACTIVE LINK
  const sections = document.querySelectorAll('section[id]')

  const scrollActive = () =>{
    const scrollY = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
    })
  }
  window.addEventListener('scroll', scrollActive)

  // SCROLL UP
  const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

  // THEME DARK LIGHT
  const themeButton = document.getElementById('theme-button')
  const darkTheme = 'dark-theme'
  const iconTheme = 'ri-sun-line'

  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')

  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

  if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
  }

themeButton.addEventListener('click', () =>{
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/* Change background color */
const scrollHeader = () =>{
  const header = document.getElementById('header')

  this.scrollY >= 50 ? header.classList.add('bg-header')
                    : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
  //reset: true 
})
sr.reveal(`.home__data, .projects__container, .hobbies__container, .footer__container`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval:100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.qualification__content, .services__card`, {interval: 100})