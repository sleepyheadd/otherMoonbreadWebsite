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
var perClickAmount = 0;

function IncClick() {
    var perClickId = document.getElementById("perClick")

    if (total >= perClickCost) {
        total -= perClickCost;
        perClickCost = Math.round(1.2 * perClickCost);
        perClick += 1;
        perClickAmount++;

        perClickId.textContent = "(" + perClickCost + ") +" + 1 + " Per Click";
        document.getElementById("perClickStat").textContent = perClick;
        document.getElementById("choctext").textContent = total;
        document.getElementById("perClickCount").textContent = perClickAmount;
    } else {
        perClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            perClickId.textContent = "(" + perClickCost + ") +" + 1 + " Per Click";
        }, 600);
    }
}

var autoClickCost = 100;
var autoClickAmount = 0;
var autoActivated = false;

function IncAutoClick() {
    var autoClickId = document.getElementById("autoClick");

    if (total >= autoClickCost) {
        total -= autoClickCost;
        autoClickCost = Math.round(1.3 * autoClickCost);
        autoClick += 1;
        autoClickAmount++;
        if (autoClick == 1 && !autoActivated) {
            autoActivated = true;
            AutoClicker();
        }

        autoClickId.textContent = "(" + autoClickCost + ") +1 Click Per Second";
        document.getElementById("autoClickStat").textContent = autoClick;
        document.getElementById("choctext").textContent = total;
        document.getElementById("IncAutoCount").textContent = autoClickAmount;
    } else {
        autoClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            autoClickId.textContent = "(" + autoClickCost + ") +1 Click Per Second";
        }, 600);
    }
}

var storeClickCost = 500;
var storeClickAmount = 0;

function StoreAutoClick() {
    var storeClickId = document.getElementById("storeClick");

    if (total >= storeClickCost) {
        total -= storeClickCost;
        storeClickCost = Math.round(1.3 * storeClickCost);
        autoClick += 7;
        storeClickAmount++;
        if (autoClick == 7 && !autoActivated) {
            autoActivated = true;
            AutoClicker();
        }

        storeClickId.textContent = "(" + storeClickCost + ") +7 Click Per Second";
        document.getElementById("autoClickStat").textContent = autoClick;
        document.getElementById("choctext").textContent = total;
        document.getElementById("StoreAutoCount").textContent = storeClickAmount;
    } else {
        storeClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            storeClickId.textContent = "(" + storeClickCost + ") +7 Clicks Per Second";
        }, 600);
    }
}

var factoryClickCost = 3200;
var factoryAmount = 0;

function FactoryAutoClick() {
    var storeClickId = document.getElementById("factoryClick");

    if (total >= factoryClickCost) {
        total -= factoryClickCost;
        factoryClickCost = Math.round(1.3 * factoryClickCost);
        autoClick += 50;
        factoryAmount++;
        if (autoClick == 50 && !autoActivated) {
            autoActivated = true;
            AutoClicker();
        }

        storeClickId.textContent = "(" + factoryClickCost + ") +50 Clicks Per Second";
        document.getElementById("autoClickStat").textContent = autoClick;
        document.getElementById("choctext").textContent = total;
        document.getElementById("FactoryAutoCount").textContent = factoryAmount;
    } else {
        storeClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            storeClickId.textContent = "(" + factoryClickCost + ") +50 Clicks Per Second";
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