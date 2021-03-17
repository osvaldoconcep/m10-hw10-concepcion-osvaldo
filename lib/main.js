'use strict';

// It is always helpful to use comments in your code!

var printBoilingTemp = function printBoilingTemp() {
    document.getElementById('boiling-temp').innerText = '212';
};

var printFreezingTemp = function printFreezingTemp() {
    document.getElementById('freezing-temp').innerText = '32';
};

var printWaterTemp = function printWaterTemp() {
    document.getElementById('water-temp').innerText = '11';
};

var addClass = function addClass(elementId, className) {
    document.getElementById(elementId).classList.add(className);
};

var removeClass = function removeClass(elementId, className) {
    document.getElementById(elementId).classList.remove(className);
};

var showMessageBasedOnWaterTemperature = function showMessageBasedOnWaterTemperature() {
    setTimeout(function () {
        var waterTemp = parseInt(document.getElementById('water-temp').innerText);
        var elementId = void 0;
        var color = void 0;
        if (waterTemp > 212) {
            elementId = 'boiling';
            color = 'lightcoral';
        } else if (waterTemp < 32) {
            elementId = 'frozen';
            color = 'lightcyan';
        } else {
            elementId = 'good-temp';
            color = 'lightyellow';
        }
        removeClass(elementId, 'hide');
        addClass(elementId, 'show');
        document.body.style.backgroundColor = color;
    }, 3000);
};

printBoilingTemp();
printFreezingTemp();
printWaterTemp();
showMessageBasedOnWaterTemperature();