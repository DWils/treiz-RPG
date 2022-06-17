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
    champs = document.querySelectorAll('.form')
    // class .form(ou autre) sur tous les input
    champs.forEach(x => {
      console.log(x.value)
    });
  }
  
  document.querySelector('#myform').addEventListener('btn-ajout', addHero);





  const myForm = document.querySelector("#myform");
  const nameInput = document.querySelector("#nom");
  const classeInput = document.querySelector("#classe");
  const raceInput = document.querySelector("#race");
  const msg = document.querySelector(".msg");
  const userList = document.querySelector("#users");
  myForm.addEventListener("submit", onSubmit);
  function onSubmit(e) {
      e.preventDefault();
      if (nameInput.value === "" || classeInput.value === "" || raceInput.value ==="" ) {
          msg.classList.add("error");
          msg.innerHTML = "Merci de compléter tous les champs";
          setTimeout(() => {
              msg.classList.remove("error");
              msg.innerHTML = "";
          }, 2000);
      }
      else {
          const li = document.createElement("li");
          li.appendChild(
          document.createTextNode(`${nameInput.value}:${classeInput.value}`));
          document.createTextNode(`${raceInput.value}`);
          li.innerHTML = `<strong>${nameInput.value}</strong> ${classeInput.value} ${raceInput.value}`;
          userList.appendChild(li);
  
          nameInput.value = ""+" - " +classeInput.value + " - "+ raceInput.value;
          
      }
  }






//     function CreerPerso(){
//     const carouselinner = document.querySelector(".carousel-inner");
//     console.log(carouselinner)
//     const divcarousel = carouselinner.createElement("div");
//     console.log(carouselinner)
//     const carouselitem = divcarousel.createElement(".carousel-item");
//     console.log(carouselinner)
//     const h5 = carouselitem.createElement("h5");
//     const img = carouselitem.createElement("img");
//     console.log(carouselinner)
//     carouselitem.innerHTML.document.querySelector(h5) = `${"#nom".value}`;           // je veux qu'il s'intégre dans un h5
//     carouselitem.innerHTML.document.querySelector(h5) = `${"#classe".value}`;         // je veux qu'il s'intégre dans le h5 avec le nom séparé d'un tiret
//     carouselitem.innerHTML.document.querySelector(img) = `${"#fichier".value}`;       //je veux qu'il s'intégre dans un <img src="">
//     carouselinner.appendChild(carouselitem);
// }



// document.querySelector('#btn-ajout').addEventListener("click",CreerPerso());


