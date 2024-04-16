let caption = document.querySelector("h1");
let img1 = document.querySelector(".player1img");
let img2 = document.querySelector(".player2img");


const img1Src = Math.floor(Math.random()*6) + 1;
img1.setAttribute("src",`./img/dice-${img1Src}.svg`);

console.log(img1Src);

const img2Src = Math.floor(Math.random()*6) + 1;
img2.setAttribute("src",`./img/dice-${img2Src}.svg`);

console.log(img2Src);

if(img1Src>img2Src){
    caption.innerText ="Player 1 Won!";
} else if(img2Src> img1Src){
    caption.innerText ="Player 2 Won!";
} else {
    caption.innerText ="Its a Draw.";
}
