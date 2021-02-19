const view = document.querySelector('.view');
const gallery_container = document.querySelector('.grid');
const view_text = document.querySelector('.view_text');
let images_mini=[
    
];
let currentImage = 0;

let images = [
    "https://zg66.ru/images/2020/07/15/black-sea_obl.jpg",
    "https://language.az/wp-content/uploads/2020/06/ostrovok-filters-4-10.46.2238.jpg",
    "https://pipsik.club/wp-content/uploads/2019/06/water-e1569027452631.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8Y7MAIsR0kBFygCBp1BtinTculSu9YHnlQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC57OOMEG4oltycXOIMu1pv3-tDt5TBMqQ6g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lqZZ_KUTqKhLC3xvvqxBU5xHq-VTE-kp1A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4i2JDYbZCFjURc4v4S8aMbOZnSh_K4tWVsA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28TA8nwwEEqRS-SvxcN-uQdHCPihN4fcqpg&usqp=CAU",
    "https://lh3.googleusercontent.com/proxy/OproeLXUTVeNTlsibMerTKkUXOvYhxhbdhco0gCHzD1Qzj74l1deaqHtzIHilLrvBHe-br-2vkS3Xzbm_CSUK3VV3_r2HubaMFVQWs38PCdyW_tn_S2InWe1zl14GGRYslj--R2ygkSqxtjLFt21X70pZD4DrIpL8FhFdO6GG3DxeFgRKAwuhhIPDcDwdDon3bB1S5NJ"


];

function start() {
    changeImage(images[currentImage]);
    createPictures();
}
view.addEventListener('click', event => {
    changeImage(images[currentImage]);
});

function changeImage(a) {
    view_text.textContent = currentImage+1 + "/" + images.length;
    view.style.content = "url(" + a + ")";
    if (currentImage < images.length - 1) {
        currentImage++;
    } else {
        currentImage = 0;
    }




}

function createPictures() {

    for (let i = 0; i < images.length; i++) {
        let newDiv = document.createElement('image');
        newDiv.className = "pic";
        newDiv.setAttribute("num", i)
        newDiv.style.backgroundImage = "url(" + images[i] + ")";
           images_mini.push(newDiv);
        gallery_container.append(newDiv)

        newDiv.addEventListener("click", event => {
            currentImage=i;
            changeImage(images[currentImage]);
            
        })


    };

}