# LevelSearchRequest

---
Class for retrieving Search Information

## Parameters

---
### Optional parameters
type - Type of search | string<br><br>
query - Search query | string<br><br>
diff - Selected difficulty | string<br><br>
demonFilter - The type of Demon selected | string<br><br>
page - The page of the search results | number<br><br>
len - The length of the levels | string<br><br>
gauntlet - The Gauntlet ID of the levels | number<br><br>
song - ID of the offical song searched for | number<br><br>
customSong - ID of the custom song searched for | number<br><br>
featured - If the levels are featured | boolean<br><br>
epic - If the levels should be rated Epic | boolean<br><br>
originalOnly - If only original levels should be shown | boolean<br><br>
twoPlayer - Only show Two Player levels | boolean<br><br>
coins - If the levels should have verified coins | boolean<br><br>
star - If the levels should be starred | boolean<br><br>
noStar - If the levels shouldn't be starred | boolean<br><br>
count - How many levels should be returned | number

## Example

---

So we're trying to get Extreme Demons with **blood** in the name, and it would work something like this:
```JS
const { LevelSearchRequest } = require("gd-parser");
new LevelSearchRequest({
    query: "blood",
    diff: "DEMON",
    demonFilter: "EXTREME",
}, (json) => {
    console.log(json);
});
```
### Response
```JSON
[
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
    "password": null,
    "songName": "At the Speed of Light",
    "songAuthor": "Dimrain47",
    "songLink": "http://geometrydashcontent.com/songs/467339.mp3",
    "songSize": "9.56MB",
    "songID": 467339,
    "difficultyFace": "demon-extreme-featured",
    "extraData": null,
    "levelData": null
  },
  ...
]
```
