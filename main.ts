let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
let baum = strip.range(0, 4)
strip.setBrightness(30)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Yellow))
strip.show()
basic.forever(function () {
    basic.pause(1000)
    baum.rotate(1)
    strip.show()
})
basic.forever(function () {
    basic.pause(1000)
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
    basic.pause(500)
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
})
