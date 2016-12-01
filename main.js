function randOutput() {
   var PA = partA[Math.floor(Math.random() * partA.length)];
   var PB = partB[Math.floor(Math.random() * partB.length)];

    return PA + PB;
}
$(document).ready(function() {
    $("#generate").click(function() {
        var PAPB = randOutput();
        $("#output").html(PAPB);
    })
})
