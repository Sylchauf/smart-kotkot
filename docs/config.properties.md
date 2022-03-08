| Property | Required | Default value | Description                                 |
| -------- | -------- | ------------- | ------------------------------------------- |
| theme    | No       | light         | Theme of the app. Values : `dark` or `light |
| locale   | Yes      | en            | The locale used in to display the interface |
| camera   | No       | []            | Camera list                                 |

camera properties

| Property    | Required | Default value | Description                                               |
|-------------| -------- | ------------- |-----------------------------------------------------------|
| name        | Yes      |               | The name of the camera                                    |
| module      | Yes      |               | One the this modules : `UsbWebcam` or `RaspberryPiWebcam` |
| options     | Yes      |               | Options                                                   |
| intervalSec | Yes      |               | interval in seconds between screenshot                    |

@TODO
