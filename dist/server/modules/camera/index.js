"use strict";
var RaspberryPiWebcam = require("./RaspberryPiWebcam");
var UsbWebcam = require("./UsbWebcam");
var getCameraInstance = function (camera) {
    switch (camera.module) {
        case "RaspberryPiWebcam":
            return new RaspberryPiWebcam(camera);
        case "UsbWebcam":
            return new UsbWebcam(camera);
    }
};
exports.getCameraInstance = getCameraInstance;
