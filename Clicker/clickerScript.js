var total = 0;

var perClick = 1;
var autoClick = 0;

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
        document.getElementById("perClickStat").textContent = perClick;
        document.getElementById("choctext").textContent = total;
    } else {
        perClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            perClickId.textContent = "(" + perClickCost + ") +" + 1 + " Per Click";
        }, 600);
    }
}

var autoClickCost = 100;
var autoActivated = false;

function IncAutoClick() {
    var autoClickId = document.getElementById("autoClick");

    if (total >= autoClickCost) {
        total -= autoClickCost;
        autoClickCost -= 2;
        autoClickCost = Math.round(1.5 * autoClickCost);
        autoClick += 1;
        if (autoClick == 1 && !autoActivated) {
            autoActivated = true;
            AutoClicker();
        }
        autoClickId.textContent = "(" + autoClickCost + ") +1 Click Per Second";
        document.getElementById("autoClickStat").textContent = autoClick;
        document.getElementById("choctext").textContent = total;
    } else {
        autoClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            autoClickId.textContent = "(" + autoClickCost + ") +1 Click Per Second";
        }, 600);
    }
}

var tempTotal = 0;

function AutoClicker() {
    tempTotal += autoClick * 10
    console.log(tempTotal);
    while (tempTotal >= 100) {
        tempTotal -= 100; total += 1;
    }
    document.getElementById("choctext").textContent = total;

    setTimeout(function () {
        AutoClicker();
    }, 100);
}