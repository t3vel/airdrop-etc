// Константи
const registerForm = document.getElementById("registerForm");
const loginButton = document.querySelector('.header__button-login');
const walletForm = document.querySelector('.register__form');
const scrollToTopBtn = document.getElementById("scrollToTop");
const burgerButton = document.querySelector(".header__burger");
const mobileNav = document.querySelector(".header__nav--mobile");
const accordionHeader = document.querySelectorAll('.accordion-header');

// Активний клас для посилань в хедері
document.querySelectorAll('.header__link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.header__link--active')?.classList.remove('header__link--active');
        this.classList.add('header__link--active');
    });
});

// Плавний скрол до секції реєстрації
loginButton.addEventListener('click', function () {
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
});

// Валідність гаманця
walletForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const walletInput = document.querySelector('#wallet');
    const walletAddress = walletInput.value.trim();
    const walletRegex = /^0x[a-fA-F0-9]{40}$/;

    if (walletRegex.test(walletAddress)) {
        showConfirmation();
    } else {
        alert('Invalid wallet address! Please enter a valid Ethereum or BSC address.');
    }
});

function showConfirmation() {
    document.getElementById("confirmationMessage").style.display = "block";
    registerForm.reset();
}

// Показ кнопки "Вгору" при скролі
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollPosition / scrollHeight > 0.4) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

// Плавний скрол на початок сторінки
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Анімація при прокручуванні
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));
});


burgerButton.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    burgerButton.classList.toggle("open");
});


const menuLinks = document.querySelectorAll(".header__nav--mobile .header__link");


menuLinks[0].classList.add("header__link--active");


menuLinks.forEach(link => {
    link.addEventListener("click", () => {

        menuLinks.forEach(link => link.classList.remove("header__link--active"));


        link.classList.add("header__link--active");


        mobileNav.classList.remove("active");
        burgerButton.classList.remove("open");
    });
});

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
            }
        });
        accordionItem.classList.toggle('active');
    });
});


// Автоматичне закриття акордеонів
accordionHeader.forEach(header => {
    header.addEventListener('click', () => {
        accordionHeader.forEach(h => {
            if (h !== header) {
                h.classList.remove('active');
                h.nextElementSibling.classList.remove('active');
            }
        });

        header.classList.toggle('active');
        header.nextElementSibling.classList.toggle('active');
    });
});
