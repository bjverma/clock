setInterval(showTime, 1000)
    // queryselector take css-selectors
const hourHand = document.querySelector('[hour-Hand]')
const minHand = document.querySelector('[min-Hand]')
const secHand = document.querySelector('[sec-Hand]')

function showTime() {
    // find the current time using Date function
    const currentDate = new Date()
        // get the sec-min-hour fractions for calculating the time and showing
    const secRatio = currentDate.getSeconds() / 60
    const minRatio = (secRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minRatio + currentDate.getHours()) / 12
        // fix the rotations that will be shown on the watch
    fixRotation(secHand, secRatio)
    fixRotation(minHand, minRatio)
    fixRotation(hourHand, hourRatio)
}

function fixRotation(niddle, rotationRatio) {
    niddle.style.setProperty('--rotation', rotationRatio * 360)

}
showTime()