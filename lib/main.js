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
        if (waterTemp > 212) {
            elementId = 'boiling';
        } else if (waterTemp < 32) {
            elementId = 'frozen';
        } else {
            elementId = 'good-temp';
        }
        removeClass(elementId, 'hide');
        addClass(elementId, 'show');
    }, 3000);
};

printBoilingTemp();
printFreezingTemp();
printWaterTemp();
showMessageBasedOnWaterTemperature();