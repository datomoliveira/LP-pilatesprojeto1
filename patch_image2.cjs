const Jimp = require("jimp");
const fs = require('fs');
const https = require('https');

const url = "https://lh3.googleusercontent.com/aida-public/AB6AXuB65b-PfNEnO18_KdNKaVr1BKYM-aq79vsYMQjbiKWGRdPxs7zBRHy8fB1CRfyleEZW6hXPhBfqVAIz2lwKP8Gzhwgfhtsgac277L67c3eHfwKsm1OBmzw25HAPBMuluXQgUogdNisZzAUg-E05cwRt4WPrD8_qV7nDcAO8dCZy-I0mbNsy9ggfU52rdlxn-R78PMPML9bgMppG9jpNOn9JoOsmZVelw9UlUjPuqJfr7OkWp8UyBVHMYxCOvs0Z-VGLeRbOeO_C9b1X";
const dest = "./public/images/hero-bg.jpg";

https.get(url, (res) => {
  const file = fs.createWriteStream(dest);
  res.pipe(file);
  file.on('finish', () => {
    file.close(async () => {
      // Image downloaded, now patch
      const image = await Jimp.read(dest);
      
      // The cushion is flat black at y ~ 342. 
      // The handles stick up between x=220 and x=270, roughly y=305 to 340
      // Let's copy the pure wall ABOVE the handles. Wall at y=270 is clean.
      const wallPatch = image.clone().crop(220, 260, 60, 45); 
      
      // Paste the wall patch over the handles (y=305)
      image.composite(wallPatch, 220, 305);
      
      // Some parts might still show if they are lower, let's also fill a thin black line for the cushion edge just in case
      // The cushion edge at y=344
      const blackPatch = new Jimp(60, 10, '#000000');
      // Actually the cushion is not pitch black, let's grab a piece of the cushion from the left: x=100, y=345
      const cushionPatch = image.clone().crop(100, 345, 60, 20);
      image.composite(cushionPatch, 220, 345);

      await image.writeAsync(dest);
      console.log("Patched correctly!");
    });
  });
});
