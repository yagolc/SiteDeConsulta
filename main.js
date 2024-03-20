function onScroll(){

  let nave = document.getElementById('navigation');

  if(scrollY == 0){
    nave.classList.remove('scroll')
  }else{
    nave.classList.add('scroll') 
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}