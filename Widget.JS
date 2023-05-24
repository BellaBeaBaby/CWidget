const elapsedDays = Math.floor((new Date() - new Date(2023, 4, 23, 5, 30)) / (1000 * 60 * 60 * 24))

let text = FileManager.iCloud().readString(FileManager.iCloud().joinPath(FileManager.iCloud().documentsDirectory(), "/System/list.txt")).toString()

const phraseList = text.split('\n').map(item => item.trim());

let display = phraseList[elapsedDays]
let widget = new ListWidget()
widget.backgroundColor = new Color("686fcf")
let widgetText = widget.addText(display)
widgetText.centerAlignText()
widgetText.textColor = new Color("#22222b")
let FS = calculateFontSize(display)
widgetText.font = new Font("ArialRoundedMTBold", FS)
if (config.runsInWidget) {
	Script.setWidget(widget)
} else {
	widget.presentSmall()
}
Script.complete()

function calculateFontSize(text) {
    const length = text.length
    if (length <= 20) {
        return 26
    } else if (length <= 30) {
        return 20
    } else {
        return 16
    }
}
Script.complete(); // Aborts the script execution
return
