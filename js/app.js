let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides")
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }       
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.add("hidden")
            slides[i].classList.remove("block")
        }
            
        slides[slideIndex - 1].classList.remove("hidden")
        slides[slideIndex - 1].classList.add("block")
        slides[slideIndex - 1].classList.add("fade-animation")   
        // Remover la animación después de que termine para poder aplicarla de nuevo
        setTimeout(() => {
            slides[slideIndex - 1].classList.remove("fade-animation")
            }, 1500)
}

// Funcionalidad para controlar el slideshow con las flechas del teclado
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
            event.preventDefault();
            plusSlides(-1)
            break;
        case 'ArrowRight':
            event.preventDefault();
            plusSlides(1)
            break;
        }   
    }
);
