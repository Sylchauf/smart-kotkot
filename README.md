# Smart KotKot

## Presentation

## Hardware compatibility

## Installation

### Requirements

- Node.JS v14+
- fswebcam

### Run

```bash
npm run start
```

## Configuration

## API

### Door

#### Open and close the door

Moves the door up or down.

- `/api/door/up` Open the door entirely
- `/api/door/down` Close the door entirely

#### Calibration

To initialize your door state, on if the door is not entirely open/closed, small correction movements can be fired

- `/api/door/calibrate/up` Move up the door for `config.door.correctionSec`s (default is 1s) and consider the door entirely open
- `/api/door/calibrate/down` Move down the door for `config.door.correctionSec`s (default is 1s) and consider the door entirely close

#### Status

- `/api/door/status` Get the state of the door

### Camera

#### List all cameras

Get an array of all initialized camera

- `/api/camera/list`

#### Get images

Access to picture taken by camera.
Replace `{CAMERA_ID}` by the id given in the camera list endpoint
Replace `{IMAGE_ID}` by the id given in the images list endpoint

- `/api/camera/images/{CAMERA_ID}/list` Get a list of all images taken.
- `/api/camera/images/{CAMERA_ID}/last` Get the last picture taken by this camera
- `/api/camera/images/{CAMERA_ID}/{IMAGE_ID}`

### Light

#### Turn on and off

- `/api/light/on` Turn the light on
- `/api/light/off` Turn the light off

#### Status

- `/api/light/status` Get the state of the light

## Troubleshooting

### Give USB access to get data from TEMPerHUM

```bash
echo 'SUBSYSTEM=="usb", MODE="0660", GROUP="plugdev"' > /etc/udev/rules.d/00-usb-permissions.rules
udevadm control --reload-rules
```

## Developers

### Libraries used

- Next.JS v11
- React.JS v17
- Material-ui v5

### Rebuild the image

```bash
docker build . -t sylchauf/smart-kotkot
```
