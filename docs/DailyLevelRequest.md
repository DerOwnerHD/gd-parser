# DailyLevelRequest

---
Class for retrieving details of a Daily or Weekly level

## Parameters

---
### Optional parameters
weekly - If we should get the Weekly level | boolean

*that's it...*

## Example

---
```JS
const { DailyLevelRequest } = require("gd-parser");
new DailyLevelRequest({
    weekly: true
}, (json) => {
    console.log(json);
});
```
### Response

**timeLeft** is always in seconds
```JSON
{
  "id": 79958107,
  "name": "RETRO BLITZ",
  "description": "banjo blitz coming 2026",
  "playerID": 12098486,
  "accountID": 2816040,
  "author": "Danke",
  "downloads": 398644,
  "difficulty": "Easy Demon",
  "likes": 21857,
  "disliked": false,
  "stars": 10,
  "diamonds": 12,
  "orbs": 500,
  "version": 2,
  "length": "Long",
  "featured": true,
  "epic": true,
  "gameVersion": "2.1",
  "copiedID": 0,
  "twoPlayer": false,
  "large": true,
  "officalSong": 0,
  "customSong": 827441,
  "coins": 0,
  "verifiedCoins": false,
  "starsRequested": 10,
  "ldm": true,
  "objects": 65535,
  "password": 696969,
  "songName": "1up Muncher",
  "songAuthor": "Dunderpatrullen",
  "songLink": "https://audio.ngfiles.com/827000/827441_1up-Muncher.mp3?f1539078559",
  "songSize": "10.31MB",
  "songID": 827441,
  "difficultyFace": "demon-easy-epic",
  "extraData": "<some useless string here>",
  "levelData": "<the actual encoded level data>",
  "timeLeft": 36420
}
```
