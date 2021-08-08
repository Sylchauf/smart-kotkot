# Installation

## Requirements

- Node.JS v14+
- fswebcam

## Run

```bash
npm run start
```

# API

## Door

### Open and close the door

Moves the door up or down.

- `/api/door/up` open the door entirely
- `/api/door/down` close the door entirely

### Calibration

To initialize your door state, on if the door is not entirely open/closed, small correction movements can be fired

- `/api/door/calibrate/up` Move up the door for `config.door.correctionSec`s (default is 1s) and consider the door entirely open
- `/api/door/calibrate/down` Move down the door for `config.door.correctionSec`s (default is 1s) and consider the door entirely close

Give USB access to get data from TEMPerHUM
echo 'SUBSYSTEM=="usb", MODE="0660", GROUP="plugdev"' > /etc/udev/rules.d/00-usb-permissions.rules
udevadm control --reload-rules
