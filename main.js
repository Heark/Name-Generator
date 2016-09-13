function randOutput() {
 PA = partA[Math.floor(Math.random() * partA.length)];
 PB = partB[Math.floor(Math.random() * partB.length)];
 
 return PA + PB;
}

$("#generate").click(function(){
 PAPB = randOutput();
  $("#output").html(PAPB.toString());
}) 
