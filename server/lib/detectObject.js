require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");
const fs = require("fs");
const tfnode = require("@tensorflow/tfjs-node");

const detectObject = async (imagePath, configuration) => {
  const imageBuffer = fs.readFileSync(imagePath);
  const tfimage = tfnode.node.decodeImage(imageBuffer);

  // Load the model.
  const model = await cocoSsd.load();

  // Classify the image.
  const predictions = await model.detect(tfimage);

  if (predictions.length > 0) {
    console.log("Predictions: ");
    console.log(predictions);
  }
};

module.exports = detectObject;
