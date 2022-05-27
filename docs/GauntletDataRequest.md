# GauntletDataRequest

---
Class for retrieving a Gauntlet's levels

## Parameters

---
### Required parameters
gauntlet - ID of the Gauntlet | number

*that's it...*

## Example

---
```JS
const { GauntletDataRequest } = require("gd-parser");
new GauntletDataRequest({
    gauntlet: 2
}, (json) => {
    console.log(json);
});
```
### Response
```JSON
[
  {
      "id": 20635816,
      "name": "Amplification",
      "description": "A cool style which I really like :) Is it too bad for feature, RobTop? >:[",
      "playerID": 4031523,
      "accountID": 1637483,
      "author": "Berkoo",
      "downloads": 37307016,
      "difficulty": "Hard",
      "likes": 1730103,
      "disliked": false,
      "stars": 5,
      "diamonds": 7,
      "orbs": 175,
      "version": 2,
      "length": "Long",
      "featured": true,
      "epic": false,
      "gameVersion": "2.0",
      "copiedID": 0,
      "twoPlayer": false,
      "large": false,
      "officalSong": 0,
      "customSong": 573278,
      "coins": 3,
      "verifiedCoins": true,
      "starsRequested": 4,
      "ldm": false,
      "objects": 0,
      "password": null,
      "songName": "Hooley Gun",
      "songAuthor": "garlagan",
      "songLink": "http://audio.ngfiles.com/573000/573278_Hooley-Gun.mp3",
      "songSize": "8.11MB",
      "songID": 573278,
      "difficultyFace": "hard-featured",
      "extraData": null,
      "levelData": null
    }, {
      "id": 28151870,
      "name": "Skyward",
      "description": "dont worry guys this has much better gameplay than amplification so enjoy lol",
      "playerID": 1479523,
      "accountID": 2583,
      "author": "Chaos",
      "downloads": 4449674,
      "difficulty": "Hard",
      "likes": 599219,
      "disliked": false,
      "stars": 5,
      "diamonds": 7,
      "orbs": 175,
      "version": 5,
      "length": "Long",
      "featured": true,
      "epic": false,
      "gameVersion": "2.1",
      "copiedID": 0,
      "twoPlayer": false,
      "large": false,
      "officalSong": 0,
      "customSong": 552058,
      "coins": 3,
      "verifiedCoins": true,
      "starsRequested": 3,
      "ldm": false,
      "objects": 11884,
      "password": null,
      "songName": "-Sky Fortress-",
      "songAuthor": "Waterflame",
      "songLink": "http://audio.ngfiles.com/552000/552058_-Sky-Fortress-.mp3",
      "songSize": "10.44MB",
      "songID": 552058,
      "difficultyFace": "hard-featured",
      "extraData": null,
      "levelData": null
    },
  ...
]
```
