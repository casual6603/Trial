let viewportWidth = window.innerWidth;
let halfViewport = viewportWidth/2



function basic_movement() {
    const text_elem = document.getElementById("Test");


    text_elem.animate(
        [
            {opacity: 0, transform: 'translateX(-100%)'},
            {opacity: 1, transform: 'translateX(0%)'}
        ],
        {
            fill: 'forwards',
            duration: 600,
            easing: 'ease-in-out'

        }


    )
}

window.onload = basic_movement;
