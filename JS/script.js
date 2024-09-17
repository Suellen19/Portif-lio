const seta = document.querySelector('.seta');

seta.addEventListener('click', function() {
    window.scrollTo({
         top: 0,
         behavior: 'smooth'
    });
});

function trocarImagem() {
    let img = document.getElementById("brazil-img");

    if (img && img.alt === "imagem-brasil") {
        img.src = "img/eua (2).png";
        img.alt = "imagem-eua";
        mudarIdioma("en");
    } else if (img) {
        img.src = "img/brazil (2).png";
        img.alt = "imagem-brasil";
        mudarIdioma("pt");
    }
}

function mudarIdioma(idioma) {
    const elements = document.querySelectorAll('[data-en], [data-pt]');
   
    elements.forEach(el => {
        if (idioma === 'en') {
            el.textContent = el.getAttribute('data-en'); 
        } else {
            el.textContent = el.getAttribute('data-pt');  
        }
    });

    console.log(`Idioma alterado para: ${idioma}`);  
}

function checkInternetConnection() {
    const loader = document.getElementById('loader');
    const content = document.querySelector('.content-principal'); 

    if (loader) {
        loader.style.display = navigator.onLine ? 'none' : 'flex';
    }

    if (content) {
        content.style.display = navigator.onLine ? 'block' : 'none';
    }

    if (!navigator.onLine) {
        alert('Você precisa estar conectado à internet para acessar este site.');
    }
}

window.onload = function () {
    checkInternetConnection();
    window.addEventListener('online', checkInternetConnection);
    window.addEventListener('offline', checkInternetConnection);
};

function scrollToSection() {
    const section = document.getElementById("about-section");
    section.scrollIntoView({ behavior: 'smooth' });
}