var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




  function addHero(e){
    e.preventDefault()
    champs = document.querySelectorAll('#form')
    // class .form(ou autre) sur tous les input
    champs.forEach(x => {
      console.log(x.value)
    });
  }
  
  document.querySelector('#myform').addEventListener('submit', addHero)