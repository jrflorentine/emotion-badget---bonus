basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.Silly)
    basic.pause(100)
})
