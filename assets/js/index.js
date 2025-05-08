





document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
} );

document.querySelectorAll('.xgn-faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
document.querySelectorAll('.xgn-hamburger').forEach(item => {
    item.addEventListener('click', () => {
       const mobileHeader= document.querySelector('.xgn-section-header')
        mobileHeader.classList.toggle('active');
    });
});










const backToTop = document.getElementById('back_to_top');

if(backToTop){
    // Следим за прокруткой
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

// Скролл вверх при клике
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

}






