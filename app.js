const buttonOpen = document.getElementById("mordalOpen");
const buttonClose = document.querySelector(".mordalClose");
const mordal = document.getElementById("mordal");

buttonOpen.addEventListener("click", () => {
    //モーダルを開く
    mordal.style.display = "block";
});

buttonClose.addEventListener("click", () => {
    //モーダルを閉じる
    mordal.style.display = "none";
});

document.addEventListener("click", (e) => {
    // console.log(e.target);
    if(e.target == mordal){
        mordal.style.display = "none";
    }
});