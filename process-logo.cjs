const Jimp = require('jimp');

async function processLogo() {
  try {
    const image = await Jimp.read('./src/assets/attachments/logo.png');
    const width = image.bitmap.width;
    const height = image.bitmap.height;

    const outImage = image.clone();
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const hex = outImage.getPixelColor(x, y);
        const rgba = Jimp.intToRGBA(hex);
        
        // If pixel is near-white background
        if (rgba.r > 200 && rgba.g > 200 && rgba.b > 200) {
          outImage.setPixelColor(Jimp.rgbaToInt(0, 0, 0, 0), x, y);
        } 
        // If pixel is visible (the logo parts)
        else if (rgba.a > 50) {
          // Accent Cyan (#00F2FF)
          outImage.setPixelColor(Jimp.rgbaToInt(0, 242, 255, rgba.a), x, y);
        }
      }
    }

    await outImage.writeAsync('./src/assets/logo-transparent.png');

    // Create favicon by cropping the upper portion (the globe).
    // The globe is typically centered horizontally and in the top half.
    const cropSize = Math.floor(width * 0.65);
    const startX = Math.floor((width - cropSize) / 2);
    const startY = Math.floor(height * 0.1); 
    
    const favicon = outImage.clone().crop(startX, startY, cropSize, cropSize);
    await favicon.resize(64, 64);
    await favicon.writeAsync('./public/favicon.png');

    console.log("Logo processing complete");
  } catch (err) {
    console.error("Error processing logo:", err);
    process.exit(1);
  }
}

processLogo();
