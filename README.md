# Smart KotKot

## Presentation

Smart KotKot: The connected and opensource coop.

![Smart KotKot](public/screen.png)

## Hardware compatibility

- Any linux server with at least 512Mb RAM (x64, x86, ARM) like Raspberry PI (2,3,4,Zero)
- Camera compatibility:
  - Usb Webcam
  - Raspberry PI Cam
  - ONVIF (like [Sonoff gk200 hack](https://github.com/roleoroleo/sonoff-hack))
- Light: anyone controlled by GPIO or [USB GCERelay](https://www.gce-electronics.com/en/-usb/247-126-controller-usb-8-relay-board.html#/29-boitier-without_box)
- Door/Motor : anyone controlled by GPIO or [USB GCERelay](https://www.gce-electronics.com/en/-usb/247-126-controller-usb-8-relay-board.html#/29-boitier-without_box)
- Temperature sensor: TEMPerHUM

💡 _Smart KotKot_ is **modular** and it's **easy to add new compatibility devices**. Check the directory `/server/modules` to create your own driver and/or ask help in a new issue.

## Installation

Clone this repository on your chicken's server with the following command :

```bash
git clone https://github.com/Sylchauf/smart-kotkot.git
```

Then, install the following requirements.

### Requirements

- Docker ([Installation](https://docs.docker.com/get-docker/))
- Docker-compose ([Installation on x64/x86](https://docs.docker.com/compose/install/) or [Installation on raspbian](https://dev.to/elalemanyo/how-to-install-docker-and-docker-compose-on-raspberry-pi-1mo))

### Run

```bash
docker-compose up
```

Your module is now live at `http://YOUR_LOCAL_IP:3000`

### Module

You need to run a module to command your device. See [Module page](https://github.com/Sylchauf/smart-kotkot-module)

## Developers

### Rebuild and push the image

docker build -t sylchauf/smart-kotkot:latest . && docker push sylchauf/smart-kotkot:latest
