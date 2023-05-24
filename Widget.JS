const widget = new ListWidget();
const image = await new Request('https://raw.githubusercontent.com/BellaBeaBaby/CWidget/main/Image.jpg').loadImage();
    
const imageView = widget.addImage(image);

imageView.centerAlignImage();
if (config.runsInWidget) {
      Script.setWidget(widget);
} else {
      widget.presentMedium();
}