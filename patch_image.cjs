const Jimp = require("jimp");

async function run() {
    const image = await Jimp.read('./public/images/hero-bg.jpg');

    // Patch dimensions
    const patch = image.clone().crop(210, 300, 23, 55);

    // Composite twice to cover both handles roughly
    image.composite(patch, 235, 300);
    image.composite(patch, 258, 300);

    await image.writeAsync('./public/images/hero-bg.jpg');
    console.log("Image patched successfully");
}

run().catch(err => console.error(err));
