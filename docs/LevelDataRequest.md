# LevelDataRequest

---
Class for retrieving specific Level data and downloading it

## Parameters

---
### Required parameters
id - ID of the level to download | number

*that's it...*

## Example

---
```JS
const { LevelDataRequest } = require("gd-parser");
new LevelDataRequest({
    id: 10565740
}, (json) => {
    console.log(json);
});
```
### Response
```JSON
{
  "id": 10565740,
  "name": "Bloodbath",
  "description": "Whose blood will be spilt in the Bloodbath? Who will the victors be? How many will survive? Good luck...",
  "playerID": 503085,
  "accountID": 37415,
  "author": "Riot",
  "downloads": 43503743,
  "difficulty": "Extreme Demon",
  "likes": 2348476,
  "disliked": false,
  "stars": 10,
  "diamonds": 12,
  "orbs": 500,
  "version": 3,
  "length": "Long",
  "featured": true,
  "epic": false,
  "gameVersion": "2.1",
  "copiedID": 7679228,
  "twoPlayer": false,
  "large": false,
  "officalSong": 0,
  "customSong": 467339,
  "coins": 0,
  "verifiedCoins": false,
  "starsRequested": 0,
  "ldm": false,
  "objects": 24746,
  "password": 0,
  "songName": "At the Speed of Light",
  "songAuthor": "Dimrain47",
  "songLink": "http://geometrydashcontent.com/songs/467339.mp3",
  "songSize": "9.56MB",
  "songID": 467339,
  "difficultyFace": "demon-extreme-featured",
  "extraData": "<some useless string here>",
  "levelData": "<the actual encoded level data>"
}
```
