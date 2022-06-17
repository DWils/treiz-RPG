document.querySelector('#form').addEventListener('submit', addHero)
function addHero(e){
    e.preventDefault()
    champs = document.querySelectorAll('.form')
    // class .form(ou autre) sur tous les input
    champs.forEach(x => {
      console.log(x.value)
    });
  }