document.addEventListener("click", (e) => {

    var snow = document.createElement("span");
    snow.classList.add("snow");


    // Fare İmleci
    snow.style.left = e.offsetX + "px";
    snow.style.top = e.offsetY + "px";



    //KaR Tanesi genişlik-yüksekliği-random(20-100)


    var size = Math.random() * (100 - 20 + 1) + 20;

    snow.style.width = size + "px";
    snow.style.height = size + "px";

    document.body.appendChild(snow);


    setTimeout(() => {
        snow.remove();

    }, 1000);



})