let viewportWidth = window.innerWidth;
let halfViewport = viewportWidth/2



function basic_movement() {
    const text_elem = document.getElementById("Test");


    text_elem.animate([CSSTranslate(0, 0), CSSTranslate(1000, 0)], {
    duration: 1000,
    fill: 'forwards'
  });
}

window.onload = basic_movement;
