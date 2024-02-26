let viewportWidth = window.innerWidth;
let halfViewport = viewportWidth/2



function basic_movement() {
    const text_elem = document.getElementById("Test");

    text_elem.animate(
        [
            {opacity: 0},
            {opacity: 1}
        ],
        {
            fill: 'forwards',
            duration: 6000,
            easing: 'ease-in-out'

        }


    )
}

window.onload = basic_movement;
