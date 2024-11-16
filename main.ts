input.onButtonPressed(Button.A, function () {
    radio.sendString("hello")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
