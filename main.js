function randOutput() {
    PA = partA[Math.floor(Math.random() * partA.length)];
    PB = partB[Math.floor(Math.random() * partB.length)];

    return PA + PB;
}
$(document).ready(function() {
    $("#generate").click(function() {
        PAPB = randOutput();
        $("#output").html(PAPB);
    })
})
