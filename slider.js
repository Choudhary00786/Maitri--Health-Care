let images = [
    
    "maitri_2_pic.png",
    "maitri_1_pic.png",
    "maitri_3_pic.png",
    
];

let index = 0;
let img = document.getElementById("hero1");

function slider() {
    img.style.opacity = 0; 

    setTimeout(() => {
        img.src = images[index];
        img.style.opacity = 1;
        index++;

        if (index >= images.length) {
            index = 0;
        }
    }, 500); 
}

setInterval(slider, 3000); // Change every 3 seconds