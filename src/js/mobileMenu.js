const mobileButtonHamburger = document.querySelector('.mobile-button--hamburger');

function toggleMobileMenu() {
    const navigation = document.querySelector('.page-navigation');
    navigation.style.display = '';
}

mobileButtonHamburger.addEventListener('click', toggleMobileMenu());
