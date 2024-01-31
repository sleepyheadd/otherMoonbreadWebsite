var total = 0;

var perClick = 1;

function ChocClicked() {
    var choccros = document.getElementById("croissant");
    var choctext = document.getElementById("choctext");

    total += perClick;
    choctext.textContent = total;

    choccros.style = "filter: brightness(90%); margin-top:5px; margin-left:5px; width:246px; height:246px;"
    setTimeout(function () {
        choccros.style = "filter: brightness(100%);"
    }, 50);
}

var perClickCost = 50;

function IncClick() {
    var perClickId = document.getElementById("perClick")

    if (total >= perClickCost) {
        total -= perClickCost;
        perClickCost -= 2;
        perClickCost = Math.round(1.5 * perClickCost);
        perClick += 1;
        perClickId.textContent = "(" + perClickCost + ") +" + 1 + " Per Click";
        document.getElementById("choctext").textContent = total;
    } else {
        perClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            perClickId.textContent = "(" + perClickCost + ") +" + 1 + " Per Click";
        }, 600);
    }
}