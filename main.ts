input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("C D E F G A B C5 ", 296)
})
input.onButtonPressed(Button.A, function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(2000)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(2000)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(1000)
})
