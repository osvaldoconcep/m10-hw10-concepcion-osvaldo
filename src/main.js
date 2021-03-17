// It is always helpful to use comments in your code!

const printBoilingTemp = () => {
  document.getElementById('boiling-temp').innerText = '212';
};

const printFreezingTemp = () => {
    document.getElementById('freezing-temp').innerText = '32';
};

const printWaterTemp = () => {
    document.getElementById('water-temp').innerText = '11';
};

const addClass = (elementId, className) => {
    document.getElementById(elementId).classList.add(className);
};

const removeClass = (elementId, className) => {
    document.getElementById(elementId).classList.remove(className);
};

const showMessageBasedOnWaterTemperature = () => {
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
