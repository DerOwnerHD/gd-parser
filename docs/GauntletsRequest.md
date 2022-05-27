# GauntletsRequest

---
Class for retrieving all Gauntlets and their levels

## Parameters

---
### Optional parameters
special - Also return future 2.2 Gauntlets | boolean

*that's it...*

## Example

---
```JS
const { GauntletsRequest } = require("gd-parser");
new GauntletsRequest({}, (json) => {
    console.log(json);
});
```
### Response
```JSON
[
  {
    "id": 1,
    "name": "Fire Gauntlet",
    "levels": [27732941, 28200611, 27483789, 28225110, 27448202]
  }, {
    "id": 2,
    "name": "Ice Gauntlet",
    "levels": [20635816, 28151870, 25969464, 24302376, 27399722]
  },
  ...
]
```
