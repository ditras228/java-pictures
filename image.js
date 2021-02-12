const slides = document.querySelector('.slides');
let currentImage = 0;

let images = [
    "https://zg66.ru/images/2020/07/15/black-sea_obl.jpg",
    "https://language.az/wp-content/uploads/2020/06/ostrovok-filters-4-10.46.2238.jpg",
    "https://pipsik.club/wp-content/uploads/2019/06/water-e1569027452631.jpg"

];

function start() {
    changeImage(images[0]);
}
slides.addEventListener('click', event => {
    changeImage(images[currentImage]);
});

function changeImage(a) {
    slides.style.backgroundImage = "url(" + a + ")";
    if (currentImage < images.length - 1) {
        currentImage++;
    } else {
        currentImage = 0;
    }

}