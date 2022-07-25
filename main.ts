input.onButtonPressed(Button.A, function () {
    led.plotBarGraph(
    4,
    6
    )
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    led.plot(4, 4)
    basic.pause(100)
    basic.showArrow(ArrowNames.North)
    basic.pause(100)
    basic.clearScreen()
})
music.playMelody("E F G A B A G F ", 120)
basic.forever(function () {
	
})
