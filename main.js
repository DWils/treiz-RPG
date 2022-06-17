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
    champs = document.querySelectorAll('#myform')
    // class .form(ou autre) sur tous les input
    champs.forEach(x => {
      console.log(x.value)
    });
  }
  
  document.querySelector('#myform').addEventListener('btn-ajout', addHero);









const carouselinner = document.querySelector(".carousel-inner");

function CreerPerso(a){
    if (a = document.querySelector('#myform').addEventListener("click","btn-ajout")){  // Si a est égale au clic fait sur le bouton
        const divcarousel = document.createElement("div");
        const carouselitem = divcarousel.createElement(".carousel-item");
        carouselitem.innerHTML.document.querySelector("h5") = `${"#nom".value}`; // je veux qu'il s'intégre dans un h5
        carouselitem.innerHTML.document.querySelector("h5") = `${"#classe".value}`; // je veux qu'il s'intégre dans le h5 avec le nom séparé d'un tiret
        carouselitem.innerHTML.document.querySelector("img") = `${"#fichier".value}`; //je veux qu'il s'intégre dans un <img src="">
        carouselinner.appendChild(carouselitem);
    }
}
