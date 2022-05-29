# SongRequest

---
Class for retrieving song data

## Parameters

---
### Required parameters
id - ID of the song | number

## Example

---
This gets the data of **Xenogenesis** by **TheFatRat**:
```JS
const { SongRequest } = require("gd-parser");
new SongRequest({
    id: 621136
}, (json) => {
    console.log(json);
});
```
### Response
```JSON
{
  "id": 621136,
  "name": "TheFatRat - Xenogenesis",
  "artist": {
    "id": 38970,
    "name": "ThisIsTheFatRat",
    "scouted": false,
    "youtube": "UCa_UMppcMsHIzb5LDx1u9zQ"
  },
  "size": "9.01MB",
  "priority": 0,
  "link": "http://audio.ngfiles.com/621000/621136_TheFatRat---Xenogenesis.mp3",
  "video": null
}
```
