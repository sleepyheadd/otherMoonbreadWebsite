var total = 4000;

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
var perClickAmount = 1;
var perClickIncrement = 1;

function IncClick() {
    var perClickId = document.getElementById("perClick")

    if (total >= perClickCost) {
        total -= perClickCost;
        perClickCost = Math.round(1.2 * perClickCost);
        perClick += perClickIncrement;
        perClickAmount++;

        perClickId.textContent = "(" + perClickCost + ") +" + perClickIncrement + " Per Click";
        document.getElementById("perClickStat").textContent = perClick;
        document.getElementById("choctext").textContent = total;
        document.getElementById("perClickCount").textContent = perClickAmount;
    } else {
        perClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            perClickId.textContent = "(" + perClickCost + ") +" + perClickIncrement + " Per Click";
        }, 600);
    }
}

var autoClickCost = 100;
var autoClickAmount = 0;
var autoActivated = false;
var BakerIncrement = 1;

function IncAutoClick() {
    var autoClickId = document.getElementById("autoClick");

    if (total >= autoClickCost) {
        total -= autoClickCost;
        autoClickCost = Math.round(1.3 * autoClickCost);
        autoClick += BakerIncrement;
        autoClickAmount++;
        if (autoClick == BakerIncrement && !autoActivated) {
            autoActivated = true;
            AutoClicker();
        }

        autoClickId.textContent = "(" + autoClickCost + ") +" + BakerIncrement + " Click Per Second";
        document.getElementById("autoClickStat").textContent = autoClick;
        document.getElementById("choctext").textContent = total;
        document.getElementById("IncAutoCount").textContent = autoClickAmount;
    } else {
        autoClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            autoClickId.textContent = "(" + autoClickCost + ") +" + BakerIncrement + " Click Per Second";
        }, 600);
    }
}

var storeClickCost = 500;
var storeClickAmount = 0;
var StoreIncrement = 7;

function StoreAutoClick() {
    var storeClickId = document.getElementById("storeClick");

    if (total >= storeClickCost) {
        total -= storeClickCost;
        storeClickCost = Math.round(1.3 * storeClickCost);
        autoClick += StoreIncrement;
        storeClickAmount++;
        if (autoClick == StoreIncrement && !autoActivated) {
            autoActivated = true;
            AutoClicker();
        }

        storeClickId.textContent = "(" + storeClickCost + ") +" + StoreIncrement + " Click Per Second";
        document.getElementById("autoClickStat").textContent = autoClick;
        document.getElementById("choctext").textContent = total;
        document.getElementById("StoreAutoCount").textContent = storeClickAmount;
    } else {
        storeClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            storeClickId.textContent = "(" + storeClickCost + ") +" + StoreIncrement + " Clicks Per Second";
        }, 600);
    }
}

var factoryClickCost = 3200;
var factoryAmount = 0;
var factoryIncrement = 50;

function FactoryAutoClick() {
    var storeClickId = document.getElementById("factoryClick");

    if (total >= factoryClickCost) {
        total -= factoryClickCost;
        factoryClickCost = Math.round(1.3 * factoryClickCost);
        autoClick += factoryIncrement;
        factoryAmount++;
        if (autoClick == factoryIncrement && !autoActivated) {
            autoActivated = true;
            AutoClicker();
        }

        storeClickId.textContent = "(" + factoryClickCost + ") +" + factoryIncrement + " Clicks Per Second";
        document.getElementById("autoClickStat").textContent = autoClick;
        document.getElementById("choctext").textContent = total;
        document.getElementById("FactoryAutoCount").textContent = factoryAmount;
    } else {
        storeClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            storeClickId.textContent = "(" + factoryClickCost + ") +" + factoryIncrement + " Clicks Per Second";
        }, 600);
    }
}



var tempTotal = 0;

function AutoClicker() {
    tempTotal += autoClick * 10
    //console.log(tempTotal);
    while (tempTotal >= 100) {
        tempTotal -= 100; total += 1;
    }
    document.getElementById("choctext").textContent = total;

    setTimeout(function () {
        AutoClicker();
    }, 100);
}

var clickUpgradeCost = 500;
var clickUpgradeAmt = 0;

function doubleClickingPower() {
    var clickUpgradeText = document.getElementById("clickUpgrade");
    var perClickId = document.getElementById("perClick");

    if (total >= clickUpgradeCost) {
        total -= clickUpgradeCost;
        clickUpgradeCost = Math.round(3.2 * clickUpgradeCost);

        perClick *= 2;
        perClickIncrement *= 2;

        clickUpgradeAmt++;

        clickUpgradeText.textContent = "(" + clickUpgradeCost + ") + x2 Per Click";
        perClickId.textContent = "(" + perClickCost + ") +" + perClickIncrement + " Per Click";
        document.getElementById("perClickStat").textContent = perClick;
        document.getElementById("choctext").textContent = total;
        document.getElementById("clickUpgradeCount").textContent = clickUpgradeAmt;
    } else {
        clickUpgradeText.textContent = "Not enough croissants!!";
        setTimeout(function () {
            clickUpgradeText.textContent = "(" + clickUpgradeCost + ") x2 Per Click";
        }, 600);
    }
}

var bakerUpgradeCost = 2000;
var bakerUpgradeAmt = 0;

function doubleBakingPower() {
    var BakerUpgradeText = document.getElementById("bakerUpgrade");
    var BakerId = document.getElementById("autoClick");

    if (total >= bakerUpgradeCost) {
        total -= bakerUpgradeCost;
        bakerUpgradeCost = Math.round(2.3 * bakerUpgradeCost);

        autoClick = autoClick + autoClickAmount * BakerIncrement;
        BakerIncrement *= 2;

        bakerUpgradeAmt++;

        BakerUpgradeText.textContent = "(" + bakerUpgradeCost + ") x2 Helpful Baker Output";
        BakerId.textContent = "(" + autoClickCost + ") +" + BakerIncrement + " Click Per Second";
        document.getElementById("autoClickStat").textContent = autoClick;
        document.getElementById("choctext").textContent = total;
        document.getElementById("bakerUpgradeCount").textContent = bakerUpgradeAmt;
    } else {
        BakerUpgradeText.textContent = "Not enough croissants!!";
        setTimeout(function () {
            BakerUpgradeText.textContent = "(" + bakerUpgradeCost + ") x2 Helpful Baker Output";
        }, 600);
    }
}