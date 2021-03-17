// It is always helpful to use comments in your code!

printBoilingTemp = () => {
  document.getElementById('boiling-temp').innerText = '212';
};

printFreezingTemp = () => {
    document.getElementById('freezing-temp').innerText = '32';
};

printWaterTemp = () => {
    document.getElementById('water-temp').innerText = '11';
};

addClass = (elementId, className) => {
    document.getElementById(elementId).classList.add(className);
};

removeClass = (elementId, className) => {
    document.getElementById(elementId).classList.remove(className);
};

showMessageBasedOnWaterTemperature = () => {
    setTimeout(() => {
        const waterTemp = parseInt(document.getElementById('water-temp').innerText);
        let elementId;
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
