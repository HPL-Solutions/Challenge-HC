const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-item a");

hamburger.addEventListener("click", () => nav.classList.toggle("active"))

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (nav.classList.contains("active")) { 
            nav.classList.remove("active"); 
        }
    });
});

const perguntasFaq = document.querySelectorAll(".pergunta-faq");

perguntasFaq.forEach(pergunta => {
    pergunta.addEventListener("click", () => {
        const itemFaq = pergunta.closest(".item-faq"); 
        itemFaq.classList.toggle("ativo"); 
    });
});