let menuBtn = document.getElementById('ham__btn');
let exMenu = document.getElementById('nav__menu');
let closeMenu = document.getElementById('head');


function hamShow() {
  
    
  if(exMenu.style.display === 'none') {
    exMenu.style.display = 'block'
  }else {
    exMenu.style.display = 'none'
  }
};

menuBtn.addEventListener('click',hamShow);

function extraClose() {
    exMenu.style.display = 'none'
}

closeMenu.addEventListener('click',extraClose);