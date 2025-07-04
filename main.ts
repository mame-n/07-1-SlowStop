input.onButtonPressed(Button.A, function () {
    servos.P1.run(50)
})
input.onButtonPressed(Button.AB, function () {
    let おわる時間 = 0
    for (let カウンター = 0; カウンター <= おわる時間; カウンター++) {
        servos.P1.run(50 - カウンター * (50 / おわる時間))
        basic.pause(50)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let カウンター = 0; カウンター <= 50; カウンター++) {
        servos.P1.run(50 - カウンター)
        basic.pause(50)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    servos.P1.run(0)
})
basic.forever(function () {
	
})
