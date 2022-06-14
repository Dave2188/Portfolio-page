let menuBtn = document.getElementById('ham__btn');
let exMenu = document.getElementById('nav__menu');

function hamShow() {
  if(exMenu.style.display === 'none') {
    exMenu.style.display = 'block'
  }else {
    exMenu.style.display = 'none'
  }
};

menuBtn.addEventListener('click',hamShow);
