function dicechallenge(){
  
var player1=Math.random();
var player2=Math.random();
player1=(Math.floor(player1*6)+1);
player2=(Math.floor(player2*6)+1);
if(player1===player2){
  document.querySelector("div.div3 p").innerHTML="Draw!!!";
}
else if(player1>player2){
  document.querySelector("div.div3 p").innerHTML="Player 1 Wins!!!";
}
else if(player1<player2){
  document.querySelector("div.div3 p").innerHTML=" Player 2 Wins!!!";
}

if (player1===1){
  document.querySelector("div.div1 img").src="Images/dice1.png";
}else if(player1===2){
  document.querySelector("div.div1 img").src="Images/dice2.png";
}else if(player1===3){
  document.querySelector("div.div1 img").src="Images/dice3.png";
}else if(player1===4){
  document.querySelector("div.div1 img").src="Images/dice4.png";
}else if(player1===5){
  document.querySelector("div.div1 img").src="Images/dice5.png";
}else if(player1===6){
  document.querySelector("div.div1 img").src="Images/dice6.png";
}

if (player2===1){
  document.querySelector("div.div2 img").src="Images/dice1.png";
}else if(player2===2){
  document.querySelector("div.div2 img").src="Images/dice2.png";
}else if(player2===3){
  document.querySelector("div.div2 img").src="Images/dice3.png";
}else if(player2===4){
  document.querySelector("div.div2 img").src="Images/dice4.png";
}else if(player2===5){
  document.querySelector("div.div2 img").src="Images/dice5.png";
}else if(player2===6){
  document.querySelector("div.div2 img").src="Images/dice6.png";
}

}
