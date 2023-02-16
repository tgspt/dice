var numRandom1 = Math.floor(Math.random()*6+1);
var numRandom2 = Math.floor(Math.random()*6+1);
//console.log(numRandom1)
document.querySelector(".dice .img1").setAttribute("src","images/dice"+numRandom1+".png");
document.querySelector(".dice .img2").setAttribute("src","images/dice"+numRandom2+".png");
if (numRandom1>numRandom2) {
    document.querySelector(".container .winner").innerHTML="🚩Player 1 won";
}else if(numRandom1<numRandom2){
    document.querySelector(".container .winner").innerHTML="Player 2 won🚩";
    
}else{
    document.querySelector(".container .winner").innerHTML="🚩DRAW🚩";
}

console.log(document.querySelector(".container .winner"))